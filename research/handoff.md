# Handoff: intent and premise review

This handoff lets the next working session continue the review of the Social
Charter's intent, thesis, and premises without repeating it.

Status as of October 23, 2026.

## Where things stand

The review produced two kinds of output:

- **The review record:** [`intent-and-premises.md`](intent-and-premises.md)
  holds the consolidated intent and thesis, the assessment of each premise and
  hidden assumption, the factional intent with its precedents, the author's
  answers, and the open decisions. It builds on the earlier
  [literature review](literature-review.md).
- **Glossary changes:** the author's answers are now in the glossary. The site
  builds with no unresolved links.

Nothing from this review is committed. The author commits straight to `main`,
but only when they ask.

| File | Change |
|---|---|
| `research/intent-and-premises.md` | New. The full review record. |
| `research/handoff.md` | New. This file. |
| `site/content/terms/factional-interest.mdoc` | New intent term, order 25 |
| `site/content/terms/charter.mdoc` | Definition rebuilt around a real commons and mechanisms for deliberation, self-modification, and execution |
| `site/content/terms/meeting-of-interests.mdoc` | Calculability as availability of signal, engineered toward truthful expression |
| `site/content/terms/question-of-arbitration.mdoc` | Deadlock as partly reconcilable, and dissolution once agreement runs out |
| `site/content/terms/arbitration.mdoc` | Exit penalties agreed before arbitration, and trust as a metric of the parent's mechanism |
| `site/content/terms/dissolution.mdoc` | Dissolution once a charter no longer combines agreements into more influence |
| `site/content/terms/externality.mdoc` | Each parent states how it takes up externalities |
| `site/content/terms/jurisdiction.mdoc` | Range of protection for non-members inside a charter's commons |
| `site/content/terms/measurement-mechanism.mdoc` | Measurement tightness as a design dial |
| `site/content/terms/social-charter.mdoc` | Links to factional interest |

## Decisions the author made

The author settled these points during the review:

- **Calculability:** calculability means the availability of signal. Each
  charter engineers its deliberation, which is the game, toward the strongest
  incentive for truthful expression.
- **Binding outcomes:** exit is a calculated scenario, with conditions and
  penalties agreed before arbitration begins.
- **Deadlock:** a deadlock is a common state that probably holds some
  reconcilable agreement. Charters extract it, and a dissolution clause ends
  charters that have used it up.
- **Factional interest:** this is a base intent. Positive factional interest,
  an idealistic difference of direction, both innovates and subverts.
  Negative factional interest, a material difference of positions and gains,
  both protects member rights and ossifies. The charter system mediates
  between them toward positive-sum results.
- **Charter ingredients:** a charter's fundamental ingredients are a real
  commons and mechanisms for deliberation, self-modification, and execution.
  No commons means no charter. Symbolism is cosmetic.
- **Factions of principle:** a faction that won't take part either gains
  influence over the whole commons and becomes the higher charter, or stays
  subject to the charter without a voice.
- **Trust:** the higher charter's design and executive authority mediate
  against destructive conflict, and trust is part of what its mechanism
  optimizes for.
- **Scope rule:** a choice that already has an established range of options
  is left to each charter's design. The framework states only that the choice
  exists.

## What's still open

Work through open items one at a time. The author asked for that pace.

### Items routed to charter design

On October 23, 2026, the author routed factional issues 9, 10, and 11, and
the design halves of several framework decisions, to established practice in
game theory, constitutional design, and incentive engineering. The review
record lists them in "Decisions for the author." Don't elaborate these items
further. The framework only states that each choice exists.

### Framework-level decisions

The following decisions are open in the review record's "Decisions for the
author" section:

1. Narrow obscured consensus to transparency of the problem, not of positions.
1. Decide whether factions inside a charter form child charters. This is the
   largest remaining gap: issue unbundling removes the logrolling that holds
   conventional big tents together.
1. Clarify who engineers "from above," so the factional intent doesn't
   conflict with the vanguard interest.
1. Decide whether "the common good" means each charter's stated common
   interest.
1. Decide whether to promote the hidden assumptions to stated premises, or
   list them as open problems.
1. State that coalition-decided exclusion describes what happens and doesn't
   justify it.
1. Choose one standard for the claim of advantage, behind "better states" and
   "more efficiently."

### Pending wording choices

The author hasn't reviewed these yet:

- Whether to rename *positive* and *negative* factional interest to factions
  of *principle* and of *interest*. Hume rates factions of principle as the
  more dangerous kind, which reverses the current labels.
- In the factional interest entry, "its mechanisms steer factional behavior"
  stands in for the author's "engineered from above."
- The commons entry defines a commons as contributed assets. The author uses
  the word more broadly, for the domain that deliberation and rulings operate
  on.

### Older items still open

The [literature review](literature-review.md) lists earlier open items, such
as renaming *meeting of interests* to *action situation* and adding
intellectual relatives. They're unchanged.

## Working conventions

Follow these conventions in this project:

- Invoke the `google-style` skill before writing or editing any user-facing
  text, as `CLAUDE.md` requires.
- Treat the glossary as authoritative. `kernel.md` isn't.
- Record the author's positions, but don't write premise elaborations for
  them. Offer the literature and the reassessment, then wait for their
  answer.
- When the author answers, add an "Author's position" and a "Reassessment"
  paragraph under the relevant item in the review record.
- Check new citations against primary sources before publishing. The review
  record lists the ones not yet checked under "Sources to verify."
- After glossary edits, run `npm run build` in `site/` and check the output
  for `Unresolved link` warnings.
