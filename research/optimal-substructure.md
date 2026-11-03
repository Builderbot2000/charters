# Optimal substructure of the charter system

This record states the decomposability guarantee, sketches its proof, and
records the decisions behind it. The author settled these decisions on
November 3, 2026, in one working session.

## Why the guarantee matters

The author treats the guarantee as a necessary premise for the whole project.
The Social Charter exists to make social organization optimizable. That's
possible only if a composition of charters inherits the optimality of the
charters in it, so that proving one charter optimal contributes to proving the
whole composition optimal.

The earlier wording, "local optima add up to the global optimum," couldn't
carry that weight. The efficiency audit found that near-decomposability gives
only an approximation, and that local optimization converges to the global
optimum only under iteration, convexity, honest reports, weak coupling, and
stable parameters. See the [efficiency audit](efficiency-audit.md). The
guarantee replaces convergence with optimal substructure, and states the
conditions as definitions instead of as approximations.

## Definitions

The guarantee rests on the following definitions:

- **Domain of arbitration.** The set of conflicts and couplings that some
  charter's higher-order common interest covers. Arbitration is defined as a
  parent resolving a conflict under its own charter, so every coupling in the
  domain has a common ancestor with authority over it.
- **Afforded optimum.** A charter's best configuration given the
  information, processing, and communication that it can afford. The author
  rejected a full-information optimum, because information stays limited
  under any regime and any method.
- **Parent's optimum.** A parent's afforded optimum includes its choice of
  constraints on its constituents, made in anticipation of how they respond.
  How a parent learns their responses, through reports, prices, auctions, or
  audits, is a choice for its design.
- **Enforced constraint.** A rule, together with the parent's means of
  detecting and penalizing a breach. A constituent's optimum is its best
  response to the rule as enforced, including the expected penalty. The author
  chose enforced constraints over hard constraints, under which an illegal act
  would only falsify the hypothesis.
- **Nested optimum.** A configuration in which each charter's objective is
  as high as its capabilities allow, given how the charters below it act
  under their own objectives. The literature calls it a *bilevel* or
  *Stackelberg* optimum.

## Statement

> Within the domain of arbitration, if every charter is at its afforded
> optimum, the composition of charters is at the nested optimum.

The guarantee needs one structural condition: constituents interact only
through their parent's enforced constraints. The framework supplies it:

- Arbitration covers every escalated conflict.
- Escalation goes to the level whose charter defines the higher-order common
  interest that covers the matter and every affected party. The escalation
  entry used to say only "every affected party," which left open whether the
  ancestor had authority over the matter.
- A parent governs and enforces contracts between its constituents.
- A parent can limit which contracts its constituents enter with parties
  outside its jurisdiction. The charter that covers both parties, if one
  exists, governs the terms. If none exists, the contract is outside the
  domain of arbitration, and the guarantee treats it as a given condition.
- A contract that the parent doesn't enforce, such as an illegal side deal
  between siblings, is part of the constituents' response, which the parent
  anticipates.

## Proof sketch

The proof is an induction over the charter graph, from personal corporations
up. Within the domain of arbitration, the parent relation has no cycles.

1. **Base.** A personal corporation is at its afforded optimum by
   hypothesis.
1. **Step.** Take a charter whose constituents each head a subgraph at its
   nested optimum, given the charter's constraints. The charter's own
   afforded optimum is a choice of constraints that maximizes its objective,
   given those responses. So the charter's subgraph is at its nested optimum.
1. **Parents are charters.** The hypothesis that every charter is at its
   afforded optimum covers parents as well as constituents, so the step
   doesn't need anything that constituents can't supply.

Three cases need care:

- **Several parents.** A charter can have several parents, each for a
  different dimension of its interests. Where those dimensions don't
  interact, each parent sets its own constraints independently. Where they
  interact, such as land use between an economic parent and a territorial
  parent, the coupling is a conflict between the two parents. It escalates
  to their common ancestor, whose constraints on both parents fix the
  interface. Each parent then optimizes with the other's constraints fixed.
- **Siblings that choose at the same time.** Team theory shows that members
  who are each optimal given the others can still be stuck at a worse outcome
  than coordination would reach, unless the problem is convex (Radner, 1962).
  The structural condition rules this out. Given their parent's enforced
  constraints, siblings' problems are separate.
