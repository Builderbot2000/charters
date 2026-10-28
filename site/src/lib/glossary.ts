// Loads the glossary from content/ at build time and renders it to HTML.
// In any text field, [[Term]] or [[Term|label]] links to another entry by its term or aka.
import Markdoc, { type Config } from "@markdoc/markdoc";
const { Tag } = Markdoc;
import YAML from "yaml";

type Section = { id: string; n: number; title: string; intro: string; order: number; part: string; terms: Term[] };
type Term = {
  id: string; num: string; term: string; aka: string[]; layer: string; section: string; order: number;
  definition: string; example: string; seeAlso: string[]; body: string; search: string;
};

const sectionFiles = import.meta.glob<string>("/content/sections/*.yaml", { query: "?raw", import: "default", eager: true });
const termFiles = import.meta.glob<string>("/content/terms/*.mdoc", { query: "?raw", import: "default", eager: true });
const siteFile = import.meta.glob<string>("/content/site.yaml", { query: "?raw", import: "default", eager: true });
const relativesFile = import.meta.glob<string>("/content/relatives.yaml", { query: "?raw", import: "default", eager: true });

const fileSlug = (p: string) => p.split("/").pop()!.replace(/\.\w+$/, "");
const LINK = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

// Code blocks are diagrams, except language "charter", which is a sample charter.
const markdoc: Config = {
  nodes: {
    document: { transform: (node, config) => node.transformChildren(config) },
    fence: {
      attributes: { content: { type: String }, language: { type: String } },
      transform(node) {
        const { content, language } = node.attributes;
        const label = language === "charter" ? "Example charter specification" : "Diagram";
        return new Tag("pre", { "aria-label": label }, [content.replace(/\n$/, "")]);
      },
    },
    table: {
      transform(node, config) {
        return new Tag("div", { class: "tbl" }, [new Tag("table", {}, node.transformChildren(config))]);
      },
    },
  },
};

function toHTML(source: string) {
  const ast = Markdoc.parse(source);
  const errors = Markdoc.validate(ast, markdoc).filter(e => e.error.level !== "debug" && e.error.level !== "info");
  errors.forEach(e => console.warn(`Markdoc: ${e.error.message} (line ${e.lines[0] + 1})`));
  return Markdoc.renderers.html(Markdoc.transform(ast, markdoc));
}
const inline = (s: string) => toHTML(s).replace(/^<p>([\s\S]*)<\/p>$/, "$1");
const strip = (s: string) => s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

export function loadGlossary() {
  const sections = new Map<string, Section>();
  for (const [p, raw] of Object.entries(sectionFiles)) {
    const d = YAML.parse(raw) ?? {};
    sections.set(fileSlug(p), { id: "s-" + fileSlug(p), n: 0, title: d.title, intro: d.intro ?? "", order: d.order ?? 0, part: d.part ?? "framework", terms: [] });
  }

  const terms = new Map<string, Term>();
  for (const [p, raw] of Object.entries(termFiles)) {
    const [, fm, body] = raw.match(FRONTMATTER) ?? [, "", raw];
    const d = YAML.parse(fm) ?? {};
    const t: Term = {
      id: fileSlug(p), num: "", term: d.term, aka: d.aka ?? [], layer: d.layer ?? "", section: d.section,
      order: d.order ?? 0, definition: d.definition ?? "", example: d.example ?? "", seeAlso: d.seeAlso ?? [],
      body: body.trim(), search: "",
    };
    const sec = sections.get(t.section);
    if (!sec) { console.warn(`Term "${t.term}" has unknown section "${t.section}", so it isn't shown.`); continue; }
    sec.terms.push(t);
    terms.set(t.id, t);
  }

  const ordered = [...sections.values()].sort((a, b) => a.order - b.order);
  ordered.forEach((sec, i) => {
    sec.n = i + 1;
    sec.terms.sort((a, b) => a.order - b.order || a.term.localeCompare(b.term));
    sec.terms.forEach((t, j) => (t.num = `${sec.n}.${j + 1}`));
  });

  // Index every term and alias for [[links]].
  const index = new Map<string, Term>();
  for (const t of terms.values()) {
    for (const name of [t.term, ...t.aka]) {
      const key = name.toLowerCase();
      if (index.has(key)) console.warn("Duplicate term or alias:", name);
      index.set(key, t);
    }
  }

  const link = (html: string, where: string) =>
    html.replace(LINK, (_, target: string, label?: string) => {
      const t = index.get(target.trim().toLowerCase());
      if (!t) console.warn(`Unresolved link [[${target}]] in "${where}"`);
      return t ? `<a href="#${t.id}">${label ?? target}</a>` : label ?? target;
    });

  const rendered = ordered.map(sec => ({
    ...sec,
    terms: sec.terms.map(t => {
      const body = link(toHTML(t.body), t.term);
      const definition = link(inline(t.definition), t.term);
      const seeAlso = t.seeAlso.flatMap(id => {
        const s = terms.get(id);
        if (!s) console.warn(`"${t.term}" has a See also entry for missing term "${id}"`);
        return s ? [{ id: s.id, term: s.term }] : [];
      });
      return {
        ...t,
        definition,
        body,
        example: t.example ? link(inline(t.example), t.term) : "",
        seeAlso,
        search: [t.term, ...t.aka, strip(definition), strip(body)].join(" ").toLowerCase(),
      };
    }),
  }));

  const site = YAML.parse(Object.values(siteFile)[0] ?? "") ?? {};
  const relatives = YAML.parse(Object.values(relativesFile)[0] ?? "") ?? null;

  // Group sections into the parts that site.yaml lists, in that order.
  const partDefs: { id: string; title: string; intro?: string }[] = site.parts ?? [{ id: "framework", title: "Framework" }];
  rendered.forEach(sec => {
    if (!partDefs.some(p => p.id === sec.part)) console.warn(`Section "${sec.title}" has unknown part "${sec.part}", so it isn't shown.`);
  });
  const parts = partDefs.map(p => ({
    id: "p-" + p.id, title: p.title, intro: inline(p.intro ?? ""),
    sections: rendered.filter(sec => sec.part === p.id),
  }));

  return {
    site: { ...site, lede: inline(site.lede ?? ""), intro: inline(site.intro ?? "") },
    parts,
    sections: rendered,
    relatives,
    termCount: terms.size,
  };
}
