# The Framework as an operator

This record covers a working session on November 13, 2026. The session
started from the question of whether a strongly emergent society would defeat
the Social Charter. It ended with a new reading of what the Framework is and
what it still has to prove.

## Decisions

The author settled the following points:

- **The Framework is an operator.** It takes an input and an objective, and
  it returns a structure. It fits every case because the objective is one of
  its inputs. A structure's quality can be measured only by how close it comes
  to an objective that has been filled in.
- **The Framework is the formulation.** In mathematical modeling, the
  *formulation* states a problem with its classes of inputs and objectives
  before any values are filled in. The Framework plays that role, so the book
  doesn't need a separate Formulation part. The site's parts stay as they are.
- **The Question supplies the instance, and the Answer is the solution.** The
  Question fills in one instance of the input and one instance of the
  objective. The Answer is the operator applied to those instances. Computer
  science calls this distinction *problem* and *instance*, and calls filling
  in the values *instantiation*.
- **Decomposability is the official name** of the result in the
  [optimal substructure record](optimal-substructure.md). It's one of several
  analytic proofs of the properties that the operator needs to work as
  designed. More proofs are planned.
- **Endogenous preferences is the general term** for the fact that
  circumstances shape the will. The author first listed it as the top open
  problem, then closed it later in the session. See
  [Endogenous preferences](#endogenous-preferences).
- **The objective is a fixed specification.** A charter's actions can change
  members' wills, but not the rule that reads those wills into an objective.
  A self-defined optimum is still an optimum.
- **Fidelity is an objective.** Serving members' current wills is one
  objective among others, so it belongs to the Question, not the Framework.
  Objective integrity becomes a design option instead of an operator property.
- **Dissent is an ethical right, not a functional guarantee.** Members keep
  the right to dissent even when they lack the material capacity to exercise
  it.
- **Strongly emergent influence is an outside condition.** A charter treats
  the influence of strongly emergent structures like a force of nature that it
  works against at the scale where it acts. The charter doesn't treat that
  influence as an interest that members present.

## Strong emergence

A system is *strongly emergent* when its large-scale properties can't be
derived from its parts and their interactions, even in principle, and those
properties act back on the parts. A system is *weakly emergent* when its
large-scale properties can be derived in principle, but only by something
close to a simulation of the whole system.

Strong emergence doesn't defeat decomposability. The proof never derives a
parent's state from its constituents. A parent chooses enforced constraints in
anticipation of how its constituents respond, within the information it can
afford. That's a claim about incentive design, not about reduction. Interests
that exist only at the level of a group also fit, because a charter's
objective is already an object at the level of the group.

Strong emergence does strain the structural condition that constituents
interact only through their parent's enforced constraints. A large-scale
state, such as a norm, a panic, or market sentiment, can change what members
do without any rule or contract to carry it. No party can name a counterparty
to escalate against, so the coupling stays outside the domain of arbitration.
Strong emergence narrows the domain where decomposability holds. It doesn't
break the result. Emergent effects also have no reason to follow charter
boundaries, so they add to the partition problem in the
[efficiency audit](efficiency-audit.md).

The author's answer is to treat that influence as an outside condition. Two
caveats remain open:

- **The condition responds to the charter.** A charter's own constraints feed
  back into the norms and moods that it works against. Economics knows the
  pattern from the Lucas critique and from Goodhart's law. A parent's
  anticipation has to include that loop, which adds to its costs.
- **Classification is a form of power.** Someone has to decide whether a
  stated preference is a member's interest or an emergent current. A charter
  could dismiss inconvenient demands as the mood of the times. Under the
  resolution in [Endogenous preferences](#endogenous-preferences), the
  objective specification states how stated preferences are read, so this
  question falls to charter design.

Weak emergence is the larger practical threat. It raises the cost of
anticipating responses, which bears on vacuity, described in the following
section.

## Vacuity

Decomposability states that if every charter is at its afforded optimum, the
composition is at the nested optimum. The optimum is relative to three things,
and each one removes an outside standard of comparison:

- The capabilities that each charter can afford
- The structure, because couplings that nobody can detect or escalate fall
  outside the result
- The members' own objectives, because the result has no central benchmark

Each choice was right on its own. Together they let the result hold while it
promises little. A charter that can afford almost nothing is still at its
afforded optimum, and a composition of such charters is at the nested optimum
whatever the outcome. The result can become empty in three ways:

- **The afforded optimum can be arbitrarily low.** Under weak emergence,
  anticipating responses costs about as much as simulating the system. As that
  cost grows, the options that a charter can afford shrink.
- **The hypothesis can be hard to check.** To confirm that a charter is at its
  afforded optimum, someone has to know what it could have afforded, which
  takes the same costly computation.
- **Endogenous preferences move the standard.** If the objective changes with
  the constraints, a charter can be optimal by definition. The author later
  rejected this concern. See
  [Endogenous preferences](#endogenous-preferences).

### The author's reply

The concern mixes two kinds of emptiness. The Framework takes no position on
ends, and that's intended: the Question supplies the objective. The concern
about means is the one that matters. The author's reply is that the Framework
is an operator, not the whole equation, so it can be judged only with an
objective filled in.

That reply holds for each output. An operator still has properties that can
be stated for every objective in a class, in the way that an optimization
method is judged by how close it gets to the optimum for every problem in a
class. Without such properties, the identity operator would also fit every
case.

The no-free-lunch theorems for optimization show that, averaged over all
possible objectives, no optimizer does better than any other (Wolpert and
Macready, 1997). The theorems are proved for search over finite spaces, so
applying them to social structures is an analogy. The lesson still applies: a
good operator is good on a class of problems. The decomposability premise
already names that class, the nearly decomposable problems in Herbert Simon's
sense. The planned NK-model study can test the claim directly, because the K
parameter in Kauffman's model sets how decomposable a problem is.

Other neutral frameworks take the same shape. The welfare theorems take no
position on what people prefer, and mechanism design takes no position on
which outcome is wanted. Ashby's law of requisite variety takes no position on
what a regulator is for. Each still makes claims that could turn out false.

### What the operator owes

The Framework owes the following properties, each stated for every objective
in its class:

- **Performance on the class.** The charter operator comes close to the
  optimum on nearly decomposable problems.
- **Comparison with other structures.** At equal cost, charters do better than
  alternatives such as a flat assembly, a market, or a single hierarchy.
- **A bound on affordability.** The cost of anticipating responses grows
  slowly with depth, because each level needs only its constituents'
  aggregate responses.

An earlier draft listed objective integrity as a fourth property. The author
moved it to charter design. See
[Endogenous preferences](#endogenous-preferences).

## Endogenous preferences

The framework treats members' wills as the given input that sets each
charter's objective. Circumstances shape every will, including the
constraints of the charters that serve it. The session first read this loop as
a threat to the operator. If a charter's output rewrites the wills that set
its objective, the nested optimum looks like a fixed-point problem that can
fail in three ways:

- **No optimum.** No self-consistent state might exist.
- **Several optima.** Several self-consistent states might exist, and the
  Framework can't rank them, because each comes with its own objective.
- **A self-validating optimum.** The cheapest way for a charter to reach its
  optimum is to condition its members into wanting what it already does.

### The author's resolution

The author rejected that reading. The objective that the Framework takes as
input is a specification, such as "serve what members want at each moment,
aggregated by a stated rule." A charter's actions can change members' wills,
but they can't change the specification. A charter that shapes wills still
maximizes a fixed function of its own decision, which is an ordinary
optimization problem:

- Several self-consistent states pose no ranking problem, because the
  specification ranks them.
- A charter that conditions its members reaches a real optimum when its
  specification allows conditioning. Whether to allow it is a choice for the
  Question. A school or a religious order forms its members' wills on purpose.
- The nested optimum is a Stackelberg optimum, so a parent that reshapes its
  constituents' objectives only has a richer response to anticipate.

By the author's test, the operator fails only if a charter structurally can't
reach optimality against an objective that has been set. A self-defined
optimum is still an optimum.

### Fidelity as an objective

The fidelity audit asks whether members got what they asked for. That
question measures one objective, the satisfaction of members' current wills,
and it builds that objective into the Framework. The author ruled that
fidelity is an objective in its own right, so it belongs to the Question. An
audit compares results with whatever objective a charter states.

Objective integrity, the proposed rule that no charter conditions the wills
that set its own objective, becomes a design option for charters whose
objective calls for it. It's no longer an operator property.

The glossary entries for fidelity audit and capability still define both terms
by what members asked for. They need revising to match.

### Objections and replies

The session tested the resolution against three objections. The author
answered each from existing definitions:

- **Shaping from outside.** Influence from outside a charter falls under the
  jurisdiction of a higher charter that covers both parties. The local charter
  treats it as a given condition, like a force of nature: a municipality isn't
  at fault when a dam upstream breaks. Influence between siblings falls under
  their parent, which either enforces a rule against it or anticipates it as
  part of their response. Influence with no common ancestor is outside the
  domain of arbitration, which the decomposability guarantee already treats as
  a given condition.
- **The cost of anticipation.** Anticipating how constraints reshape wills
  might cost about as much as simulating the society. The afforded optimum
  already counts the cost of information, processing, and communication.
  Spending heavy resources for a small gain is suboptimal once those resources
  enter the calculation. The costs are often hard to see, but they can be
  bounded stochastically or approximated. The literature calls this
  *rational metareasoning* (Russell and Wefald, 1991).
- **The capacity to dissent.** The Philosophy part holds that no delegation
  can permanently extinguish the capacity for dissent. Conditioning that
  removes members' material capacity to dissent doesn't contradict it. The
  right to dissent is an ethical right that agency carries, not a functional
  guarantee, and the Philosophy part already leaves material outcomes to
  material reality.

### Earlier responses

Before the resolution, the session considered three responses. The author set
them aside as follows:

- **A laundered-preference standard** would count only the preferences that a
  member would hold after reflection or without manipulation. It falls away,
  because it conflicts with the framework's rule against an outside index and
  gives someone the power to rule on whose will is authentic.
- **Objective integrity** becomes a design option, as described in
  [Fidelity as an objective](#fidelity-as-an-objective).
- **Compatibilist agency** defines agency as a will that can revise itself in
  response to reasons, instead of as an unconditioned will (Frankfurt, 1971;
  Fischer and Ravizza, 1998). The operator no longer needs it. It stays
  available as an account of agency for the Philosophy part.

### Related terms

Related terms from other fields include the following:

- *Heteronomy* (Kant): a will moved by outside influences
- *Adaptive preferences* (Elster, Sen, Nussbaum): wanting what one can get
- *Structure and agency* (Giddens, Bourdieu): how far social structure shapes
  choice
- *Preference tampering* (AI alignment): the optimizer shaping the
  preferences that it serves
- *Reflexivity* (social theory): a system's actions changing the beliefs and
  wants that drive it

## What stays open

The session left these questions open:

- The account of agency in the Philosophy part
- The revision of the glossary entries for fidelity audit and capability
- The operator properties to prove next, listed in
  [What the operator owes](#what-the-operator-owes)

## Sources to verify

The following sources come from general knowledge and still need checking
against their primary sources:

- Bowles, "Endogenous Preferences: The Cultural Consequences of Markets and
  Other Economic Institutions," *Journal of Economic Literature*, 1998
- Elster, *Sour Grapes: Studies in the Subversion of Rationality*, 1983
- Lukes, *Power: A Radical View*, 1974
- Bernheim and Rangel, "Beyond Revealed Preference: Choice-Theoretic
  Foundations for Behavioral Welfare Economics," *Quarterly Journal of
  Economics*, 2009
- Frankfurt, "Freedom of the Will and the Concept of a Person," *Journal of
  Philosophy*, 1971
- Fischer and Ravizza, *Responsibility and Control*, 1998
- Wolpert and Macready, "No Free Lunch Theorems for Optimization," *IEEE
  Transactions on Evolutionary Computation*, 1997
- Simon, "The Architecture of Complexity," *Proceedings of the American
  Philosophical Society*, 1962
- Sawyer, *Social Emergence: Societies as Complex Systems*, 2005
- Lucas, "Econometric Policy Evaluation: A Critique," 1976
- Ashby, *An Introduction to Cybernetics*, 1956
- Conant and Ashby, "Every Good Regulator of a System Must Be a Model of That
  System," *International Journal of Systems Science*, 1970
- Giddens, *The Constitution of Society*, 1984
- Russell and Wefald, *Do the Right Thing: Studies in Limited Rationality*,
  1991
