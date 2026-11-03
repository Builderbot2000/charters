# Audit of the efficiency claim

This note checks the thesis's claim of organizational efficiency against
established theory on where decisions sit relative to information. It covers
the restated thesis of October 28, 2026, the Social Charter entry, and the
decomposability premise. It doesn't reopen closed decisions. It tests whether
the cited theory supports the claim as stated, and it proposes narrower
wording where the theory doesn't.

## The claim under audit

The thesis makes a chain of claims:

1. The framework promotes maximal organizational efficiency at any scale.
1. It does so by applying well-studied theory to a model of a known problem.
1. Local optima are "greedily scalable" to the global optimum.
1. Local optima scale because of informational adjacency (Hayek, 1945) and
   granularity of control (Ashby's law of requisite variety).
1. In the narrowed form, local optima add up to the global optimum when
   society is nearly decomposable (Simon, 1962) and parent charters
   internalize spillovers (Oates, 1972).

Claims 3 to 5 carry the weight. If they fail, claim 1 has no support, because
claim 2 alone only says that each charter is well designed, not that the
whole is.

## Summary of findings

The cited theory supports a weaker claim than the thesis makes. Each source
is real and relevant, but each supports a trade-off, not a guarantee:

- *Informational adjacency* isn't an established term. The established theory
  is the colocation of decision rights with specific knowledge (Jensen and
  Meckling, 1992). That theory says the optimum balances information costs
  against agency costs and coordination costs. The decomposability entry
  cites only the first.
- Hayek's argument depends on a price system that carries spillover
  information between local deciders. Escalation to a parent is a different
  device, and Hayek's argument, applied to the parent, is an objection to it.
- Ashby's law doesn't state that many small controllers beat one large one.
  It supports that claim only when disturbances split along the same seams as
  the controllers, which is the decomposability assumption again.
- Simon's near-decomposability gives an approximation with an error that grows
  with coupling between parts. It doesn't give an exact sum.
- Mathematical decomposition reaches a global optimum only through iteration
  and only for convex problems. Economies of scale, which the big tent relies
  on, are nonconvex.
- Charters form around common interests, while near-decomposability depends
  on interaction structure. Nothing in the framework makes the two partitions
  match.

The defensible thesis is conditional: the charter structure approaches the
efficient allocation, relative to the parameters that members set, to the
degree that charter boundaries follow weak interactions, parents can learn and
price spillovers, and agency costs at each level stay controlled.

## Informational adjacency

The phrase *informational adjacency* doesn't appear as a named theory in
economics or organization theory. The closest established bodies of work are
the following:

- **Hayek (1945).** Knowledge of particular circumstances of time and place
  is dispersed and can't be fully transmitted to a center.
- **Jensen and Meckling (1992).** *Specific knowledge* is costly to transfer,
  so efficient organizations move decision rights to where that knowledge
  sits. Moving decision rights creates a control problem, so the efficient
  design trades the cost of poor information against the cost of agents who
  pursue their own interests.
- **Marschak and Radner (1972), team theory.** Models decentralized
  decisions when every member shares one objective. It isolates the
  information problem from the incentive problem.
- **Galbraith (1973), the information-processing view.** Organizations pick
  structures that match their information-processing capacity to the
  uncertainty of their tasks.

The decomposability entry uses only Hayek's half of the argument. Jensen and
Meckling's paper is the precise match for what the thesis calls informational
adjacency, and it states the cost that comes with it. The framework already
names that cost elsewhere, as the [vanguard interest](../site/content/terms/vanguard-interest.mdoc)
and [factional interest](../site/content/terms/factional-interest.mdoc). The
decomposability entry doesn't connect them.

### What later theory adds

Organizational economics after 1990 formalized when decentralization wins.
Three results bear directly on the thesis:

- **The revelation principle cuts against adjacency in pure mechanism
  design.** If communication is free, a central mechanism can ask each agent
  to report what they know and do at least as well as any decentralized
  structure. Mookherjee (2006) reviews this literature, though the attribution
  of this result to his review isn't yet confirmed. See
  [information, communication, and decision quality](information-and-communication.md#effect-on-the-efficiency-audit).
  Decentralization adds
  value only when communication is costly, processing is limited, or agents
  can collude. The thesis uses mechanism design as its toolkit, so it has to
  state which of those frictions justifies local charters. Otherwise its own
  toolkit implies that one central mechanism is enough.
- **Delegation beats communication when bias is small.** Dessein (2002)
  shows that a principal delegates when the agent's bias is small relative to
  the value of the agent's information. Aghion and Tirole (1997) separate
  formal authority from real authority, which depends on who holds the
  information.
- **Coordination doesn't always require centralization.** Alonso, Dessein,
  and Matouschek (2008) show that decentralization can do better even when
  coordination matters, because centralized decision makers receive
  strategically distorted reports. Centralization wins only when coordination
  is very important. This result supports the charter model more than the
  thesis currently claims, and it gives the escalation rule a testable
  threshold.

Garicano (2000) is also worth citing. In a *knowledge hierarchy*, workers at
the bottom handle common problems, and they pass rare exceptions up to
specialists. That model is close to [escalation](../site/content/terms/escalation.mdoc), and it explains
why a hierarchy can save on knowledge costs, which is an argument the
framework doesn't make yet.

### Verdict

Informational adjacency supports pushing decisions down, as one force among
three. The thesis needs the other two forces in its premise: coordination
needs, which push decisions up, and agency costs, which push decisions up or
call for controls. It also needs to name the communication friction that
keeps a central mechanism from doing as well.

## Hayek and the parent charter

Hayek's argument isn't only that local actors know more. It's that the price
system lets local actors adjust to distant changes without knowing their
causes. Prices carry spillover information sideways, between local deciders.

The charter structure carries spillovers upward instead. A spillover between
two charters escalates to the parent, which sets constraints. For the parent
to internalize a spillover correctly, it needs to know the spillover's size,
and that knowledge is local to the children. Hayek's knowledge problem returns
at every parent.

The same point appears in the debate between Pigou and Coase (1960) on
externalities: a corrective tax needs knowledge that the taxing authority
rarely has. Besley and Coate (2003) show the political version: when a
central legislature made up of local delegates internalizes spillovers, the
delegates' bargaining distorts the result. A parent charter whose members are
child charters faces the same risk.

The framework has a ready answer, but it isn't stated in the premise. A parent
can use mechanisms, such as auctions, tradable permits, or transfers between
children, that let children reveal spillover costs, instead of setting
constraints directly. Those mechanisms are price-like, which brings the design
back toward Hayek.

## Granularity of control

Ashby's law of requisite variety says that only variety in a regulator can
absorb variety in the disturbances it regulates. It doesn't say that many
small regulators beat one large one. Splitting a regulator into parts
increases usable variety only when the disturbances split into the same
parts. That condition is near-decomposability, so Ashby's law adds no support
independent of Simon's.

Two related sources fit the framework better than the law alone:

- **Conant and Ashby (1970), "Every Good Regulator of a System Must Be a
  Model of That System."** This theorem supports the second step of the
  thesis, that each charter must carry a model of its problem. It's a closer
  match for the [charter model](../site/content/terms/charter-model.mdoc) than for granularity.
- **Beer's Viable System Model (*Brain of the Firm*, 1972).** Beer built a
  recursive organization design on Ashby's law. Every viable system contains
  viable systems and sits inside one, and each level attenuates and amplifies
  variety. This model is a close intellectual relative of the recursive
  charter type, and the literature review doesn't list it.

## Near-decomposability

Simon's claim has two parts. Near-decomposable systems evolve and recover
from damage more readily. In the short run, each subsystem behaves almost
independently, and in the long run, subsystems affect each other only in
aggregate. Simon and Ando (1961) proved the second part for linear dynamic
systems.

Three limits apply to the thesis:

- **Approximation, not equality.** Near-decomposability makes local optima
  approximate the global optimum, with an error that grows with the coupling
  between parts. The entry says local optima "add up to" the global optimum.
  "Approximate" is the accurate word.
- **The partition problem.** A system is nearly decomposable only under the
  right partition. Charters form around common interests and voluntary
  membership, not around the density of interactions. Two people can share an
  interest and still be weakly coupled, and two charters can share no
  interest and still be strongly coupled through a shared resource. Escalation
  repairs a bad partition one spillover at a time, but if the partition is
  badly wrong, most decisions escalate and the structure becomes centralized
  in practice.
- **Search on rugged landscapes.** The NK model (Kauffman, 1993), applied to
  organizations by Levinthal (1997) and Rivkin and Siggelkow (2003), shows that
  when choices interact, local search stops at local peaks. Ethiraj and
  Levinthal (2004) show that a modular design that doesn't match the true
  interaction structure locks in poor results, and that over-modularizing
  does more harm than under-modularizing. This literature tests the thesis
  most directly, and the NK model is a ready-made test bed for the planned
  verification study.

Baldwin and Clark (*Design Rules*, 2000) describe how modular design works in
practice. Architects fix visible design rules, and module designers work
freely on hidden details. The parent charter that sets constraints for its
children plays the architect's role. Baldwin and Clark also stress that
designers must know the interaction structure in advance, which returns to
the partition problem.

## Greedy scaling and decomposition methods

"Greedily scalable" has a precise meaning in optimization. A greedy algorithm
reaches the global optimum only for problems with matroid structure (Edmonds,
1971). Most allocation problems don't have it.

The structure that the thesis describes, where the parent sets constraints and
children optimize within them, has an exact counterpart: decomposition
methods, such as Dantzig–Wolfe decomposition (1960) and dual decomposition.
The coordinator sets prices or quotas, the parts optimize, and the
coordinator adjusts. These methods reach the global optimum under two
conditions:

- The problem is convex.
- The coordinator and the parts iterate until they converge.

The thesis meets neither condition by default. Economies of scale, which the
[big tent](../site/content/terms/big-tent.mdoc) entry relies on, make problems
nonconvex. Calsamiglia (1977) showed that with increasing returns, no
decentralized mechanism with messages of finite size can reach efficient
allocations in general. And a one-pass greedy structure doesn't iterate.

The framework can absorb both points. Deliberation during execution, which the
author already described as the game, can serve as the iteration. Nonconvex
parts, such as large shared infrastructure, can stay at the parent level,
where they're optimized as a whole.

## Efficiency and "maximal"

"Maximal organizational efficiency" needs a measure. The Social Charter entry
accepts Arrow's theorem and declines to choose a social optimum, so "the
global optimum" can't mean a maximum of social welfare. Two readings stay
consistent with the framework's neutrality:

- **Pareto efficiency.** No reallocation makes some member better off without
  making another worse off. This measure needs no interpersonal comparison.
- **Efficiency relative to parameters.** Given the ideals and conditions that
  members supply, the structure reaches the best outcome those parameters
  define.

"At any scale" also needs care. Williamson (1967) showed that control loss
across hierarchical levels limits efficient size. The recursion makes the
structure the same at every scale, but it doesn't make efficiency the same.
"At every scale" or "scale-invariant in structure" states what the framework
delivers.

## Proposed narrowed thesis

The following wording stays within what the cited theory supports. It's a
proposal for the author to accept, change, or reject:

> The Social Charter is infrastructure that organizes any part of society as
> a known problem, so that well-studied theory can organize it efficiently at
> every scale. It places each decision with the charter that holds the
> specific knowledge for it, and escalates a decision to a parent when
> coordination needs or agency costs outweigh that knowledge. The structure
> approaches the efficient outcome, relative to its members' parameters, to
> the degree that charter boundaries follow weak interactions, parents learn
> spillover costs through mechanisms, and agency costs at each level stay
> controlled.

## Open decisions

The author needs to decide the following, as of November 3, 2026:

1. Address the partition problem: interest-based charter boundaries against
   interaction-based modules. One option is a rule that charters split or
   merge when their escalation rate crosses a threshold.

## Settled decisions

The author settled the following on November 3, 2026:

- **Friction.** The decomposability entry names the four costs of the
  interim communication model as the friction that justifies local
  decisions: volume, fidelity, honesty, and capacity.
- **Greedy scaling.** "Greedily" stays. Greedy optimization is the interim
  explanation of why the structure can approach an optimum, until a better
  explanation replaces it. The glossary doesn't use the word, so no entry
  changes.
- **Maximal efficiency.** Efficiency is relative to the parameters that
  members supply, and the Social Charter entry says so. The author plans to
  study this further: the history of moves that reaches a state should count
  toward its efficiency, so that a mildly good end reached by terrible means
  ranks lower. This connects to internal justification in the Philosophy
  part, where means take their justification from the end they serve.
- **Intellectual relatives.** Garicano and the NK model are added. Beer was
  already listed.
- **Informational adjacency.** Replaced by the cost of moving information
  between nodes. A node gains information by observing, or by computing and
  analyzing. The entry doesn't assume that the nearest node knows the most,
  because a nearby node can miss the full picture or lack the expertise to
  identify what it observes. Jensen and Meckling's specific knowledge is the
  citation. The trade-off against agency costs is carried by the honesty
  cost of the four-cost paragraph.
- **Decomposability wording.** Neither "add up to" nor "approximate." The
  premise is now a guarantee of optimal substructure: within the domain of
  arbitration, a composition of charters is optimal when each charter is
  optimal given the capabilities it can afford. The author considered
  "converges" and set it aside, because convergence holds only under
  iteration, convexity, honest reports, weak coupling, and stable
  parameters. See [optimal substructure](optimal-substructure.md).
- **How a parent learns spillover costs.** A choice for each parent's
  design. The guarantee only needs a parent's optimum to include its choice
  of constraints, given what it can afford to learn.
- **Verification study.** The NK model is the test bed. Its interaction
  structure models how decomposable a society is, and the charter partition
  sets which parts each charter controls.

## Sources to verify

The following sources are new to this document. Check each against its
primary source before publishing:

- Jensen and Meckling, "Specific and General Knowledge, and Organizational
  Structure," in Werin and Wijkander, eds., *Contract Economics*, 1992
- Marschak and Radner, *Economic Theory of Teams*, 1972
- Galbraith, *Designing Complex Organizations*, 1973
- Mookherjee, "Decentralization, Hierarchies, and Incentives: A Mechanism
  Design Perspective," *Journal of Economic Literature*, 2006
- Dessein, "Authority and Communication in Organizations," *Review of
  Economic Studies*, 2002
- Aghion and Tirole, "Formal and Real Authority in Organizations," *Journal
  of Political Economy*, 1997
- Alonso, Dessein, and Matouschek, "When Does Coordination Require
  Centralization?", *American Economic Review*, 2008
- Garicano, "Hierarchies and the Organization of Knowledge in Production,"
  *Journal of Political Economy*, 2000
- Coase, "The Problem of Social Cost," *Journal of Law and Economics*, 1960
- Besley and Coate, "Centralized versus Decentralized Provision of Local
  Public Goods: A Political Economy Approach," *Journal of Public Economics*,
  2003
- Conant and Ashby, "Every Good Regulator of a System Must Be a Model of That
  System," *International Journal of Systems Science*, 1970
- Beer, *Brain of the Firm*, 1972
- Simon and Ando, "Aggregation of Variables in Dynamic Systems,"
  *Econometrica*, 1961
- Kauffman, *The Origins of Order*, 1993
- Levinthal, "Adaptation on Rugged Landscapes," *Management Science*, 1997
- Rivkin and Siggelkow, "Balancing Search and Stability," *Management
  Science*, 2003
- Ethiraj and Levinthal, "Modularity and Innovation in Complex Systems,"
  *Management Science*, 2004
- Baldwin and Clark, *Design Rules, Volume 1: The Power of Modularity*, 2000
- Edmonds, "Matroids and the Greedy Algorithm," *Mathematical Programming*,
  1971
- Dantzig and Wolfe, "Decomposition Principle for Linear Programs,"
  *Operations Research*, 1960
- Calsamiglia, "Decentralized Resource Allocation and Increasing Returns,"
  *Journal of Economic Theory*, 1977
- Williamson, "Hierarchical Control and Optimum Firm Size," *Journal of
  Political Economy*, 1967

For the sources that the thesis already cites, see
[intent and premises](intent-and-premises.md).
