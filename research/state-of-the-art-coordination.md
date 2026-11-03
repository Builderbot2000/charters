# Current research on communication and coordination

This note covers research from 2020 to 2026 on the cost of communication in
organizations, now that large-scale data processing and language models are
available. It follows [toward a unified cost of communication](communication-cost-theory.md),
which covers the earlier theory, and it uses that note's four parts of the
cost: volume, fidelity, honesty, and capacity.

Much of this work is recent, and some of it is in preprints. Each source's
status is in the [sources](#sources) list. *Preprint* means the work wasn't
confirmed as peer reviewed when this note was written, on October 29, 2026.

## Summary

Recent research hasn't produced the unified theory either. It has changed
which parts of the cost matter most:

- **Volume and capacity costs are falling fast.** Language models compress
  the views of many people into a few statements, gather preferences with far
  fewer questions, and pass expert knowledge to novices. The cost that made
  hierarchies necessary is shrinking.
- **Honesty is now the binding cost.** Market manipulation, concentrated voting
  power, and failures between AI agents persist even when communication is
  cheap. Most failures of AI agent systems come from design and
  misalignment between agents, not from weak models.
- **The four parts can now be measured.** Digital traces of email and chat,
  on-chain voting records, and AI agent systems give data for each part of
  the cost. The earlier cybernetic attempt failed partly because its measures
  couldn't be computed. That obstacle is mostly gone.
- **AI mediators are a new kind of intermediary.** A model that summarizes,
  mediates, or ranks views is a node with its own possible bias. The framework
  already names the risk as [interpreter capture](../site/content/terms/interpreter-capture.mdoc).

For the framework, the shift means the model should put most of its weight
on honesty and bias, and less on volume.

## Compressing many views at low cost

This section covers tools that cut the volume cost of collective decisions.

**AI mediation of deliberation.** Tessler and others (*Science*, 2024) built
the *Habermas Machine*, a pair of language models that drafts group
statements from participants' views and revises them after critique. In
experiments with 5,734 UK participants, including a demographically
representative sample, groups preferred the AI's statements to those of
human mediators. The AI's statements left groups less divided and didn't
sideline minority views. Critics argue that maximizing agreement reduces
deliberation to wording.

**Generative social choice.** Fish, Gölz, Parkes, Procaccia, Rusak, Shapira,
and Wüthrich (2023 to 2025) combine social choice theory with language
models. The method turns free-text opinions into a short slate of statements
with a guarantee of *proportional representation*: every large enough group
finds a statement that represents it. In a test on abortion policy with 100
US residents, most participants felt well represented. Boehmer, Fish, and
Procaccia (ICML 2025) extended the method to limits on slate length.

**Preference gathering with fewer questions.** Nisan and Segal (2006) showed
that efficient allocation of bundles can require exponential communication.
Two 2025 preprints use language models as proxies for participants:

- Soumalias, Jiang, Zhu, Curry, Seuken, and Parkes used language models to
  elicit preferences for course allocation in one pass, instead of many rounds
  of questions. They report efficiency gains of up to 20 percent.
- Huang, Marmolejo-Cossío, Lock, and Parkes used language model proxies in a
  combinatorial auction and reached near-efficient outcomes with up to five
  times fewer queries than the standard method.

The exponential bound still holds in the worst case. In practice, proxies
cut the cost by predicting answers instead of asking for each one.

**Public input at scale.** Collective Constitutional AI (Huang, Siddarth, and
others, 2024) gathered rules for a chatbot from about 1,000 Americans through
the Polis platform, with 1,127 statements and 38,252 votes. Anthropic then
trained a model on the resulting public constitution.

**Bridging-based ranking.** Community Notes on X uses matrix factorization to
publish only the notes that people with opposing viewpoints both rate as
helpful (Wojcik and others, 2022). Ovadya and Thorburn (2023) generalized the
idea as *bridging systems* for ranking and governance. A 2026 preprint finds
that the deployed model uses only one dimension of viewpoint, which limits
how many kinds of disagreement it can detect.

## AI in hierarchies

This section covers how AI changes the structure that Garicano's knowledge
hierarchy describes.

**Theory.** Ide and Talamàs (2024 to 2025) extended Garicano's model with AI.
AI that works on its own helps the most knowledgeable people most, and makes
firms larger, more productive, and more decentralized. AI that only assists
helps the least knowledgeable most. A 2025 preprint, "Generative AI and
Organizational Structure in the Knowledge Economy," finds that the number of
people each manager oversees first falls and then rises as AI improves, so
flattening isn't immediate.

**Field evidence.** Two studies measure the effect directly:

- Brynjolfsson, Li, and Raymond (*Quarterly Journal of Economics*, 2025)
  studied about 5,000 customer-support agents. An AI assistant raised
  productivity by 14 percent on average and by 34 percent for novices. The
  evidence suggests that the assistant spread the know-how of the best agents
  to new ones, which is knowledge that used to travel slowly through
  experience.
- Dell'Acqua and others (2025), in a field experiment with 776 professionals
  at Procter & Gamble, found that individuals using AI matched teams without
  AI. AI users also produced proposals that balanced technical and commercial
  concerns, whatever their own department. AI did some of the work that
  communication across departments used to do.

These results bear on the framework's scale argument. If AI carries knowledge
between units cheaply, smaller charters lose less from being small, and the
case for decentralization gets stronger.

## Measuring communication from data

This section covers work that measures the parts of the cost from digital
records.

**Digital traces in firms.** Yang and others (*Nature Human Behaviour*, 2022)
used email, calendar, chat, and call records of 61,182 Microsoft employees.
Firm-wide remote work made collaboration networks more static and siloed,
with fewer bridges between groups. Communication shifted from synchronous to
asynchronous. The authors expect these changes to make it harder to share new
information across the network. The study is an example of the network model
measured at scale.

**Adaptive networks.** Almaatouq and others (*PNAS*, 2020) ran experiments in
which groups could rewire who they listened to. Groups that rewired their
links produced better estimates than their best member. The network shifted
weight toward accurate members, and accurate members resisted social
influence.

**On-chain governance.** Decentralized autonomous organizations (DAOs) record
every vote, which makes them the closest running experiment to a charter
graph. Recent studies find:

- High concentration of voting power. One 2025 study finds that the top tenth
  of voters holds about 76 percent of realized voting power in one protocol.
- Low participation. Most token holders don't vote.
- Delegation that often doesn't match what token holders say they want, with
  interfaces that worsen concentration (Messias and Ide, 2025 preprint).
- A capacity limit. Once the number of proposals passes a threshold, active
  voters respond less to each one, so concentration can arise from workload
  alone (Tchuente, 2026 preprint).

**Market signals without an anchor.** A Columbia study (2025, not peer
reviewed) used network clustering on on-chain data to estimate that about 25
percent of Polymarket's trading volume over three years was wash trading,
peaking near 60 percent of weekly volume in December 2024. The finding
supports the author's point that a signal without an anchor in real use
loses accuracy.

## Artificial organizations as test beds

This section covers systems of AI agents, which let researchers compare
organizational structures cheaply.

**Structure and resilience.** Huang and others (ICML 2025) tested systems of
language model agents with one faulty agent. A hierarchical structure lost
5.5 percent of performance, compared with 10.5 and 23.7 percent for the two
flatter structures. Letting agents challenge each other's output, or adding
an inspector agent, recovered most of the errors.

**Causes of failure.** Cemri and others (NeurIPS 2025) analyzed failures in
seven multi-agent frameworks and built a taxonomy of 14 failure modes in three
groups: system design, misalignment between agents, and task verification.
Misalignment includes ignoring another agent's input, withholding
information, and failing to ask for clarification. The authors find that
failures come mainly from design and misalignment, not from the limits of the
underlying models. These are the same failures that the organizational
literature describes in human firms.

**Strategic communication by AI.** Several 2026 preprints test language models
as senders and receivers in Crawford–Sobel games and Bayesian persuasion.
Early results suggest that models trained for persuasion get much better at
it, and that verification budgets help receivers resist. These are early
results and not yet peer reviewed.

**Validity.** Larooij and Törnberg (*Artificial Intelligence Review*, 2025)
reviewed social simulations built from language model agents. Validation is
the central weakness. Many studies check only whether agents seem
believable, and none they reviewed showed operational validity. The PIMMUR
principles (2025 preprint) propose standards for such experiments.

## Implications for the framework

The recent work bears on the framework in five places:

- **Weight the model toward honesty.** Volume and capacity costs are falling.
  Concentration, manipulation, and misalignment aren't. The communication
  cost model should treat bias at each node as the main term.
- **Treat AI mediators as nodes.** A model that drafts a charter's
  statements, ranks proposals, or acts as a member's proxy is an
  intermediary. Its bias, and who controls it, belongs in the
  [interpreter capture](../site/content/terms/interpreter-capture.mdoc) and
  [vanguard interest](../site/content/terms/vanguard-interest.mdoc) entries.
- **Use proportional representation guarantees.** Generative social choice
  gives a charter a tested way to turn members' free-text views into a short
  set of positions, with a guarantee that each large enough group is
  represented. It fits the specify step of the Social Charter.
- **Plan for workload limits.** The DAO evidence shows concentration arising
  from too many proposals for members to follow. A charter needs a limit on
  its agenda or a delegation rule that tracks what members actually want.
- **Build the verification study on data, with care.** DAO records provide
  real voting data for a graph of governed units. Agent simulations allow
  cheap comparison of charter structures, but their results need validation
  against human data, following Larooij and Törnberg.

## Sources

| Source | Status |
|---|---|
| Tessler and others, "AI Can Help Humans Find Common Ground in Democratic Deliberation," *Science* 386(6719), 2024 | [Verified](https://www.technologyreview.com/2024/10/17/1105810/ai-could-help-people-find-common-ground-during-deliberations/) |
| Fish, Gölz, Parkes, Procaccia, Rusak, Shapira, and Wüthrich, "Generative Social Choice," arXiv 2309.01291, 2023 to 2025 | [Verified](https://arxiv.org/abs/2309.01291v2); figures differ across versions |
| Boehmer, Fish, and Procaccia, "Generative Social Choice: The Next Generation," ICML 2025 | [Verified](https://mlanthology.org/icml/2025/boehmer2025icml-generative) |
| Soumalias, Jiang, Zhu, Curry, Seuken, and Parkes, "LLM-Powered Preference Elicitation in Combinatorial Assignment," arXiv 2502.10308, 2025 | [Preprint](https://arxiv.org/abs/2502.10308) |
| Huang, Marmolejo-Cossío, Lock, and Parkes, "Accelerated Preference Elicitation with LLM-Based Proxies," arXiv 2501.14625, 2025 | [Preprint](https://arxiv.org/pdf/2501.14625) |
| Huang, Siddarth, and others, "Collective Constitutional AI," arXiv 2406.07814, 2024 | [Verified](https://www.anthropic.com/research/collective-constitutional-ai-aligning-a-language-model-with-public-input); venue not confirmed |
| Wojcik and others, "Birdwatch," arXiv 2210.15723, 2022 | [Verified](https://www.emergentmind.com/papers/2210.15723) |
| Ovadya and Thorburn, "Bridging Systems," arXiv 2301.09976, 2023 | [Verified](https://arxiv.org/pdf/2301.09976) |
| "Two Fault Lines: Latent Polarity Geometry in X Community Notes," arXiv 2609.21496, 2026 | [Preprint](https://arxiv.org/pdf/2609.21496) |
| Ide and Talamàs, "Artificial Intelligence in the Knowledge Economy," arXiv 2312.05481 | [Verified](https://arxiv.org/pdf/2312.05481); findings differ across versions |
| "Generative AI and Organizational Structure in the Knowledge Economy," arXiv 2506.00532, 2025 | [Preprint](https://arxiv.org/pdf/2506.00532) |
| Brynjolfsson, Li, and Raymond, "Generative AI at Work," *Quarterly Journal of Economics* 140(2), 2025 | [Verified](https://www.nber.org/papers/w31161) |
| Dell'Acqua and others, "The Cybernetic Teammate," NBER Working Paper 33641, 2025 | [Verified](https://www.nber.org/papers/w33641); an *Organization Science* version is listed |
| Yang and others, "The Effects of Remote Work on Collaboration Among Information Workers," *Nature Human Behaviour* 6, 2022 | [Verified](https://www.pubmed.gov/34504299/) |
| Almaatouq and others, "Adaptive Social Networks Promote the Wisdom of Crowds," *PNAS* 117(21), 2020 | [Verified](https://dspace.mit.edu/handle/1721.1/130287) |
| Messias and Ide, "Fairness in Token Delegation," arXiv 2510.05830, 2025 | [Preprint](https://arxiv.org/html/2510.05830v1) |
| Tchuente, DAO governance capacity limits, arXiv 2603.11222, 2026 | [Preprint](https://arxiv.org/pdf/2603.11222) |
| Uniswap-style voting concentration study, ABR 2025, Fudan University | [Partly verified](https://www.fdsm.fudan.edu.cn/abr2025/ABR_2025_010_full%20paper.pdf); authors not recorded |
| Columbia University, "Network-Based Detection of Wash Trading," 2025 | [Not peer reviewed](https://fortune.com/2025/11/07/polymarket-wash-trading-inflated-prediction-markets-columbia-research); news coverage only |
| Huang and others, "On the Resilience of LLM-Based Multi-Agent Collaboration with Faulty Agents," ICML 2025 | [Verified](https://proceedings.mlr.press/v267/huang25ay.html) |
| Cemri and others, "Why Do Multi-Agent LLM Systems Fail?", NeurIPS 2025 | [Verified](https://mlanthology.org/neurips/2025/cemri2025neurips-multiagent) |
| LLM cheap talk and persuasion preprints, arXiv 2509.22989, 2602.00970, 2606.01456 | Preprints |
| Larooij and Törnberg, "Validation Is the Central Challenge for Generative Social Simulation," *Artificial Intelligence Review*, 2025 | [Verified](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12627210/) |
| "The PIMMUR Principles," arXiv 2509.18052, 2025 | [Preprint](https://arxiv.org/html/2509.18052v1) |
