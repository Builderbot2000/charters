# Handoff

This handoff lets the next working session continue work on the Social
Charter without repeating earlier reviews.

Status as of November 3, 2026.

## Where things stand

The glossary in `site/content/` is authoritative. `kernel.md` isn't. Every
framework-level decision from the reviews so far is answered.

The project now has five parts, and the site groups its sections under them:

- **Philosophy.** The author's thesis of immanent authority, absolute ends,
  and material actuality, added on October 30, 2026.
- **Framework.** The generic structure that every charter shares.
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
| [literature-review.md](literature-review.md) | Prior art, contested claims, and novelty | All decisions closed |
| [discussion-venues.md](discussion-venues.md) | Where to find human review, and whom to contact | Reference. No outreach yet. |
| [intent-and-premises.md](intent-and-premises.md) | Intent, thesis, premises, and the restated thesis | All decisions closed |
| [undemocratic-higher-charter.md](undemocratic-higher-charter.md) | A higher charter without democratic intent | All decisions closed |
| [initiation-and-admission.md](initiation-and-admission.md) | Initiation, contracts, and the five statuses | All decisions closed |
| [associative-consolidation.md](associative-consolidation.md) | Membership tiers, centralization, intervention, and the charter model | All decisions closed |
| [preface.md](preface.md) | Draft preface | Not reviewed in recent sessions |
| [efficiency-audit.md](efficiency-audit.md) | The thesis's efficiency claim against decentralization theory | One decision open |
| [information-and-communication.md](information-and-communication.md) | Information and decision quality, and channels of communication | Reference |
| [communication-cost-theory.md](communication-cost-theory.md) | A unified cost of communication, its history, and modern programs | Three decisions open |
| [state-of-the-art-coordination.md](state-of-the-art-coordination.md) | Research from 2020 to 2026 on communication and coordination | Reference |
| [optimal-substructure.md](optimal-substructure.md) | The decomposability guarantee, its proof sketch, and its definitions | All decisions closed |
| [open-problems.md](open-problems.md) | Backlog of problems the framework hasn't solved | Backlog |

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

## Decisions from October 29, 2026

The author made these decisions in the latest session:

- The communication network model is the interim basis for judging the
  premises. It treats an organization as a graph of nodes with information,
  capacity, and bias, joined by channels with capacity, noise, and cost. Its
  four costs are volume, fidelity, honesty, and capacity. See
  [communication-cost-theory.md](communication-cost-theory.md).
- Parent formation is consensual only in the general sense that a contract
  acceptable to all parties comes out of the circumstances. Terms of
  surrender are such a contract, so coercion is within the range of
  circumstances. Consent-only formation doesn't limit which structures the
  framework can reach.

## What's still open

Work through open items one at a time. The author asked for that pace.

### Priority to-dos

On October 29, 2026, the charter model was evaluated against the interim
model, to check whether it has enough degrees of freedom to approximate the
best structure in every scenario. It can express every structural family
that the theory identifies. These gaps remain, in priority order:

1. **Primitives for information logistics.** The framework describes who
   decides and who belongs, but not how information moves. It has no terms
   for the following:
   - Channels, with their cost, capacity, and noise
   - Bias and processing capacity at each node
   - Lateral links between siblings, beyond the one sentence in the sibling
     entry
   - Visibility and anonymity of information, as distinct from transparency
     of the problem
   - Escalation of problems that exceed local knowledge or capacity, as
     distinct from conflicts and externalities

   The charter model maps Ostrom's information rule only to the measurement
   mechanism and audits.
1. **Drivers of state transitions.** The transitions exist, but nothing
   specifies when or how fast to use them:
   - Triggers, such as an escalation rate that prompts re-partitioning, or a
     crisis that prompts temporary centralization
   - Speed, since amendment-based change is slower than some scenarios need
   - Reversibility, since centralization is easier than decentralization, so
     the reachable structures shrink over time
   - Succession when a parent or center fails

   The theory guarantees no convergence to an optimum, so the target is
   adjustment rules that move toward better structures, not a guarantee of
   reaching the best one.
1. **Fixed constraints to review.** These rules apply to every charter and
   remove structures the model favors in some scenarios:
   - Separation of functions is a principle, so every charter separates them.
     The model treats the degree of separation as a parameter: worth its cost
     where bias is high, and overhead in small or fast units.
   - Only the common parent arbitrates conflicts between siblings.
     Alternatives such as a peer arbitrator, or handing a decision to one
     sibling, are reachable only through contracts.
   - Escalation always runs to the level that covers every affected party,
     with no lateral shortcut.
   - Goals and constitutional authority can't be delegated. This constraint
     is probably deliberate, as a trade of efficiency for legitimacy.
1. **Partition problem.** The one open decision in the
   [efficiency audit](efficiency-audit.md): whether charter boundaries follow
   the interactions that matter.

### Decisions from November 3, 2026

The author settled these smaller items:

- *Positive* and *negative* factional interest are now factions of
  *principle* and of *interest*.
- The commons is the sphere of influence that a corporation acts on,
  including rights to property, privilege, or political power, and
  contracts with associates.
- How far a charter's problem is visible to outsiders is a choice for its
  design.
- Open problems live only in the backlog in [open problems](open-problems.md).
  The site's Open problems section moved there.
- Efficiency is relative to parameters. The friction behind local decisions
  is the interim model's four costs. "Greedily" stays as an interim
  explanation. See the [efficiency audit](efficiency-audit.md).
- Informational adjacency is now the cost of moving information between
  nodes.
- Ten intellectual relatives were added, to be filtered once the theory is
  complete.
- Metastability is gone from the ecumenical charter entry. Its objective is
  a choice for the charter's design, anchored in the capability approach and
  its later developments, such as collective capabilities.
- Decomposability is now a guarantee of optimal substructure. Within the
  domain of arbitration, a composition of charters is at the nested optimum
  when each charter is at its optimum given the capabilities it can afford.
  Constraints are enforced constraints, so illegal deals between siblings
  are part of the response a parent anticipates. Justice is a component of a
  charter's objective, not a framework rule. Parents govern and enforce
  contracts between their constituents. See
  [optimal substructure](optimal-substructure.md).
- Collusion counts under the honesty cost of the interim model.
- Whether goals and constitutional authority stay non-delegable waits for
  the delegation mechanisms, among the fixed constraints to review.

### Lines of study

- Fit a charter's design to a known problem, and verify that the structure
  scales to an optimum. This study tests the decomposability premise. Its
  test bed is the NK model.
- Study how a charter scales its centralization across societal regimes, for
  example Deng Xiaoping's reforms.
- Expand the charter model. The author expects it to grow a great deal.
- Start the Model, Question, and Answer parts.

### Smaller items

- Sources to verify, in batches, listed at the end of each research record, including
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
