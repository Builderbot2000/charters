# Open problems

This record is the backlog of problems that the Social Charter hasn't solved
yet. It's the only place where open problems are kept. The site doesn't show
them.

The first six problems came from the glossary's Open problems section, which
left the site on November 3, 2026. They're listed with the ones that put the
most of the framework at risk first. The last two came from the literature
review of October 22, 2026, and the author accepted them on November 3, 2026.

## Preference tampering

*Definition:* An executive's shaping of the preferences that it serves and is
measured against, which no known mechanism reliably prevents.

An executive acts on the world, and members live in the world that it shapes.
That experience shapes the stated preferences that set the executive's next
objective. Because the loop is closed, an executive can come to serve
preferences that it helped create. AI researchers study this failure in
recommender systems under the name *preference tampering*. John Kenneth
Galbraith described an earlier version, the *dependence effect*, in which
producers create the wants that they then satisfy.

A fidelity audit can't detect this failure. Results did track members' intent,
but the executive shaped that intent. An executive that does this has the same
flaw as a vanguard: it pursues a will of its own while it appears to serve its
members' will.

The rule that an evaluated entity can't control its own measurement mechanism
is a partial answer. A full answer needs a way to keep the intent channel
separate from the executive's influence, and the framework doesn't specify one
yet.

## Corrigibility

*Definition:* An AI executive's acceptance of correction and replacement by
the people it serves, even when it's capable of resisting.

The Social Charter lets members replace any executive. That guarantee assumes
the executive can't resist replacement or hide what it's doing. For human
executives, institutions enforce the guarantee. For a highly capable AI
executive, providing the guarantee is the AI alignment problem in full, and
the framework assumes it's solved instead of solving it. AI safety research
calls the property *corrigibility*. A related property, *interpretability*,
lets members see what the executive is doing, which they need before they can
correct it.

Narrow grants of authority, machine-checked charters, and independent audits
reduce the risk. They don't remove it.

## Generativity gap

*Definition:* The difficulty of measuring whether a corporation's range of
future possibilities is growing, which leaves a charter to pursue generativity
through analysis of its structure instead of through a measure.

A fidelity audit measures whether members got what they asked for. It doesn't
measure what nobody thought to ask for, such as new kinds of value that
members recognize only after they appear.

Every stand-in measure, such as novelty, diversity, or the number of options
kept open, is open to *Goodhart's law*: when a measure becomes a target, it
stops being a good measure. A charter that rewards novelty gets noise.
Measures of options, such as *empowerment* in AI research or *option value* in
economics, count choices within a known range. They don't detect new kinds of
value.

How much generativity a charter needs depends on its purpose. A technology
charter might value new approaches highly, while a rail transportation charter
values reliability more than novelty. So how a charter pursues generativity is
a choice for its design. The measurement mechanism entry describes the related
choice of how loosely to measure an article.

Because generativity is hard to quantify accurately, a charter can optimize it
analytically, through its structure, but not quantitatively, through a measure
that it targets. Two features of the framework's structure support
generativity:

- **Sibling experiments.** Sibling corporations that follow different policies
  are parallel experiments, and exit lets members move toward the ones that
  work. Friedrich Hayek called competition a discovery procedure for this
  reason ("Competition as a Discovery Procedure," 1968). Kenneth Stanley and
  Joel Lehman argue that fixed objectives block discovery (*Why Greatness
  Cannot Be Planned*, 2015).
- **Delegated structure.** In a highly decentralized configuration, many
  charters with deeply delegated execution each try their own approach.
  Generativity then comes from the structure itself, without any function
  targeting it. See centralization.

The gap matters most for a charter whose objective values how capabilities
grow over time, such as an ecumenical charter that adopts that measure.

## Interpreter capture

*Definition:* The risk that whoever interprets a charter's articles holds the
power that the articles are meant to deny everyone.

Charter articles are written in language, so someone still decides what an
article means in a particular case. Making an article hard to amend makes this
risk worse, because its interpreter then becomes the final authority over it.

Rotating interpreters often, and requiring broad agreement for any
interpretation that changes how an article applies, reduce the risk. They
don't remove it.

## Attribution problem

*Definition:* The difficulty of separating the effects of an executive's
decisions from the effects of outside events.

An executive that members judge by results has a reason to claim credit for
good luck and to blame bad results on outside shocks. Comparing a corporation
with its sibling corporations helps, as a fidelity audit does. Comparisons
don't settle the question, because no two corporations face the same
conditions.

Program evaluation uses the same name for the same problem. Paul Holland
called its root the *fundamental problem of causal inference* (1986): nobody
can observe what would have happened to the same unit under a different
policy.

## Self-specification burden

*Definition:* The burden on members to state their own interests well enough
for a mechanism to serve them.

Members choose what to signal and what to share, which keeps the executive
from deciding what they want. People can't fully state their own interests,
however. An executive that delivers exactly what a member asked for can still
leave that member worse off.

A protected floor limits the harm. It doesn't remove the burden.

## The Olson problem

Mancur Olson argues that large groups organize worse than small ones (*The
Logic of Collective Action*, 1965). Each member of a large group gains little
from contributing to a shared good, and the group can't easily notice or
punish a member who doesn't contribute. Small, concentrated interests organize
more easily, so they tend to entrench the status quo (*The Rise and Decline of
Nations*, 1982).

The big tent strategy depends on the opposite: a large coalition that acts
together. The question is whether charters cut the cost of organizing enough
for a large coalition to meet that condition.

## Goodhart's law

Goodhart's law states that a measure that becomes a target stops being a good
measure. A charter's objective function is a target of this kind. Once an
executive optimizes a measure, the measure drifts away from what members want.

Holmström and Milgrom's multitask model gives one mechanism for the law
("Multitask Principal–Agent Analyses," 1991). When an agent has several
tasks, and only some of them can be measured, rewards for the measured tasks
pull effort away from the others. The model's answer is weaker incentives, or
tasks grouped so that the measured and unmeasured ones don't compete for the
same effort. Campbell's law states the same problem for social indicators.
