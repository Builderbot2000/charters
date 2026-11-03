# Toward a unified cost of communication

This note answers a question the author raised on October 29, 2026: is there
a unifying theory that quantifies the cost of communication in any
organizational structure, which could serve as a basis for the framework? It
follows [information, communication, and decision quality](information-and-communication.md).

## Short answer

No single established theory does this. Four bodies of theory each quantify
one part of the cost, and each has its own unit. Several modern research
programs combine two or three of the parts, in economics, computer science,
control engineering, network science, and political science. See
[Modern programs](#modern-programs). Combining all four for a recursive graph
of charters would be a contribution of this project. It would assemble
existing results, not invent a new theory.

The four parts have a plausible common unit: information, measured in bits.
The section [A common unit](#a-common-unit) explains how, and marks which
steps are established and which are the project's proposal.

## The author's intuition

The author proposed one underlying mechanism behind the earlier findings:

- Market signals are cheap and accurate because incentives favor honest
  expression of demand, because the signal starts close to its source, and
  because no single trader can easily move a large market's price.
- Hierarchies lose information because each intermediary interprets it
  through their own interests, so a message loses more the farther it
  travels. Flat, peer-to-peer structures avoid that loss.
- Surveys suffer from the same loss.

The literature supports most of this intuition. It adds three corrections.

### What the literature supports

**Loss at each intermediary.** Three independent results back the idea that
information degrades as it passes through intermediaries:

- In information theory, the *data processing inequality* states that
  information about a source can't increase as it passes along a chain. Each
  step can only keep or lose it. This is a theorem, and it holds for any
  intermediary, honest or not.
- Williamson (1967) modeled *control loss*: each subordinate carries out only a
  fraction of a superior's intentions. Loss compounds across levels, and that
  compounding limits efficient firm size.
- Campbell (1958) catalogued the systematic errors that human relays add to
  messages, in "Systematic Error on the Part of Human Links in Communication
  Systems." The search confirmed the paper's details but not its contents.

**Loss from the intermediaries' interests.** Ambrus, Azevedo, and Kamada
(2013) modeled cheap talk through a chain of strategic intermediaries. In
pure-strategy equilibria, adding intermediaries can't improve how much
information gets through. The outcome depends on each intermediary's bias,
and it doesn't depend on their order.

**Resistance to manipulation at scale.** Roberts and Postlewaite (1976) showed
that as an exchange economy grows, the gain from manipulating prices shrinks
to zero. Azevedo and Budish (2019) generalized the point. In large markets, a
mechanism only needs to be *strategy-proof in the large*: each participant
treats prices as fixed, so honest reporting is close to optimal. Both results
formalize the author's point that no single market maker can easily set
prices.

### Corrections to the intuition

**Prices win by compression, not mainly by proximity.** A buyer is close to
their own demand, but the price that reaches a distant seller has passed
through many trades. Prices are cheap because they compress. One number per
good carries everything a participant needs to act. Mount and Reiter (1974)
and Jordan (1982) showed that the competitive mechanism uses the smallest
message space of any decentralized mechanism that reaches efficient
allocations. Nisan and Segal (2006) showed the converse: any mechanism that
reaches an efficient allocation must, in effect, reveal supporting prices.
When goods come in bundles whose values interact, the prices needed grow
exponentially. Compression is the source of the market's advantage, and it
fails where values don't separate.

**Loss comes from bias and noise, not from hops as such.** In Ambrus and
others, an intermediary with no bias costs nothing strategically. A chain of
honest, accurate relays loses only noise. So the cost of a hop depends on the
intermediary, not only on the count. Hierarchies can also add value. Alonso,
Dessein, and Matouschek (2008) found that divisions share more with an
independent headquarters than with each other, so the center can know more
than any division.

**Flat structures have their own cost.** In a flat structure where everyone
talks to everyone, the number of links grows with the square of the number of
units: *n* units need *n*(*n* − 1) / 2 links. Hierarchies exist partly to cut
that number. Bolton and Dewatripont (1994) found that efficient networks are
centralized, because processing is costly. Leavitt's experiments (1951) found
that a centralized wheel pattern solved tasks faster and with fewer messages
than a leaderless circle, although members of the circle were more satisfied.
Flat structures also aren't free of bias. Peers have interests too, and
Alonso and others found that lateral communication fails when divisions are
strongly biased toward themselves.

The corrected version of the intuition: every structure trades three costs.
Long paths lose information to noise and bias at each biased node. Many links
cost volume and attention. Central nodes cost processing capacity and attract
lobbying. The best structure depends on where the bias and the interactions
are.

## Four parts of the cost

The established theory splits the cost of communication into four parts:

| Part | Question | Theory that quantifies it | Unit |
|---|---|---|---|
| Volume | How much has to be sent? | Message-space dimension (Hurwicz, 1960; Mount and Reiter, 1974). Communication complexity (Nisan and Segal, 2006). | Dimensions or bits |
| Fidelity | How much survives noise along a path? | Shannon's channel capacity and the data processing inequality. Control loss (Williamson, 1967). | Bits, or fraction kept per level |
| Honesty | How much survives senders' interests? | Cheap talk (Crawford and Sobel, 1982; Ambrus and others, 2013). Incentive compatibility, and its large-market form (Roberts and Postlewaite, 1976; Azevedo and Budish, 2019). | Number of distinguishable reports |
| Capacity | Can the receiver absorb it in time? | Processing networks (Radner, 1993; Bolton and Dewatripont, 1994; Van Zandt, 1999). Rational inattention (Sims, 2003). | Delay, or bits per period |

Reichelstein and Reiter (1988) state outright that incentive costs and
informational costs trade off and must be studied together. They measure the
smallest message space that a mechanism needs when participants act
strategically. It's the closest established work to a unified theory, but it
covers one mechanism, not a network of charters.

Van Zandt's survey (1999) covers the capacity part in depth and argues that
without limits on processing, nothing explains why organizations divide
information processing among members.

## A common unit

The four parts can plausibly be measured in one unit, bits, and then valued
in terms of decisions. The steps differ in how well established they are:

1. **Volume is already in bits.** Communication complexity counts bits
   directly. Established.
1. **Fidelity is already in bits.** Channel capacity and mutual information
   are bits. Established.
1. **Capacity is in bits per period.** Sims (2003) models attention as a
   Shannon capacity limit. Established within rational inattention theory.
1. **Honesty can be expressed in bits.** In a Crawford–Sobel equilibrium, the
   sender reports which of *N* intervals the truth falls in, so the report
   carries at most log₂ *N* bits. *N* shrinks as bias grows. Bias therefore
   acts like a loss of channel capacity. The equilibrium result is
   established. Treating it as a capacity loss in a network model is the
   project's proposal.
1. **Bits become decision value.** Blackwell's theorem ranks information by
   its value to any decision maker, and the value of information for a
   specific decision converts the information lost into outcomes lost.
   Established for single decisions. Applying it across a network is the
   project's proposal.

The resulting model would treat an organization as a graph:

- Each unit, or node, has a processing capacity and a bias.
- Each link has a capacity and a noise level.
- The cost of a structure is the volume it sends, plus the delay it creates,
  plus the decision value it loses along each path.

The same model would apply to a market, a hierarchy, a flat network, a survey,
or a charter graph, because each is a choice of nodes, links, and mechanisms.
That's the uniform basis the author asked for. It isn't established theory.
Building it, and checking it against the cases in the earlier notes, would be
original work.

## Use in the framework

A model like this would serve the framework in three places:

- **The decomposability premise.** It replaces "informational adjacency" with a
  measurable claim: place each decision where the total cost of getting its
  information there is lowest.
- **Escalation and lateral channels.** It gives a threshold. Escalate when the
  value lost on the path to the parent is smaller than the value lost to
  uncoordinated spillovers between siblings.
- **The verification study.** The planned study, which fits a charter design to
  a known problem, could compute the cost of the charter graph against a
  centralized and a flat alternative on the same problem.

## The author's refinements

The author answered the three corrections the same day. Each refinement
matches an established result.

### Anchored signals

The author's position: a price chain is clean when its signal makers trade
the good for use in real operations, so their incentives favor accurate
intentions. Where the anchor is weak, as with bitcoin, more signal makers
trade on the price itself, and the signal loses accuracy.

Established theory supports this refinement:

- Keynes's *beauty contest* (*The General Theory*, 1936, chapter 12) describes
  traders who predict what other traders will think, instead of what the asset
  is worth.
- Morris and Shin (2002) modeled the beauty contest. Agents want to match the
  fundamentals and also to match each other. The coordination motive can make
  public signals less useful. Svensson and others dispute how often this
  happens.
- De Long, Shleifer, Summers, and Waldmann (1990) showed that traders who
  aren't anchored to fundamentals create risk that deters arbitrage, so
  prices can drift from fundamental value for long periods.
- Campbell's law (Campbell, 1979) states the general form: the more a
  quantitative indicator is used for decisions, the more pressure there is to
  corrupt it, and the more it distorts the process it measures.

Compression explains why prices are cheap. Anchoring explains why they're
accurate. The earlier claim that compression is the main reason was too
strong. Both are needed. Campbell's law carries the point outside markets:
any charter signal that becomes a target, such as a survey score or an
objective-function metric, loses its anchor.

### Hops and bias

The author's position: each hop has some probability of distortion, so a
longer chain distorts more. One strongly biased node can still outweigh a long
chain of mostly accurate ones.

This position combines two established effects. Noise compounds with length,
as in Williamson's control loss, where each level keeps only a fraction of the
message. Bias acts as a bottleneck. Ambrus and others found that the outcome
of a chain depends on each intermediary's bias. The earlier correction
overstated the case. Hops matter through noise, and bias matters through the
most distorting nodes. Both terms belong in the model.

### Cost and accuracy of a decision rule

The author's position: a law passed in a democracy costs more and reflects
popular will more accurately than a law passed in a dictatorship.

This position is the central model of Buchanan and Tullock's *The Calculus of
Consent* (1962). For a rule that requires *k* of *N* members to agree:

- *Decision-making costs*, the cost of reaching agreement, rise with *k*.
- *External costs*, the expected cost to each member of decisions made
  without their agreement, fall with *k*.
- The optimal rule minimizes the sum.

A dictatorship sets *k* to 1, with low decision costs and high external costs.
Unanimity sets *k* to *N*, with the reverse. Buchanan and Tullock concluded
that decisions with high potential external costs need supermajorities. A
later critique notes that a unique interior optimum needs the total cost
curve to be convex.

Two related results:

- Dahl and Tufte (*Size and Democracy*, 1973) found a trade-off between
  *citizen effectiveness*, which is higher in small units, and *system
  capacity*, which is higher in large ones. They concluded that no single size
  of unit is optimal. That conclusion supports a graph of charters at many
  sizes.
- Sah and Stiglitz (1986), from the preceding note, give the error version:
  structures that need more approvals reject more good projects, and
  structures that need fewer accept more bad ones.

## Why no standard model exists

The shared form is real. Buchanan and Tullock's decision rule, Jensen and
Meckling's decision rights, Galbraith's structures, and Sah and Stiglitz's
architectures all have the same shape: a cost of including and transmitting
information, which rises, and a cost of errors and exclusion, which falls,
with the optimum at the lowest total. Each discipline has a standard model at
its own level. What's missing is one model across levels. The literature
suggests five reasons:

- **An attempt was made and faded.** Deutsch's *The Nerves of Government*
  (1963) modeled the political system as a communication network, using
  measures such as load, lag, gain, and lead from cybernetics. Beer did the
  same for management. Political science moved away from cybernetics in the
  1970s, in part because the measures were hard to put into practice.
- **Bits don't measure meaning or interest.** Shannon's theory excludes
  meaning on purpose. Daft and Lengel's equivocality and every strategic
  distortion are about meaning and interest, so information theory alone
  can't price them.
- **Bias doesn't add up along a path.** Noise compounds hop by hop, but
  strategic loss depends on the equilibrium of the whole structure, and many
  games have several equilibria. There's no per-link formula to sum.
- **Accuracy needs a target.** "Accurate to the popular will" assumes a
  well-defined will, and Arrow's theorem says one doesn't exist in general.
  Buchanan and Tullock avoid the problem by measuring each member's expected
  cost, not distance from a collective will.
- **Mechanism design assumed communication away.** The revelation principle
  treats reports as free, so the mainstream theory spent decades without a
  cost of communication. Communication complexity, in work such as Nisan and
  Segal (2006), brought the cost back only recently.

### What failed in the cybernetic attempt

The sources point to five failures. Most are critiques of Deutsch and of
early cybernetic social science. Two are histories of projects that tried to
build cybernetic control systems.

- **The measures stayed metaphors.** Deutsch called *The Nerves of Government*
  an interim report toward a theory, and he never measured load, lag, or gain
  for a real government. Easton's systems analysis, its neighbor, drew the
  same complaint: critics such as Leslie (1972) found that its variables were
  never put into practice or tested. Shannon himself warned in 1956, in an
  editorial titled "The Bandwagon," against extending information theory to
  other fields without rigor.
- **It left out interests.** Mueller (2026) notes that Deutsch had no theory of
  the state and avoided violence and war. Other critics note that the model
  had no place for deliberation or lasting disagreement. Deutsch may not have
  seen how intermediaries such as bureaucracies distort what they pass on.
  The model had noise, but no bias.
- **It left out prices.** Deutsch and Wiener studied steering by a central
  controller. Wiener dismissed price theory. Early cybernetics didn't treat
  the market as a second, decentralized control system.
- **The controller stood outside the system.** Early cybernetics assumed a
  neutral steersman. In a society, the steersman is a participant with
  interests. Wiener himself warned that in social science, the observer and
  the observed are hard to separate. Campbell's law is a later statement of
  the same problem.
- **The working systems failed on interests.** Beer's Project Cybersyn in
  Chile, from 1971 to 1973, helped keep goods moving during a 1972 truckers'
  strike. Participants later described its factory models as top-down, and
  Beer complained of growing bureaucracy before the 1973 coup ended it. The
  coup means Cybersyn was never a fair test. Glushkov's OGAS, a planned
  national computer network for the Soviet economy, failed from 1963 to 1982.
  Peters (2016) attributes the failure to competing ministries that each
  protected their own interests, not to weak technology.

The pattern: cybernetics modeled communication without incentives, and the
projects that tried to build it failed on incentives. Mainstream mechanism
design took the opposite path for a time, and treated communication as free.
The split didn't last. Later work joined the two halves under other names.
See [Modern programs](#modern-programs).

For the project, the failures translate into five requirements for any model
it adopts:

- Measures that can be computed on a real case, starting with the planned
  verification study.
- Bias at each node, not only noise on each link.
- Prices and markets as one channel among the others.
- Designers and measurers as participants with interests, which the
  framework already names as the [vanguard interest](../site/content/terms/vanguard-interest.mdoc)
  and [interpreter capture](../site/content/terms/interpreter-capture.mdoc).
- Signals that degrade when they become targets, as Campbell's law predicts.

### Modern programs

An earlier version of this note implied that nobody tried again after
cybernetics. That was wrong. The problem moved into six fields, each under
its own name. None of them covers all four parts of the cost for a recursive
structure, but together they cover most of what the project needs.

**Communication cost with selfish agents, in bits.** Fadel and Segal (2009)
measure the *communication cost of selfishness*: how many more bits a
mechanism needs when agents act in their own interest than when they report
honestly. The extra cost can be exponential in the worst case, and it's very
low in some cases. This paper joins the volume and honesty parts in one unit.
It builds on Reichelstein and Reiter (1988) and Nisan and Segal (2006).

**Mechanisms run by the agents over a network.** *Distributed algorithmic
mechanism design* (Feigenbaum and Shenker, 2002) studies mechanisms that the
participants compute among themselves over a network, such as routing
between internet domains. It counts computation, communication, and
incentives together. It's the closest heir to the cybernetic project, built
in computer science and with incentives included.

**Strategic communication on a graph.** Three papers model communication on a
network of people with different interests:

- Galeotti, Ghiglino, and Squintani (2013) model cheap talk on a network.
  Whether a person can send a truthful message to a group depends on the
  group's preferences and on how many others already send truthful messages
  to each member. Welfare depends on how many truthful messages flow and how
  evenly they're spread.
- Calvó-Armengol, de Martí, and Prat (2015) let agents pay to speak and to
  listen on each link. When coordination matters more than local adaptation,
  each agent's influence is about proportional to their eigenvector
  centrality in the network. The model explains why actual influence often
  differs from the formal hierarchy.
- Dewatripont and Tirole (2005) treat communication as effort by both parties:
  the sender works to be understood, and the receiver works to absorb.

These models put bias at each node and cost on each link, which is the graph
model this note proposed.

**Organizational economics.** The field consolidated its results in *The
Handbook of Organizational Economics* (Gibbons and Roberts, eds., 2013),
including a chapter on hierarchies by Garicano and Van Zandt. Crémer, Garicano,
and Prat (2007) formalized Arrow's codes. Efficient languages use precise
words for frequent events and vague words for rare ones. A broader scope
captures more synergies but needs a more generic language, which lowers
efficiency inside each unit. That result is a direct statement of the
trade-off in setting a charter's scope.

**Efficiency loss from decentralized decisions.** The *price of anarchy*
(Koutsoupias and Papadimitriou, 1999) is the ratio between the worst outcome
that selfish, decentralized agents reach in equilibrium and the best outcome
overall. Roughgarden and Tardos showed that for one class of routing problems
the ratio is at most 4/3, whatever the network's shape. In other problems it
has no bound. The price of anarchy is a ready-made measure for the
decomposability premise: it says how far local optima fall from the global
optimum, for a given class of problem.

**Decentralized control in engineering.** Cybernetics continued in control
theory. Witsenhausen (1968) showed that when controllers hold different
information, the best control can be nonlinear, because each controller's
action also serves as a message to the others. The optimal solution to his
example is still unknown. Later work, such as Rotkowitz's on *quadratic
invariance*, identifies the information structures under which decentralized
control is tractable. That's the engineering version of the decomposability
condition.

**Network structure.** Dodds, Watts, and Sabel (2003) added links to a
hierarchy and tested the result under heavy information exchange. A
*multiscale* network, a hierarchy with lateral links at every level, resisted
both congestion at single nodes and collapse of the whole. It got most of
that robustness from few added links. Neither a pure hierarchy nor a flat
network did as well. The result supports adding lateral channels between
sibling charters.

**Political science.** Two lines of work address the cost and accuracy of
collective decisions:

- The *informational theory of legislatures* (Gilligan and Krehbiel, 1987;
  Krehbiel, 1991) treats committees as specialists that the full legislature
  delegates to, so that it gets costly policy information. Procedures that
  protect a committee's proposals reward the committee for specializing, at
  the cost of some bias. The structure resembles a parent charter that
  delegates to a child.
- *Epistemic democracy* (Ober, 2008; Landemore, 2013) studies how democratic
  institutions gather and combine dispersed knowledge. Landemore argues that
  the diversity of participants matters more than individual ability. Ober
  argues that classical Athens processed information better than its rivals.
  Critics note that the argument weakens when participants differ in values,
  not only in knowledge.

What's still missing is one model across all levels, from a person to the
highest charter, with all four parts of the cost. The strategic network
models come closest. Fitting them to a recursive charter graph, and measuring
the result with the price of anarchy, would be a concrete research program
for the verification study. It would also address the obstacles listed
earlier: Buchanan and Tullock's form for the trade-off, expected cost per
member instead of a collective will, and bias modeled as an equilibrium of the
whole network instead of a sum over links.

## Open decisions

The author needs to decide the following:

1. Adopt a cost-of-communication model as the basis of the decomposability
   premise, or keep it as a supporting argument.
1. If adopted, decide whether the framework states the model formally, or
   names its four parts and leaves measurement to each charter's design.
1. Decide whether to add a lateral channel between sibling charters, which the
   framework lacks.

On November 3, 2026, the author placed collusion under the honesty cost, as
several senders that misreport together, instead of adding a fifth cost. See
[optimal substructure](optimal-substructure.md).

## Sources

Status follows the convention in the
[preceding note](information-and-communication.md#sources). Sources already
listed there aren't repeated.

| Source | Status |
|---|---|
| Campbell, "Systematic Error on the Part of Human Links in Communication Systems," *Information and Control* 1(4), 1958 | [Partly verified](https://scilit.com/publications/6f786622257bb42dade335565526986b); contents not confirmed |
| Ambrus, Azevedo, and Kamada, "Hierarchical Cheap Talk," *Theoretical Economics* 8(1), 2013 | [Verified](https://econtheory.org/ojs/index.php/te/article/viewArticle/20130233) |
| Nisan and Segal, "The Communication Requirements of Efficient Allocations and Supporting Prices," *Journal of Economic Theory* 129(1), 2006 | [Verified](https://web.stanford.edu/~isegal/prices.pdf) |
| Williamson, "Hierarchical Control and Optimum Firm Size," *Journal of Political Economy* 75(2), 1967 | [Partly verified](https://econpapers.repec.org/RePEc:ucp:jpolec:v:75:y:1967:p:123); compounding formula not confirmed |
| Roberts and Postlewaite, "The Incentives for Price-Taking Behavior in Large Exchange Economies," *Econometrica* 44(1), 1976 | [Verified](https://ideas.repec.org/a/ecm/emetrp/v44y1976i1p115-27.html) |
| Azevedo and Budish, "Strategy-proofness in the Large," *Review of Economic Studies* 86(1), 2019 | [Verified](https://www.nber.org/papers/w23771) |
| Reichelstein and Reiter, "Game Forms with Minimal Message Spaces," *Econometrica* 56(3), 1988 | [Verified](https://ideas.repec.org/a/ecm/emetrp/v56y1988i3p661-92.html) |
| Van Zandt, "Decentralized Information Processing in the Theory of Organizations," in Sertel, ed., *Contemporary Economic Issues*, 1999 | [Verified](https://ideas.repec.org/h/pal/intecp/978-1-349-14540-9_7.html) |
| Sims, "Implications of Rational Inattention," *Journal of Monetary Economics* 50(3), 2003 | [Verified](https://collaborate.princeton.edu/en/publications/implications-of-rational-inattention/) |
| Leavitt, "Some Effects of Certain Communication Patterns on Group Performance," *Journal of Abnormal and Social Psychology*, 1951 | [Partly verified](https://dspace.mit.edu/handle/1721.1/79469); confirmed through the 1949 thesis |
| Keynes, *The General Theory of Employment, Interest and Money*, 1936, chapter 12 | Unverified |
| Morris and Shin, "Social Value of Public Information," *American Economic Review*, 2002 | [Partly verified](https://larseosvensson.se/files/papers/Morris-Shin.pdf); model confirmed, journal details not confirmed |
| De Long, Shleifer, Summers, and Waldmann, "Noise Trader Risk in Financial Markets," *Journal of Political Economy* 98(4), 1990 | [Verified](https://econpapers.repec.org/RePEc:ucp:jpolec:v:98:y:1990:i:4:p:703-38) |
| Campbell, "Assessing the Impact of Planned Social Change," *Evaluation and Program Planning* 2(1), 1979 | [Verified](https://en.wikipedia.org/wiki/Campbell%27s_law), secondary source only |
| Buchanan and Tullock, *The Calculus of Consent*, 1962 | [Verified](https://www.econlib.org/library/Buchanan/buchCv3.html?chapter_num=6) |
| Dahl and Tufte, *Size and Democracy*, 1973 | [Verified](https://oidp.net/en/content.php?id=1595), secondary sources only |
| Deutsch, *The Nerves of Government*, 1963 | [Verified](https://en.wikipedia.org/wiki/Karl_Deutsch), secondary sources only |
| Mueller, "The Road to a Social Cybernetics," Substack, June 11, 2026 | [Verified](https://miltonlmueller.substack.com/p/the-road-to-a-social-cybernetics); read in full |
| Leslie, "General Theory in Political Science: A Critique of Easton's Systems Analysis," *British Journal of Political Science* 2(2), 1972 | [Partly verified](https://ideas.repec.org/a/cup/bjposi/v2y1972i02p155-172_00.html); the operationalization critique comes from a secondary source |
| Shannon, "The Bandwagon," *IRE Transactions on Information Theory*, 1956 | Partly verified; cited in Mueller |
| Medina, *Cybernetic Revolutionaries*, 2011, on Project Cybersyn | [Partly verified](https://muse.jhu.edu/article/522006/pdf); secondary sources only |
| Peters, *How Not to Network a Nation*, 2016, on OGAS | [Verified](https://eusp.org/en/news/how-not-to-network-a-nation-the-uneasy-history-of-the-soviet-internet) |
| Fadel and Segal, "The Communication Cost of Selfishness," *Journal of Economic Theory* 144(5), 2009 | [Verified](https://ideas.repec.org/a/eee/jetheo/v144y2009i5p1895-1920.html) |
| Feigenbaum and Shenker, "Distributed Algorithmic Mechanism Design: Recent Results and Future Directions," DIAL-M, 2002 | [Verified](https://jmvidal.cse.sc.edu/lib/feigenbaum02a.html) |
| Galeotti, Ghiglino, and Squintani, "Strategic Information Transmission Networks," *Journal of Economic Theory* 148(5), 2013 | [Verified](https://econpapers.repec.org/RePEc:eee:jetheo:v:148:y:2013:i:5:p:1751-1769) |
| Calvó-Armengol, de Martí, and Prat, "Communication and Influence," *Theoretical Economics* 10(2), 2015 | [Verified](https://www.econometricsociety.org/publications/theoretical-economics/2015/05/27/Communication-and-influence) |
| Dewatripont and Tirole, "Modes of Communication," *Journal of Political Economy* 113(6), 2005 | [Verified](https://econpapers.repec.org/RePEc:ucp:jpolec:v:113:y:2005:i:6:p:1217-1238) |
| Gibbons and Roberts, eds., *The Handbook of Organizational Economics*, 2013, with Garicano and Van Zandt, "Hierarchies and the Division of Labor" | [Partly verified](https://ideas.repec.org/h/pup/chapts/9889-15.html); chapter contents not confirmed |
| Crémer, Garicano, and Prat, "Language and the Theory of the Firm," *Quarterly Journal of Economics* 122(1), 2007 | [Verified](https://researchonline.lse.ac.uk/id/eprint/4070) |
| Koutsoupias and Papadimitriou, "Worst-Case Equilibria," STACS, 1999 | [Verified](https://cgi.di.uoa.gr/~elias/publications/paper-kp09.pdf) |
| Roughgarden and Tardos, on the 4/3 bound for selfish routing | Partly verified; the bound is from a secondary citation |
| Witsenhausen, "A Counterexample in Stochastic Optimum Control," *SIAM Journal on Control*, 1968 | [Verified](https://en.wikipedia.org/wiki/Witsenhausen%27s_counterexample), secondary source only |
| Rotkowitz, on quadratic invariance | [Partly verified](https://folk.ntnu.no/skoge/prost/proceedings/cdc-2008/data/papers/1857.pdf); the original paper isn't cited here yet |
| Dodds, Watts, and Sabel, "Information Exchange and the Robustness of Organizational Networks," *PNAS* 100(21), 2003 | [Verified](https://pmc.ncbi.nlm.nih.gov/articles/PMC218789) |
| Gilligan and Krehbiel, "Collective Decision-Making and Standing Committees," *Journal of Law, Economics, and Organization* 3(2), 1987 | [Verified](https://core.ac.uk/download/216275324.pdf) |
| Krehbiel, *Information and Legislative Organization*, 1991 | Partly verified; bibliographic details only |
| Landemore, *Democratic Reason*, 2013 | [Verified](https://www.newdemocracy.com.au/docs/researchpapers/HeleneLandemore_DemocraticReason_SSRN-id1449594.pdf), secondary sources only |
| Ober, *Democracy and Knowledge*, 2008 | [Partly verified](https://raison-publique.fr/3005/); arguments taken from related Ober papers |
| Shannon, "A Mathematical Theory of Communication," 1948, and Cover and Thomas, *Elements of Information Theory*, for the data processing inequality | Unverified; standard textbook result |
