# Handoff

This handoff lets the next working session continue work on the Social
Charter without repeating earlier reviews.

Status as of October 28, 2026. Everything described here is committed to
`main`.

## Where things stand

The glossary in `site/content/` is authoritative. `kernel.md` isn't. Every
framework-level decision from the reviews so far is answered.

The project now has four parts, and the site groups its sections under them:

- **Framework.** The generic structure that every charter shares. It holds
  the whole current glossary.
- **Model.** Observations of a specific society as it is.
- **Question.** What a specific society ought to be.
- **Answer.** What is to be done in a specific scenario.

Model, Question, and Answer apply the Framework to specific scenarios. Work on
them hasn't started, and they're empty. Generic content stays in the
Framework, even when it carries an opinion.

The thesis, restated on October 28, 2026: the Social Charter is a universal
framework that promotes maximal organizational efficiency at any scale, by
applying well-studied theory to a model of a known problem at any point in
society. It's infrastructure. Ideals and societal conditions are its
parameters. It depends on the decomposability premise: local optima add up
to the global optimum when society is nearly decomposable and parent charters
internalize the spillovers between their children.

## Research records

Each record holds the analysis, the author's positions, and the effect on the
glossary:

| Record | Subject | Status |
|---|---|---|
| [literature-review.md](literature-review.md) | Prior art, contested claims, and novelty | Four small items open |
| [discussion-venues.md](discussion-venues.md) | Where to find human review, and whom to contact | Reference. No outreach yet. |
| [intent-and-premises.md](intent-and-premises.md) | Intent, thesis, premises, and the restated thesis | All decisions closed |
| [undemocratic-higher-charter.md](undemocratic-higher-charter.md) | A higher charter without democratic intent | All decisions closed |
| [initiation-and-admission.md](initiation-and-admission.md) | Initiation, contracts, and the five statuses | All decisions closed |
| [associative-consolidation.md](associative-consolidation.md) | Membership tiers, centralization, intervention, and the charter model | All decisions closed |
| [preface.md](preface.md) | Draft preface | Not reviewed in recent sessions |

## Decisions from October 28, 2026

The author made these decisions in the latest session:

- Membership has discrete tiers between base associate and full member, and
  a party can move in either direction. The framework sets no ceiling.
- Fundamental protections, tiered constitutional layers, and anti-capture
  protections left the glossary. What protects a charter depends too much on
  its scenario for the framework to prescribe it.
- The framework defines forms of recourse against a malign charter, such
  as exit, secession, escalation, demotion, and receivership. Without
  arbitration, each form becomes struggle. The form was called *intervention*
  until October 28, 2026.
- Centralization is a parameter that each charter's articles control.
- The framework's job is a standardized charter model of dimensions,
  parameters, states, transitions, and outputs, so that existing theory
  applies to each charter.
- Democracy is a design choice, not a framework requirement.
- Welfare is no longer the framework's measure. It's a measure that a charter
  can adopt in its objective function.

## What's still open

Work through open items one at a time. The author asked for that pace.

### Lines of study

- Fit a charter's design to a known problem, and verify that the structure
  scales to an optimum. This study tests the decomposability premise.
- Study how a charter scales its centralization across societal regimes, for
  example Deng Xiaoping's reforms.
- Expand the charter model. The author expects it to grow a great deal.
- Start the Model, Question, and Answer parts.

### Pending wording choices

The author hasn't reviewed these yet:

- Whether to rename *positive* and *negative* factional interest to factions
  of *principle* and of *interest*. Hume rates factions of principle as the
  more dangerous kind, which reverses the current labels.
- The commons entry defines a commons as contributed assets. The author uses
  the word more broadly, for the domain that deliberation and rulings operate
  on.

### Smaller items

- The open items in the literature review's "Open decisions" section.
- Sources to verify, listed at the end of each research record, including
  the Ukrainian cases in the associative consolidation record.
- The site's long-term direction: an open online book modeled on CORE Econ's
  *The Economy*.

## Working conventions

Follow these conventions in this project:

- Invoke the `google-style` skill before writing or editing any user-facing
  text, as `CLAUDE.md` requires.
- Leave choices that have an established range of options to each charter's
  design. The framework states only that the choice exists.
- Record the author's positions, but don't write premise elaborations for
  them. Offer the literature and the reassessment, then wait for their
  answer.
- Commit and push straight to `main`, with no feature branches.
- After glossary edits, run `npx astro build` in `site/` and check the output
  for warnings. A YAML value that contains a colon followed by a space needs
  quotes.
