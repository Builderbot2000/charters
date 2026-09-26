// Search, contents highlighting, and in-page link behavior for the pre-rendered glossary.
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const q = document.getElementById("q") as HTMLInputElement;
const toc = document.getElementById("toc-list")!;
const count = document.getElementById("count")!;
const sections = [...document.querySelectorAll<HTMLElement>("section.sec")];
const entries = [...document.querySelectorAll<HTMLElement>("article.entry")];
const total = entries.length;

// Search.
function apply() {
  const term = q.value.trim().toLowerCase();
  let n = 0;
  sections.forEach(sec => {
    let k = 0;
    sec.querySelectorAll<HTMLElement>("article.entry").forEach(el => {
      const show = !term || el.dataset.search!.includes(term);
      el.hidden = !show;
      if (show) k++;
      const a = el.querySelector<HTMLElement>("a.perma")!;
      a.dataset.term ??= a.textContent!;
      const name = a.dataset.term;
      const i = term ? name.toLowerCase().indexOf(term) : -1;
      if (i >= 0) a.innerHTML = esc(name.slice(0, i)) + "<mark>" + esc(name.slice(i, i + term.length)) + "</mark>" + esc(name.slice(i + term.length));
      else a.textContent = name;
    });
    n += k;
    sec.hidden = k === 0;
    const li = toc.querySelector<HTMLElement>(`[data-sec="${sec.id}"]`)!;
    li.hidden = k === 0;
    li.querySelector(".c")!.textContent = String(k);
  });
  document.getElementById("empty")!.hidden = n > 0;
  count.textContent = n === total ? `${n} terms in ${sections.length} sections` : `Showing ${n} of ${total} terms`;
}
q.addEventListener("input", apply);
if (q.value) apply();

// Highlight the section being read in the contents list.
if ("IntersectionObserver" in window) {
  const links = [...toc.querySelectorAll("a")];
  const io = new IntersectionObserver(obs => {
    obs.forEach(en => {
      if (en.isIntersecting) links.forEach(l => l.classList.toggle("on", l.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "0px 0px -70% 0px" });
  sections.forEach(sec => io.observe(sec));
}

// In-page links: clear a search that hides the target, then scroll and flash it.
function flash(id: string) {
  const el = document.getElementById(id);
  if (!el || !el.classList.contains("entry")) return;
  if (el.hidden) { q.value = ""; apply(); }
  el.classList.add("flash");
  setTimeout(() => el.classList.remove("flash"), 1400);
}
document.addEventListener("click", ev => {
  const a = (ev.target as Element).closest("a[href^='#']");
  if (!a) return;
  const id = a.getAttribute("href")!.slice(1);
  const el = document.getElementById(id);
  if (!el) return;
  ev.preventDefault();
  flash(id);
  el.scrollIntoView({ block: "start" });
  try { history.replaceState(null, "", "#" + id); } catch (_) {}
});
if (location.hash) {
  const id = decodeURIComponent(location.hash.slice(1));
  requestAnimationFrame(() => {
    const el = document.getElementById(id);
    if (el) { el.scrollIntoView({ block: "start" }); flash(id); }
  });
}
