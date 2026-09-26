---
name: google-style
description: Apply the Google developer documentation style guide (https://developers.google.com/style) to user-facing text. Use whenever writing, editing, or reviewing any user-facing content in this project, including Markdown documents such as kernel.md, headings, lists, READMEs, and summaries meant for readers. Also use when the user asks to "style-check", "copyedit", or "make this match the style guide".
---

# Google developer documentation style

All user-facing text in this project follows the
[Google developer documentation style guide](https://developers.google.com/style).
This skill summarizes the rules that apply most often. When a case isn't
covered here, follow the full guide. For spelling and word choice, the guide
defers to Merriam-Webster.

Project-specific terminology (for example, *Charterism*, *charter*,
*corporation of common interest*, *objective function*) takes precedence over
general word-choice rules. Use each term consistently once it's defined.

## Workflow

1. Identify the user-facing text you're writing or changing.
2. Draft or edit the text using the rules below.
3. Before you finish, run the checklist at the end of this file against every
   changed passage.
4. When editing existing text, change only what violates the guide or what the
   user asked you to change. Don't rewrite meaning or argument to fit style.

## Voice and tone

- Be conversational and friendly without being frivolous. Write like a
  knowledgeable colleague explaining something, not like a legal document or a
  marketing page.
- Address the reader as *you*. Use *we* sparingly, and only when *we* clearly
  refers to the authors.
- Don't use pop-culture references, jokes, idioms, or wordplay that won't
  translate for a global audience.
- Avoid hype and absolutes: *simply*, *just*, *easy*, *obviously*, *of course*,
  *revolutionary*, *seamless*.
- Don't pre-announce content ("In this section, we will discuss..."). Get to
  the point.

## Language and grammar

- **Active voice.** Make the actor the subject. Write "The executive optimizes
  the objective," not "The objective is optimized by the executive." Passive
  voice is acceptable when the actor is unknown or unimportant.
- **Present tense.** Write "The charter defines membership," not "The charter
  will define membership." Use future tense only for things that actually
  happen later.
- **Short, clear sentences.** One main idea per sentence. Put conditions before
  instructions: "To leave a corporation, invoke its exit procedure."
- **Contractions** are fine and encouraged in most cases (*it's*, *don't*,
  *can't*). Don't contract noun + verb ("the charter'll").
- **Second person, not first or gendered third.** Use *they* as a singular
  pronoun for a person of unspecified gender. Never use *he/she* or *s/he*.
- **Serial (Oxford) comma** in lists of three or more.
- **That vs. which.** Use *that* for restrictive clauses (no comma) and
  *which* for nonrestrictive clauses (with a comma).
- **Avoid ambiguous pronouns.** If *this*, *that*, or *it* could refer to more
  than one thing, name the noun: "this mechanism," not "this."
- **Avoid Latin abbreviations.** Use *for example* instead of *e.g.*, *that is*
  instead of *i.e.*, *and so on* instead of *etc.*, and *through* or *by way
  of* instead of *via*.
- Don't use *please* or *thank you* in instructions.
- Avoid *should* when you mean *must*; avoid *may* when you mean *can* (ability)
  or *might* (possibility). Use *may* only for permission.

## Word choice

- Use plain words: *use* not *utilize*, *help* not *facilitate*, *start* not
  *commence*, *about* not *approximately* (in casual contexts), *so* not
  *thus*, *also* not *additionally*.
- Use inclusive language:
  - *allowlist/denylist*, not *whitelist/blacklist*
  - *primary/replica* or *leader/follower*, not *master/slave*
  - *placeholder* or *sample value*, not *dummy*
  - *everyone* or *folks*, not *guys*
  - Avoid ableist terms such as *crazy*, *insane*, *blind to*, *crippled*,
    *sanity check*.
- Don't use *and/or*. Rephrase, usually with *or* (or *either... or both*).
- Spell out a term the first time it's used, followed by the abbreviation in
  parentheses, if you'll use the abbreviation later. Don't define an
  abbreviation you use only once.
- Write *percent* in prose; *%* is fine in tables and alongside numbers in
  technical contexts.

## Headings and titles

- Use **sentence case**: capitalize only the first word and proper nouns.
  Write "Charter contents," not "Charter Contents."
- Use a noun phrase for conceptual sections ("Objective functions") and a bare
  infinitive for task sections ("Amend a charter"), not a gerund ("Amending a
  charter").
- Don't end headings with a period. Avoid question marks unless the section
  is an FAQ.
- Don't skip heading levels. Each document has one H1 (the title).
- Don't put links, code formatting, or emphasis in headings when avoidable.
- Follow each heading with at least one sentence of introductory text before a
  list, table, or subheading.
- Avoid ampersands (*&*) and slashes in headings; use *and* and *or*.

## Lists

- Use a **numbered list** for sequential steps and a **bulleted list** when
  order doesn't matter. Use a **description list** or table for term–definition
  pairs.
- Introduce every list with a complete sentence or a clear lead-in fragment,
  ending with a colon if the list follows immediately.
- Keep list items **parallel** in grammatical structure (all nouns, all
  imperatives, all full sentences).
- Capitalize the first word of each item.
- Punctuation: if an item is a complete sentence, end it with a period. If
  items are fragments, use no ending punctuation. Be consistent within a list;
  if any item contains more than one sentence, make them all sentences.
- A list should have at least two items. Avoid more than two levels of nesting.
- Don't use a list when a single sentence reads better.

## Emphasis and formatting

- Use **bold** for UI elements and, sparingly, for a term at its point of
  definition. Don't use bold for general emphasis in running text; if a phrase
  needs emphasis, rewrite the sentence so the important part is stressed by
  position.
- Use *italics* for the first mention of a term being introduced, and for words
  referred to as words. Don't use italics for general emphasis either.
- Don't use ALL CAPS for emphasis.
- Use `code font` only for code, commands, filenames, and literal values.
- Don't use underline.

## Punctuation

- **Em dashes** (—) without surrounding spaces, used sparingly. Prefer commas,
  parentheses, or a new sentence. Use en dashes only for number ranges, and
  prefer *to* in prose ("5 to 10").
- **Colons**: lowercase after a colon unless what follows is a proper noun, a
  complete sentence that starts a list of sentences, or a quotation.
- **Semicolons**: avoid; split into two sentences instead.
- **Exclamation points**: avoid.
- **Quotation marks**: use straight double quotes (`"`). Put periods and commas
  inside the closing quotation mark unless the quoted text is a literal string
  that must be reproduced exactly.
- **Parentheses**: avoid parenthetical asides where possible. If a whole
  sentence is in parentheses, put the period inside.
- **Hyphens**: hyphenate compound modifiers before a noun ("a long-term
  charter"), but not after ("the charter is long term"), and not with *-ly*
  adverbs ("a newly formed corporation").

## Numbers and dates

- Spell out zero through nine; use numerals for 10 and above. Use numerals for
  measurements, versions, and anything paired with a unit, regardless of size.
- Use commas in numbers of four or more digits (1,000).
- Write dates unambiguously, spelling out the month: "September 25, 2026."
  Don't use numeric-only formats like 9/25/26.

## Links and cross-references

- Use descriptive link text that makes sense out of context. Write "see
  [Charter contents](#charter-contents)," not "click [here](#)."
- Don't use a raw URL as link text unless the URL itself is the point.
- Use *see* for cross-references, not *refer to* or *check out*.

## Accessibility and global audience

- Write for readers whose first language isn't English: avoid idioms, phrasal
  verbs with non-obvious meanings, and cultural references.
- Don't use directional language (*above*, *below*, *left*, *right*) as the only
  way to refer to content. Use *preceding* and *following*, or link directly.
- Give every image meaningful alt text. Don't rely on color alone to convey
  meaning.

## Final checklist

Before finishing any user-facing text, confirm:

- [ ] Headings are in sentence case with no trailing period.
- [ ] Voice is active and tense is present wherever possible.
- [ ] No *e.g.*, *i.e.*, *etc.*, *via*, *and/or*, *please*, or *simply*.
- [ ] Lists are introduced, parallel, and consistently punctuated.
- [ ] Serial commas are used; semicolons and exclamation points are avoided.
- [ ] Bold and italics mark UI elements or defined terms, not general emphasis.
- [ ] Link text is descriptive; no "click here."
- [ ] Terminology is inclusive and consistent with earlier definitions.
- [ ] Numbers and dates follow the conventions in this file.
