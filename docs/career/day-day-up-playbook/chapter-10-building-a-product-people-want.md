---
title: Chapter 10 - Building a Product People Want
description: Define the problem and first customer, ship a small MVP, measure behavior, and iterate.
date: 2026-09-26
tags: [career, product, startup]
---
# Chapter 10 - Building a Product People Want

Define the problem and the customer before the solution, ship small, measure behavior, and iterate on a steady cadence.

*Source note: This chapter comes from a different speaker than Chapters 1–9. It synthesizes Michael Seibel's Y Combinator Startup School lecture “Building Product” (2018), which draws on his experience at Justin.tv, Twitch, and Socialcam and on the YC company Poppy. Source: <https://www.youtube.com/watch?v=C27RVio2rOs>, retrieved 2026-09-26. It is written for early-stage founders. The same discipline applies to internal tools, side projects, and product-manager interviews; §10.7 shows how.*

## 10.1 Know what compensated for broken rules

Seibel says Justin.tv broke most of the rules below and survived because of three conditions. He considered each one necessary:

1. **A highly technical founding team** that was not intimidated by hard engineering problems.
2. **A low burn rate.** Four founders shared a cheap apartment and paid themselves very little, which gave them room to make mistakes.
3. **Personal commitment.** The company was the founders' main achievement, not a résumé item, so they did not seriously consider quitting.

