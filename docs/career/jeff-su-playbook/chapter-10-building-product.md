# Chapter 10 — Building Product (Michael Seibel, Y Combinator)

Define the problem and the first customer before the solution, ship a quick MVP to desperate users, measure what they do, and iterate on a short, written, low-ego cycle.

*Source note: This chapter is based on Michael Seibel’s Y Combinator lecture [“Building Product”](https://www.youtube.com/watch?v=C27RVio2rOs), uploaded 2018-09-05. It is a separate source from Jeff Su’s videos. Seibel addresses founders; the career applications in §10.9 are editorial analogies.*

## 10.1 Why Justin.tv could break the rules

Justin.tv and Twitch broke many of the rules in this lecture. Three conditions kept them alive; without any one "we would have died".

| Condition | What it looked like |
|---|---|
| **An extremely technical founding team** | The founders "were not intimidated by any technical challenge". |
| **Low burn** | Four founders aged 21 to 23 shared a $2,500-a-month apartment and took $500 a month each, which gave them "a lot of ability to screw up and make mistakes". |
| **Ego tied to the startup** | The company was not "a cool resume item" but the only thing they had done on their own, so they "couldn't really conceive of giving up". |

In the Q&A he adds that low burn would be much harder now, with a family, apartment and car. His personal observation for well-paid young employees: don't level up your lifestyle, because mortgages, cars and vacations make a startup "a lot harder", and "I just know a lot of people who never could come back from that".

![A crowded set of feature ideas narrows to one customer problem, a small prototype, and a person using it.](/assets/career/jeff-su-playbook/chapter-10/01-problem-customer-mvp.webp)

*Define the customer and problem before building the smallest product that can test them.*

## 10.2 State the problem before the idea

Founders usually pitch what they will build, not what should be different once it works. "If you don't know the problem you can't know whether you solved it." When Justin broadcast himself 24/7 as entertainment, the test was whether anyone watched; no one did. After the pivot to an open platform, the test became whether anyone broadcast.

Seibel's four questions about the problem: **Can you state it clearly?** In one or two sentences; "if … you find yourself delivering an essay you're doing it wrong." **Have you experienced it?** Not required, but a good sign. **Can you define it narrowly?** You can't serve everyone first; early Justin.tv broadcasters needed a laptop, a good connection and a webcam. **Is it solvable?** Narrowing can show that it isn't.

**Poppy**, "essentially Uber for babysitting", shows the last test. Narrowed to infants, parents need very high skill, but the Uber model "only works because there's a whole bunch of basically replaceable people with a common skill", and skilled infant carers already have well-paid nanny jobs. The problem "might not be solvable".

## 10.3 Know your customer

"You don't understand the problem you're solving until you understand who you're solving it for." "Everyone" is not an answer, and you shouldn't build "as if [you] were writing a creative novel": "you can talk to your users, you just have to figure out who they are".

**Frequency.** A satisfied car buyer returns after about seven years, so many car sites are really built for the dealer: "every day the dealership has to hit their numbers". Apps you rarely use sit in a back-page folder: "hopefully they don't need you to use them very often or else they're probably not very good businesses."

**Intensity.** Infrequent, low-intensity problems make it hard to get customers "even interested in talking to you". Getting around is intense enough that people buy a $20,000 car for it, and they do it most days. The pre-Uber taxi market might look "not that big", but high intensity and frequency suggest "there's probably a good business here". He makes no claim about how large ride-hailing became.

**Willingness to pay.** Many founders assume they must start free. Seibel says to make the product "a little bit harder" to use and see whether people use it anyway: someone with an intense problem will see $100 as a deal, while at $0 you attract people just trying it out, and "oftentimes they'll lead you astray". Starting with a price "is almost always better than starting free". If you must start free, listen to users "in production for real-world purposes as opposed to the hobbyists"; he has seen companies "hijacked by bad customers". Staying free is fine if you never plan to charge; otherwise charge as soon as possible.

**Reachability.** A US B2B company emailed about a thousand LinkedIn-sourced buyers a week; a batchmate in China, where business email outreach wasn't established, had to invent other channels. The extreme case is an app delivering water in the Sahara to people who must first download it. "If your customers are ridiculously hard to find you better have a solution for that upfront."

## 10.4 Build a quick MVP and give it to desperate users

**Check that the MVP solves the problem.** An MVP can drift until it "doesn't actually do the thing that you promised"; the answers from 10.2 and 10.3 are the check, and a two-week limit keeps you on task. Products are not art: "If users don't find products useful then the products are by definition not useful."

**Start with the easy desperate.** An MVP is bad by definition, so skip the impressive customers and find those most desperate to use a bad product. A company that keeps you in a six-month conversation over $1,000-a-month software is "not a desperate company, move on". His test: "whose business is gonna go out of business without using you?"

**Ignore friends and investors as feedback.** When Socialcam sold, Reddit's CEO said, "thank God now I can delete this app from my phone." Friends and investors usually don't have your problem and "will lead you 100 percent astray out of good intentions".

**Fire bad customers if needed.** At Exec, Justin's assistant company, one customer critiqued every piece of fruit an assistant picked. After refunding them four times for four tasks, Justin fired them when they came back for a fifth.

**Structure discounts; don't discount out of fear.** Seibel's default is no discount. His caveat draws on a YC talk by Parker of Zenefits, and he illustrates the pitch himself: "let's just say AWS has given us a discount, who knows why"; our bill is 40% lower, so we can pass some on for 30 days, and "I would just hate if you bought it on the 31st day." The AWS reason is hypothetical; the lesson is that a deadline tied to a third-party benefit speeds the sale. Parker priced 15% higher to make room. The wrong way is not charging because "I'm afraid no one's gonna use it." In hardware pre-sales the number one mistake is discounting, because founders misjudge what they must charge not to lose money: "their presale becomes their death".

![A product cycle sends a prototype to users, measures their actions, chooses one improvement, and repeats.](/assets/career/jeff-su-playbook/chapter-10/02-measure-iterate.webp)

*Measure real use, select the metric to move, write the next small change, and iterate.*

## 10.5 Measure what users do

Set up metrics early; they are "one of the number-one sources of new product ideas and inspiration". Google Analytics shows page views, not whether users clicked a button, so use an event-based tool such as Mixpanel, Amplitude or Heap, "ridiculously easy" for a technical team and "basically impossible" for a non-technical one.

- **Start with five to ten simple stats,** not 150 events, which "is often a mistake" (advice he credits to Suhail of Mixpanel). For Instagram: opened the app, created an account, took a photo, applied effects, shared it.
- **Name events for others,** so it is everyone's tool, not just the CTO's.
- **Put measurement in the spec,** including the stats you expect to improve, and ship them in the first release. Leaving it for later hurt Justin.tv many times.

**One top-line KPI.** If you will ever charge, it should almost always be revenue; if never (like Facebook), a usage metric such as daily active users. Everyone should know its value today, three months ago and at the start: "table stakes". If revenue is zero, keep it anyway: "you should be depressed looking at that number every week too". **Contributing metrics** are what you can move; Socialcam's daily active users were fed by new users, retention and new content.

## 10.6 Run a short, written development cycle

**What went wrong at Justin.tv.** Decisions went to whoever won the argument; a debate over the background color lasted about three months. For about five years the product shipped every three months, and nothing was written down, so people built different versions and weeks of work were thrown away. If your process runs on arguing, unwritten specs and long cycles, "you are 100% doing it wrong".

**The cycle that replaced it:**

1. **Pick the contributing metric** this cycle should move.
2. **Brainstorm openly.** Every idea goes on the board, with Mixpanel open to check claims. The CEO's job is not to shoot ideas down.
3. **Sort into three lists:** new features or iterations, bug fixes and maintenance, and A/B tests.
4. **Rate easy, medium or hard.** Hard means one engineer for most of the cycle, medium a day or two, easy several in a day.
5. **Decide the hards first** by expected KPI impact, then mediums, then easies.
6. **Write the spec,** the step no one likes, and distribute tasks.
7. **Make it the only meeting,** whether it takes two hours or six; no plan changes until the next cycle.

The ratings expose "useless and hard" parts that can be cut and replace "the argument ability of the person delivering them" with "an objective standard", and with every idea on the board much of the ego leaves the debate. As the non-coding product lead, Seibel's "number one job" mid-cycle was to stay quiet: the next meeting is two weeks away, and "turns out your burning idea's probably wrong".

Socialcam ran two-week cycles because "back then" App Store submission took longer; a pure web product could run weekly. Treat the lengths as 2018 practice, not fixed rules. The cadence also made it fun: "every two weeks we had success."

**Iterate before you pivot.** "It's been two months, it's time to pivot" blows Seibel's mind; expect finding a solution to take about two years. "If it was really easy someone else would have done it."

| | Changes | How often |
|---|---|---|
| **Pivot** | The customer or the problem | Rarely; often it means a new company. |
| **Iterate** | The solution | Whenever the MVP fails or desperate customers don't want it. |

The common mistake is the reverse: shopping the same solution to other customers. The first iPhone had no 3G, one carrier and no App Store, and Apple iterated every year. "Real Steve Jobs iterates and talks to customers, fake Steve Jobs just dreams and creates art."

## 10.7 Twitch: the process applied

Gamers were about 20% of Justin.tv traffic for years; ignored, they kept using it, so they must have been desperate. Twitch began by talking to them. The requests were small, the team built them, and passionate users "fall in love with you" even over mundane features. Justin.tv went from worth nothing to about $24 million in five years, then to about $1 billion in the next three: "that's what software can do when you hit the right customer."

## 10.8 Q&A: what to build next

In the Q&A, Seibel says beta-versus-MVP labels don't matter; what matters is whether people use it. On what to build next, "usually there isn't a right answer," and a team that builds MVPs quickly and measures beats "a super genius who can imagine what's going to happen". Justin.tv's habit to "only swing for home runs" led to "the whole spiral of death".

## 10.9 Using this outside a startup

Editorial guidance: Seibel speaks to founders. By analogy, the same questions can test an internal tool, side project or process change: a one-sentence problem, a named first user, how often and how intensely they feel it, the metric that should move, and a short cycle to find out. In product or case interviews, work through problem, customer, MVP and metric before features.

**Chapter standard:** You can state the problem in one sentence, name the first desperate customer and how often and how badly they feel it, show the event data that says whether they use the product, and name the metric your current short cycle should move. Outside startups, use it only as an analogy.
