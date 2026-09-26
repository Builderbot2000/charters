# Social Charter glossary

This folder contains the Social Charter glossary website. The content is a
folder of plain text files that you edit in a browser-based editor on your own
computer. The build step turns the files into a static website that you can
host on any web server.

## Folder layout

The project separates content from presentation:

| Path | Contents |
| --- | --- |
| `content/terms/*.mdoc` | One file per term. Settings such as the definition and section are at the top of the file, and the body text follows. |
| `content/sections/*.yaml` | One file per section, with its title, order, and introduction |
| `content/site.yaml` | Page title and introduction |
| `content/relatives.yaml` | The intellectual relatives table |
| `keystatic.config.ts` | Fields that the editor shows for each kind of content |
| `src/lib/glossary.ts` | Reads the content files, numbers the entries, and resolves links |
| `src/pages/index.astro` | Page layout |
| `src/styles/glossary.css` | All styles, including light and dark themes |
| `src/scripts/glossary.ts` | Search and navigation in the browser |

## Set up

To install the dependencies, run the following command once. It requires
Node.js 22 or later.

```sh
npm install
```

## Edit content

To edit content, follow these steps:

1. Start the editor:

    ```sh
    npm run dev
    ```

1. Open `http://localhost:4321/keystatic` in a browser.
1. Select **Terms**, **Sections**, **Page header**, or **Intellectual
   relatives**, make your changes, and click **Save**.

The editor writes your changes to the files in `content/`. To see the result,
open `http://localhost:4321` in another tab. The page updates when you save.

The terminal shows a warning for any link that doesn't match a term, and for
any duplicate term or alias.

### Term fields

Each term requires a name, a section, an order, and a definition. All other
fields are optional:

| Field | Purpose |
| --- | --- |
| **Also called** | Other names for the term. Links can use these names. |
| **Layer badge** | Constitutional layer badge, such as `L0` |
| **Order in section** | Position in the section. Terms sort by this number, and entry numbers such as 5.3 update automatically. |
| **Body** | Paragraphs, lists, tables, quotes, and diagrams that follow the definition |
| **Example** | Illustrative scenario, shown in a box |
| **See also** | Related terms, chosen from a list |

The migrated terms use order numbers in steps of 10, so you can insert a new
term between two existing ones. For example, to place a term between 20 and
30, give it the number 25.

### Links and diagrams

To link to another term from the definition, body, or example, write
`[[Term]]`. To show different link text, write `[[Term|link text]]`.

To add a text diagram to the body, insert a code block and set its language to
`diagram`. For a sample machine-readable charter, set the language to
`charter`.

## Publish the site

To build the site, run the following command:

```sh
npm run build
```

The command writes the finished site to `dist/`. Upload the contents of that
folder to any static web host. The built site doesn't include the editor.

To check the built site before you publish it, run `npm run preview`.

## Writing style

Follow the project's writing style rules in [`CLAUDE.md`](../CLAUDE.md).