**Use it:** Before relying on persistence, check which of these you actually have. Keeping your personal expenses low is how you keep a startup, or any risky move, affordable (see [§9.3](./chapter-9-career-strategy-mindset.md#93-take-risks-you-can-afford-to-learn-from)).

## 10.2 State the problem before the idea

![From a vague product idea to a focused customer problem and small MVP](/assets/career/day-day-up-playbook/chapter-10/01-flowchart-problem-to-mvp.png)

Founders often pitch what they will build without being able to say what should be different once it works. If you cannot state the problem, you cannot tell whether you have solved it.

| Test | What a good answer looks like |
|---|---|
| Can you state it clearly? | One or two sentences, not an essay. |
| Have you experienced it? | Not required, but it is evidence that someone really has the problem. |
| Can you define it narrowly? | A first group you can serve now, not everyone who will eventually have the problem. |
| Is it solvable? | The inputs needed to solve it exist and can be obtained. |

**Example from the source:** Poppy offered on-demand babysitting. “Parents need babysitters” covers too many cases (daily care, emergencies, infants, teenagers). Narrowing it to infant care exposed the constraint: parents trust few caregivers with infants, and the qualified ones usually already have well-paid nanny jobs. That supply may not exist on demand, so the narrow problem may not be solvable.

## 10.3 Identify the customer and how badly they need a fix

“Everyone” is not a customer. Every product that everyone now uses once had a specific first user. Without one, you do not know who to talk to.

Assess the customer on five dimensions:

- **Frequency:** How often does the problem recur? Car buyers buy about every seven years, so consumer car-shopping sites struggle. Dealers must hit sales numbers every day, which makes the dealer the real customer.
- **Intensity:** How much does it matter each time? Getting to work or the doctor is intense and frequent, which is why ride-hailing grew far beyond the old taxi market.
- **Willingness to pay:** Charging from the start filters for people with the real problem. Free users who are only curious will lead your product in the wrong direction.
- **Reachability:** Can you find and contact customers? A B2B company that can find buyers on LinkedIn has a different path from one in a market where business email outreach does not work.
- **Quality:** Some customers exploit an immature product. They make endless complaints, demand refunds, or mistreat your staff. Identify them early and be willing to let them go.

**Use it:** Aim for problems that are frequent and intense. If a problem is both infrequent and mild, it is hard even to get prospective customers to talk to you.

## 10.4 Build a quick MVP and give it to desperate users

- **Check for drift.** While you build, the product can drift away from the original problem or customer. Keep the MVP small, around two weeks where possible, and check each piece against the problem statement. This answer is often uncomfortable. Ask it anyway.
- **A product is not art.** Art can succeed if one person values it. A product succeeds only if many users find it useful. The first iPhone lacked 3G and an App Store and had poor battery life. Apple improved it every year afterward. The lecture calls this the difference between the “real” Steve Jobs, who released and iterated, and the “fake” one, who dreams a perfect product.
- **Start with desperate customers, not impressive ones.** An MVP is by definition not good yet, so seek people who need a solution badly enough to use a flawed one. For enterprise sales, a six-month negotiation over a small contract is a sign the customer is not desperate enough.
- **Discount feedback from friends and investors.** They usually do not have the problem. Their well-intended opinions will mislead you.
- **Do not discount out of fear.** If you use a discount, give it a structure. Tie it to a real reason and a deadline so it speeds up the decision, and set your base price with room for it. For pre-sales, especially hardware, make sure the discounted price still covers your costs.

## 10.5 Measure what users do

![Product improvement cycle: plan, release, observe user actions, and use the data to improve](/assets/career/day-day-up-playbook/chapter-10/02-cycle-measure-iterate.png)

Page-view analytics show traffic, not behavior. Use an event-based tool, such as Mixpanel, Amplitude, or Heap, to see which actions users actually take.

1. **Start with five to ten core events.** For a photo-sharing app, these might be: opened the app, created an account, took a photo, applied a filter, and shared it.
2. **Name events so anyone can understand them.** A successful product will eventually track hundreds of events.
3. **Make metrics a shared tool.** Everyone on the team, not just the CTO, should be able to use them.
4. **Put measurement in the spec.** Each feature spec should list the events to track and the metric it is expected to move, and these should ship in the first release.

**Choose one top-line KPI.** If you charge, or will charge, customers, use revenue. If you will never charge, use a usage measure such as daily active users. Most claimed exceptions are not real. Know its current value, its value three months ago, and its value at the start. If revenue is zero, keep it as the KPI anyway. Add two or three contributing metrics that you can move directly, such as sales conversations, contracts in progress, or new users, retention, and content created.

## 10.6 Run a short, written development cycle

Justin.tv's early process: a web product shipped every three months. Specs were never written down, so team members built different things. Decisions went to whoever argued best, and one background-color debate lasted months. Features shipped half-finished and were abandoned if they did not work immediately. The replacement cycle:

1. **Pick the metric.** Choose which contributor to the KPI this cycle should move.
2. **Brainstorm openly.** Write every idea on the board without dismissing any. Keep analytics open so people can check claims as they go. People accept not getting their idea built much more easily when it has been heard.
3. **Sort ideas into three lists:** new features and iterations, bugs and maintenance, and A/B tests.
4. **Rate each idea easy, medium, or hard.** Hard means about one engineer for the whole cycle. Medium means a day or two. Several easy ideas fit in one day. Most hard ideas contain parts that are both costly and useless. Remove them and restate the idea as an easier one. Rating ideas this way also teaches non-engineers how much things cost.
5. **Choose by expected KPI impact.** Choose hard ideas first, then mediums, then easy ones.
6. **Write the spec.** Spell out what the feature does and how it works, then assign tasks.
7. **Protect the cycle.** This planning session is the only meeting. Do not change the plan until the next cycle. Use one-week cycles for web products and two-week cycles for mobile apps.

**Pivot versus iterate:** A pivot changes the customer or the problem. It should be rare, and it is often effectively a new company. Iterating changes the solution, and you should expect to do it many times. Do not keep your solution and look for a new customer who might want it. Seibel argues that correctly identifying an unsolved problem is where the genius lies, not a clever solution. Expect finding a solution to take about two years, not two months.

**Twitch as the example:** Gamers made up about 20% of Justin.tv traffic for years and were ignored. When the team finally asked them what they wanted and shipped modest requests quickly, the gamers told their friends. The layout, chat beside the video, barely changed. The difference was a fast cycle of listening and delivering.

## 10.7 Apply it to your career

- **Internal projects and side work:** Before proposing a tool or initiative, write down its problem statement, first user, frequency, intensity, and success metric. This is a strong version of the problem → action → result evidence described in [§1.1](./chapter-1-resume-application-materials.md#11-write-impact-bullets) and [Chapter 3](./chapter-3-answering-interview-questions.md).
- **Product and startup interviews:** Asked to design or improve a product, work through the problem, the narrow first customer, its frequency and intensity, the MVP, and the metric. Do this before listing features.
- **Staying able to take risks:** Seibel notes that lifestyle creep (mortgage, cars, costly habits) is what stops many people from ever starting a company. Keeping costs low keeps the option open.

**Product standard:** You can state the problem in one sentence, name the first desperate customer, show the event data that indicates whether they use the product, and explain what your current cycle is expected to improve.
