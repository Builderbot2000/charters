import { config, collection, singleton, fields } from "@keystatic/core";

const text = (label: string, description?: string) => fields.text({ label, description, multiline: true });

export default config({
  storage: { kind: "local" },
  ui: {
    brand: { name: "Social Charter glossary" },
    navigation: { Glossary: ["terms", "sections"], Page: ["site", "relatives"] },
  },
  collections: {
    terms: collection({
      label: "Terms",
      path: "content/terms/*",
      slugField: "term",
      format: { contentField: "content" },
      columns: ["section", "order"],
      schema: {
        term: fields.slug({ name: { label: "Term" } }),
        aka: fields.array(fields.text({ label: "Name" }), {
          label: "Also called",
          description: "Other names for the term. [[Links]] can use these names.",
          itemLabel: props => props.value,
        }),
        layer: fields.text({ label: "Layer badge", description: "Constitutional layer, such as L0. Leave blank for none." }),
        section: fields.relationship({ label: "Section", collection: "sections", validation: { isRequired: true } }),
        order: fields.integer({
          label: "Order in section",
          description: "Terms sort by this number. Existing terms use steps of 10, so you can insert between them.",
          defaultValue: 100,
          validation: { isRequired: true },
        }),
        definition: fields.text({
          label: "Definition",
          description: "One sentence. Link to another term with [[Term]] or [[Term|link text]].",
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        content: fields.markdoc({
          label: "Body",
          description: "Paragraphs, lists, tables, quotes, and diagrams. Use a code block with language \"diagram\" for text diagrams, or \"charter\" for a sample charter.",
          options: { heading: false, image: false },
        }),
        example: text("Example", "An illustrative scenario, shown in a box after the body."),
        seeAlso: fields.multiRelationship({ label: "See also", collection: "terms" }),
      },
    }),
    sections: collection({
      label: "Sections",
      path: "content/sections/*",
      slugField: "title",
      format: "yaml",
      columns: ["order"],
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        order: fields.integer({ label: "Order", validation: { isRequired: true } }),
        intro: text("Introduction"),
      },
    }),
  },
  singletons: {
    site: singleton({
      label: "Page header",
      path: "content/site",
      format: "yaml",
      schema: {
        eyebrow: fields.text({ label: "Eyebrow" }),
        title: fields.text({ label: "Title" }),
        lede: text("Lede", "Use **bold** for emphasis."),
        intro: text("Introduction"),
      },
    }),
    relatives: singleton({
      label: "Intellectual relatives",
      path: "content/relatives",
      format: "yaml",
      schema: {
        title: fields.text({ label: "Title" }),
        intro: text("Introduction"),
        traditions: fields.array(
          fields.object({ name: fields.text({ label: "Tradition" }), ideas: text("Shared ideas") }),
          { label: "Traditions", itemLabel: props => props.fields.name.value },
        ),
      },
    }),
  },
});
