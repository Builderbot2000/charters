# Information, communication, and decision quality

This note surveys established theory on two questions that the
[efficiency audit](efficiency-audit.md) raised:

- Why do decisions improve when the decision maker has accurate information,
  and when does that stop being true?
- How does information reach the decision maker, through which channels, and
  what does each body of theory say is optimal?

It covers three channel types: market signals, lateral communication between
units, and vertical communication up and down a hierarchy. Each source's
status is marked in the [sources](#sources) list. A source marked *verified*
had its publication details and main result confirmed against an abstract or
publisher page on October 29, 2026. Nobody has read the full texts yet.

## Summary

The literature agrees on one point and disagrees on everything else.

The point of agreement: for a single decision maker, more accurate information
never makes a decision worse. Every complication comes from three facts that
break that clean result in an organization:

- Information is costly to produce, to send, and to absorb.
- The people who hold information often want different outcomes from the
  people who decide, so they shade what they report.
- Units depend on each other, so a decision that's right locally can be wrong
  for the whole.

No source identifies one optimal channel. Each identifies the conditions under
which one channel beats another. Market signals win when units are separable
and goods are priceable. Lateral communication wins when units depend on each
other and their interests are close. Vertical reporting wins when coordination
matters most and an independent center exists. Delegation wins when the
holder of the information has a modest bias. The charter framework's
[escalation](../site/content/terms/escalation.mdoc) rule is one choice among
these, and the literature supplies the conditions under which it's the right
one.

## Accurate information and decision quality

This section covers the theory of why information improves decisions, and
where the improvement stops.

### The value of information to one decision maker

Blackwell (1951, 1953) gave the foundational result. One information source,
which he called an *experiment*, is more informative than another if the
second is a garbled version of the first. Blackwell proved that a more
informative source is worth at least as much to every decision maker, for
every decision problem and every set of preferences. This result is the
formal basis for the intuition behind informational adjacency.

The result has limits:

- It ranks only sources where one is a garbling of the other. Many real
  sources can't be ranked this way.
- It ignores the cost of getting and using the information.
- It holds for one decision maker. In strategic settings, more public
  information can make everyone worse off. Hirshleifer (1971) showed that
  early public information can destroy gains from risk sharing.

### Teams with a common goal

Marschak and Radner (*Economic Theory of Teams*, 1972) extended the question to
a group whose members share one objective but hold different information.
Team theory asks which *information structure*, meaning who observes what and
who tells whom, gives the best decisions net of its cost. Because team members
share the goal, the theory isolates the information problem from the incentive
problem. It's the cleanest model of what a charter would face if members
fully agreed on the charter's objective.

### Attention as the binding constraint

Simon (1971) argued that information consumes the attention of its
recipients, so "a wealth of information creates a poverty of attention." The
cost of information includes the recipient's time to absorb it, not only the
cost to produce and send it. Radner (1993) and Bolton and Dewatripont (1994)
formalized the point. They model managers as processors with limited
capacity, and they derive the network shape that minimizes processing delay.
Both find that hierarchies arise because processing is costly, not because
superiors know more.

The consequence for the framework: past some point, more information makes
decisions worse, because the decision maker can't absorb it in time. Accurate
information helps only in a form the decision maker can use.

### Ambiguity as well as shortage

Daft and Lengel (1986) separated two problems:

- *Uncertainty* is a shortage of data. More data solves it.
- *Equivocality* is disagreement or confusion about what the data means. More
  data doesn't solve it. Discussion through rich media, such as meetings,
  does.

They argued that organizations more often suffer from equivocality than from
a lack of data. This distinction bears on the charter framework, because a
charter's [action situation](../site/content/terms/action-situation.mdoc)
assumes that players, preferences, and outcomes can be specified. Where the
members disagree about what the situation even is, the problem is
equivocality, and specification has to come after deliberation, not before.

### Accurate information isn't free

Grossman and Stiglitz (1980) showed that prices can't reflect all available
information. If they did, nobody would gain from gathering information, so
nobody would gather it. In equilibrium, prices are partly informative, and
informed traders earn just enough to cover the cost of being informed.

The general lesson: any channel that aggregates information has to pay the
people who produce it. A charter that wants accurate signals from its members
needs a reward for providing them. The author's earlier position, that each
charter engineers its signal toward maximum truthful expression, is
consistent with this result. Grossman and Stiglitz add that full accuracy is
out of reach. The charter chooses how much accuracy to pay for.

## Channels of communication

This section covers each channel type, what theory says it does well, and
what it says is optimal.

### Market signals and prices

Hayek (1945) argued that the price system carries the information each person
needs about distant changes, without anyone needing to know the causes. A
price rise tells a user to economize, whatever caused the scarcity.

Mechanism design later made the argument exact. Hurwicz (1960) built a
framework in which a resource allocation process is a system of messages, so
markets and central planning become members of one class of mechanisms that
can be compared. Mount and Reiter (1974) and Jordan (1982) used it to show
that the competitive price mechanism needs the smallest message space of any
decentralized mechanism that reaches efficient allocations in exchange
economies. Jordan showed it's the only such mechanism under his conditions.

This result is the strongest support in the literature for decentralized
decisions coordinated by signals. It has strict conditions: convex
economies, no externalities, and private goods. Calsamiglia (1977), cited in
the efficiency audit, shows that the result fails with increasing returns.

Prediction markets apply the same idea to forecasts instead of allocations.
Wolfers and Zitzewitz (2004) found that market forecasts are usually
reasonably accurate and usually beat moderately sophisticated benchmarks.
They didn't find that markets are perfectly efficient. Futarchy, which the
literature review already lists, builds on this result.

**What this body of theory treats as optimal:** prices, when goods are
separable and excludable and spillovers are small. Outside those conditions,
it doesn't claim optimality.

### Lateral communication between units

Thompson (*Organizations in Action*, 1967) classified how units depend on
each other:

- *Pooled* interdependence: units work separately and contribute to a shared
  result.
- *Sequential* interdependence: one unit's output is the next unit's input.
- *Reciprocal* interdependence: units feed each other's work back and forth.

Thompson matched each type to a coordination method: standardized rules for
pooled, plans for sequential, and mutual adjustment for reciprocal. The
pairing of methods to types is the standard reading of Thompson, but the
searches confirmed only the three types, so the pairing needs a check against
the book.

Lawrence and Lorsch (1967) studied six firms in one industry. They found that
complex environments push departments to differentiate, and that more
differentiation raises the need for integration. The best-performing firms
achieved both. This finding is the empirical version of the charter
framework's tension between many specialized charters and coordination among
them.

Galbraith (1973, 1974) put the choices in one frame. An organization facing
more uncertainty than it can process has four options. It can reduce the
information it needs, by adding slack resources or creating self-contained
units. Or it can raise its processing capacity, by investing in vertical
information systems or creating lateral relations, such as liaison roles,
task forces, and integrators. Self-contained units are Galbraith's version of
decomposition. Lateral relations are the alternative when decomposition isn't
possible.

Two economic models add precision:

- Alonso, Dessein, and Matouschek (2008) found that stronger coordination
  needs improve lateral communication between divisions but worsen vertical
  communication with headquarters. Decentralization with lateral
  communication can be optimal even when coordination matters more than local
  adaptation. Headquarters should decide only when division managers are
  strongly biased and coordination needs are high.
- Dessein and Santos (2006) showed that organizations can coordinate in two
  ways: narrow specialization with good communication, or a fixed plan that
  needs no communication. Heavy specialization leads organizations to ignore
  local knowledge. Better communication technology pushes organizations
  toward adaptiveness.

**What this body of theory treats as optimal:** matching the coordination
method to the type of interdependence. Lateral communication is better than
escalation when interests are close.

### Vertical communication up the hierarchy

Upward reports, surveys, and escalation all send information from the people
who hold it to the people who decide. Theory finds four problems with this
channel.

**Biased reporting.** Crawford and Sobel (1982) modeled a sender who knows the
state and a receiver who acts. When their preferences differ, the sender can
only credibly report a coarse category, not the exact value. The more their
preferences differ, the coarser the report. Dessein (2002) drew the
consequence: a principal often does better to delegate the decision to the
informed agent than to ask for a report, as long as the agent's bias is
modest relative to the principal's uncertainty. Information lost in a biased
report usually costs more than the decision bias of a delegate.

**Influence costs.** Milgrom and Roberts (1988) argued that when a central
decision affects how members fare, members spend effort lobbying to influence
it. Efficient design limits central discretion over decisions that have large
effects on who gets what but small effects on the organization as a whole.

**Silence.** Morrison and Milliken (2000) found that employees often withhold
information about problems, because they believe speaking up is futile or
dangerous. When that belief is shared, a *climate of silence* forms, and the
organization loses the information it most needs to correct errors.

**Structured elicitation.** The Delphi method (Dalkey and Helmer, 1963) gathers
expert judgments through anonymous questionnaires, in rounds, with controlled
feedback between rounds. Anonymity removes the pressure that dominant
participants create in face-to-face meetings. Delphi is the closest
established method to a well-designed upward survey.

Two models describe what a hierarchy does well:

- Garicano (2000) modeled a *knowledge hierarchy*. Frontline workers learn to
  solve common problems, and they pass rare problems up to specialists. This
  model is close to escalation.
- Sah and Stiglitz (1986) compared hierarchies, where a project needs approval
  at every level, with polyarchies, where any one unit can approve it.
  Hierarchies reject more good projects. Polyarchies accept more bad ones.
  Neither is better in general.

**What this body of theory treats as optimal:** delegating when the informed
party's bias is modest, escalating only exceptions, and designing upward
channels with anonymity and protection from retaliation.

### Communication down the hierarchy

Aghion and Tirole (1997) separated *formal authority*, the right to decide,
from *real authority*, effective control. Real authority follows information.
A superior who lacks information rubber-stamps the subordinate's proposal.
Giving subordinates more real authority encourages initiative but costs the
superior control. Overload, urgency, and multiple superiors all shift real
authority downward.

Arrow (*The Limits of Organization*, 1974) argued that organizations develop
internal *codes*, shared vocabularies that make communication inside the
organization cheaper. The cost is that codes make communication with
outsiders harder, and codes are hard to change once set.

**What this body of theory treats as optimal:** downward communication sets
constraints and shared codes, while real authority stays with whoever holds
the information.

## Conditions for each channel

The following table summarizes the conditions under which each channel does
best, according to the sources in this note.

| Channel | Best when | Fails when | Main sources |
|---|---|---|---|
| Prices and markets | Goods are private, economies are convex, spillovers are small | Increasing returns, externalities, public goods | Hayek; Hurwicz; Jordan; Calsamiglia |
| Prediction markets | A forecast has a clear, verifiable outcome | Outcomes are ambiguous or markets are thin | Wolfers and Zitzewitz |
| Delegation without reports | Holder's bias is modest relative to uncertainty | Bias is large | Dessein 2002; Aghion and Tirole |
| Lateral communication | Units depend on each other and interests are close | Units are strongly biased toward themselves | Thompson; Lawrence and Lorsch; Alonso and others |
| Escalation to a center | Coordination matters most, units are biased, center is independent | The center lacks information or invites lobbying | Alonso and others; Garicano; Milgrom and Roberts |
| Structured upward surveys | Judgment is dispersed and speaking up is risky | Answers aren't rewarded or protected | Dalkey and Helmer; Morrison and Milliken; Grossman and Stiglitz |
| Fixed plans and rules | Coordination matters and communication is expensive | The environment changes fast | Dessein and Santos; Thompson |

## Implications for the charter framework

The surveyed theory bears on the framework in six places:

- **Escalation needs a threshold.** Alonso, Dessein, and Matouschek supply one:
  escalate when the children's bias and the coordination need are both high.
  Otherwise, siblings coordinate laterally. The framework currently escalates
  every spillover to the parent, and it has no lateral channel between
  siblings.
- **The parent is an independent center only if it isn't its children.** Alonso
  and others find that divisions share more with an independent headquarters
  than with each other. A parent whose decision makers are the children's
  delegates loses that advantage and invites the influence costs that Milgrom
  and Roberts describe.
- **Delegation often beats reporting.** Dessein's result supports the
  framework's default of local decisions, with one condition: the local
  charter's bias toward itself must be modest relative to what it knows. The
  [factional interest](../site/content/terms/factional-interest.mdoc) entry
  is where that bias lives.
- **Prices are the cheapest channel where they apply.** For spillovers that can
  be priced, a parent can run a market, such as tradable permits, instead of
  setting constraints. This answers the efficiency audit's question of how a
  parent learns spillover costs.
- **Upward channels need design.** The
  [measurement mechanism](../site/content/terms/measurement-mechanism.mdoc)
  and any member surveys should use what Delphi and the silence literature
  teach: anonymity, rounds with feedback, protection, and a reward for
  accurate reporting.
- **Anonymity can help.** Delphi's anonymity and Crawford and Sobel's coarse
  reports both suggest that full transparency of positions isn't always best.
  This finding agrees with the existing decision to keep
  [obscured consensus](../site/content/terms/obscured-consensus.mdoc) about
  transparency of the problem, not of positions.

## Effect on the efficiency audit

The searches confirmed the publication details and main results of six
sources that the efficiency audit cited from memory: Jensen and Meckling
(1992), Mookherjee (2006), Aghion and Tirole (1997), Dessein (2002), Alonso,
Dessein, and Matouschek (2008), and Garicano (2000).

One correction applies. The audit says that Mookherjee reviews the result that
the revelation principle lets a central mechanism do at least as well as
decentralization. The abstract confirms that the review covers communication
costs and finds that the literature studies the costs of delegation more than
its benefits. It doesn't confirm the revelation principle point. That point is
a standard result in the literature, but its attribution to Mookherjee needs a
check against the full text.

Jensen and Meckling's trade-off is confirmed in Jensen's own later
description: information costs fall as decision rights move toward specific
knowledge, control costs rise, and the total is lowest where they balance.

## Sources

The status of each source is one of the following:

- *Verified*: publication details and main result confirmed against an
  abstract or publisher page.
- *Partly verified*: publication details confirmed, but a specific claim in
  this note isn't.
- *Unverified*: cited from memory.

| Source | Status |
|---|---|
| Blackwell, "Equivalent Comparisons of Experiments," *Annals of Mathematical Statistics* 24(2), 1953 | [Verified](https://en.wikipedia.org/wiki/Blackwell%27s_informativeness_theorem), secondary source only |
| Hirshleifer, "The Private and Social Value of Information and the Reward to Inventive Activity," *American Economic Review*, 1971 | Unverified |
| Marschak and Radner, *Economic Theory of Teams*, 1972 | Unverified |
| Simon, "Designing Organizations for an Information-Rich World," in Greenberger, ed., *Computers, Communications, and the Public Interest*, 1971 | [Verified](https://conversableeconomist.com/2015/08/17/economics-of-information-overload-thoughts-from-herb-simon/), secondary source only |
| Radner, "The Organization of Decentralized Information Processing," *Econometrica* 61(5), 1993 | [Verified](https://www.econometricsociety.org/publications/econometrica/1993/09/01/organization-decentralized-information-processing) |
| Bolton and Dewatripont, "The Firm as a Communication Network," *Quarterly Journal of Economics* 109(4), 1994 | [Verified](https://econpapers.repec.org/RePEc:oup:qjecon:v:109:y:1994:i:4:p:809-839.) |
| Daft and Lengel, "Organizational Information Requirements, Media Richness and Structural Design," *Management Science* 32(5), 1986 | [Verified](https://ideas.repec.org/a/inm/ormnsc/v32y1986i5p554-571.html) |
| Grossman and Stiglitz, "On the Impossibility of Informationally Efficient Markets," *American Economic Review* 70(3), 1980 | [Verified](https://econpapers.repec.org/RePEc:aea:aecrev:v:70:y:1980:i:3:p:393-408) |
| Hayek, "The Use of Knowledge in Society," *American Economic Review*, 1945 | Unverified |
| Hurwicz, "Optimality and Informational Efficiency in Resource Allocation Processes," in Arrow, Karlin, and Suppes, eds., *Mathematical Methods in the Social Sciences*, 1960 | [Verified](https://www.cambridge.org/core/books/studies-in-resource-allocation-processes/optimality-and-informational-efficiency-in-resource-allocation-processes/E446062E1A42E3BB898B159AAF6DCDAA); sources disagree on 1959 or 1960 |
| Mount and Reiter, "The Informational Size of Message Spaces," *Journal of Economic Theory*, 1974 | [Partly verified](https://www.Gwern.net/doc/economics/mechanism-design/1974-mount.pdf); title not confirmed |
| Jordan, "The Competitive Allocation Process Is Informationally Efficient Uniquely," *Journal of Economic Theory*, 1982 | [Partly verified](https://www.Gwern.net/doc/economics/mechanism-design/1982-jordan.pdf); title not confirmed |
| Wolfers and Zitzewitz, "Prediction Markets," *Journal of Economic Perspectives* 18(2), 2004 | [Verified](https://econpapers.repec.org/RePEc:aea:jecper:v:18:y:2004:i:2:p:107-126) |
| Thompson, *Organizations in Action*, 1967 | [Partly verified](https://www.nationalacademies.org/read/2135/chapter/4); pairing of coordination methods not confirmed |
| Lawrence and Lorsch, "Differentiation and Integration in Complex Organizations," *Administrative Science Quarterly* 12(1), 1967 | [Verified](https://www.talkingaboutorganizations.com/e16/) |
| Galbraith, "Organization Design: An Information Processing View," *Interfaces* 4(3), 1974 | [Verified](https://ideas.repec.org/a/inm/orinte/v4y1974i3p28-36.html) |
| Galbraith, *Designing Complex Organizations*, 1973 | Unverified |
| Alonso, Dessein, and Matouschek, "When Does Coordination Require Centralization?", *American Economic Review* 98(1), 2008 | [Verified](https://researchonline.lse.ac.uk/id/eprint/58664) |
| Dessein and Santos, "Adaptive Organizations," *Journal of Political Economy* 114(5), 2006 | [Verified](https://econpapers.repec.org/RePEc:ucp:jpolec:v:114:y:2006:i:5:p:956-985) |
| Crawford and Sobel, "Strategic Information Transmission," *Econometrica* 50(6), 1982 | [Verified](https://www.econometricsociety.org/publications/econometrica/1982/11/01/Strategic-Information-Transmission) |
| Dessein, "Authority and Communication in Organizations," *Review of Economic Studies* 69(4), 2002 | [Verified](https://ideas.repec.org/a/oup/restud/v69y2002i4p811-838.html) |
| Milgrom and Roberts, "An Economic Approach to Influence Activities in Organizations," *American Journal of Sociology* 94, 1988 | [Partly verified](https://gsb.stanford.edu/faculty-research/publications/economic-approach-influence-activities-organizations); claim taken from Milgrom's related *Journal of Political Economy* paper of the same year |
| Morrison and Milliken, "Organizational Silence," *Academy of Management Review* 25(4), 2000 | [Verified](https://scilit.com/publications/e5857d26da11d59f723e49aed77b7d09) |
| Dalkey and Helmer, "An Experimental Application of the Delphi Method to the Use of Experts," *Management Science* 9(3), 1963 | [Verified](https://ideas.repec.org/a/inm/ormnsc/v9y1963i3p458-467.html) |
| Garicano, "Hierarchies and the Organization of Knowledge in Production," *Journal of Political Economy* 108(5), 2000 | [Verified](https://researchonline.lse.ac.uk/id/eprint/25582) |
| Sah and Stiglitz, "The Architecture of Economic Systems: Hierarchies and Polyarchies," *American Economic Review* 76(4), 1986 | [Verified](https://econpapers.repec.org/RePEc:aea:aecrev:v:76:y:1986:i:4:p:716-27) |
| Aghion and Tirole, "Formal and Real Authority in Organizations," *Journal of Political Economy* 105(1), 1997 | [Verified](https://discovery.ucl.ac.uk/17678/) |
| Arrow, *The Limits of Organization*, 1974 | [Verified](https://ci.nii.ac.jp/ncid/BA01081205) |
| Jensen and Meckling, "Specific and General Knowledge, and Organizational Structure," in Werin and Wijkander, eds., *Contract Economics*, 1992 | [Verified](https://ucema.edu.ar/u/je49/organizacion/Jensen_SpecificK.pdf) |
| Mookherjee, "Decentralization, Hierarchies, and Incentives," *Journal of Economic Literature* 44(2), 2006 | [Partly verified](https://econpapers.repec.org/RePEc:aea:jeclit:v:44:y:2006:i:2:p:367-390); revelation principle claim not confirmed |