- **Collusion.** Siblings that collude respond jointly, and the parent
  designs against that joint response. The literature on collusion in
  hierarchies supports this treatment (Tirole, 1986). Under certain
  conditions, a principal loses nothing by restricting itself to mechanisms
  that give agents no reason to collude (Laffont and Martimort, 1997 and
  2000). Those conditions still need checking against the charter case.
  Where the siblings' joint response isn't unique, the parent optimizes
  against its expectation of it.

The proof is short because the definitions carry the weight. Its value is that
it names what has to be true for the composition to be optimal, and it moves
the remaining difficulty to whether each charter can afford to reach its
optimum.

## Properties of the result

- **No central benchmark.** The guarantee doesn't claim that the
  composition matches one central optimizer of the highest charter's
  objective. The members of each charter set its objective, and the
  differences between objectives are the contestation that the composition
  settles. Any gap from a central optimizer is the cost of each charter's
  autonomy.
- **Justice is part of the objective.** A charter's objective can include a
  component for justice, which is optimized together with every other
  component. The author dropped an earlier proposal for a framework rule that
  parents respect Pareto efficiency, and also rejected equal treatment of
  constituents, because each would impose a definition of a just state. The
  composition is optimally just by each charter's own objective, not by a
  universal standard. This matches the Philosophy part's position that no
  universal moral verdict exists.
- **No improvement left for everyone.** If an outcome is better for a parent
  and every one of its constituents, and the parent can afford constraints
  that lead them to it, the parent chooses it.
- **Relative to the structure.** A coupling that no party can afford to
  detect or escalate stays outside the guarantee. A structure with more
  channels or different boundaries might do better. Where a parent can design
  its constituents' channels and boundaries, that design is part of its own
  optimum.
- **Collusion is a cost of honesty.** In the interim communication model,
  collusion counts under the honesty cost, as several senders that misreport
  together. It isn't a fifth cost.

## What stays open

The guarantee doesn't settle these questions:

- **Affordability.** Whether charters can afford to reach their optima
  depends on information costs. The planned NK-model study measures how
  close the structure gets.
- **Partition.** Whether charter boundaries follow the interactions that
  matter. This is the partition problem in the efficiency audit.
- **Lateral links and transitions.** The main gaps in the
  [handoff](handoff.md) still apply, especially the primitives for
  information logistics.

## Sources to verify

The following sources come from general knowledge and still need checking
against their primary sources:

- Bellman, *Dynamic Programming*, 1957
- Marschak and Radner, *Economic Theory of Teams*, 1972
- Radner, "Team Decision Problems," *Annals of Mathematical Statistics*, 1962
- Tirole, "Hierarchies and Bureaucracies: On the Role of Collusion in
  Organizations," *Journal of Law, Economics, and Organization*, 1986
- Laffont and Martimort, "Collusion under Asymmetric Information,"
  *Econometrica*, 1997
- Laffont and Martimort, "Mechanism Design with Collusion and Correlation,"
  *Econometrica*, 2000
- Foley, "Resource Allocation and the Public Sector," *Yale Economic
  Essays*, 1967
- Varian, "Equity, Envy, and Efficiency," *Journal of Economic Theory*, 1974
- Pazner and Schmeidler, "A Difficulty in the Concept of Fairness," *Review
  of Economic Studies*, 1974
- Holmström and Milgrom, "Multitask Principal–Agent Analyses: Incentive
  Contracts, Asset Ownership, and Job Design," *Journal of Law, Economics,
  and Organization*, 1991
- Evans, "Collective Capabilities, Culture, and Amartya Sen's *Development as
  Freedom*," *Studies in Comparative International Development*, 2002
- Stewart, "Groups and Capabilities," *Journal of Human Development*, 2005
- Ibrahim, "From Individual to Collective Capabilities," *Journal of Human
  Development*, 2006
- Teece, Pisano, and Shuen, "Dynamic Capabilities and Strategic Management,"
  *Strategic Management Journal*, 1997
- Kauffman, *Investigations*, 2000
- Hume, "Of Parties in General," 1741
