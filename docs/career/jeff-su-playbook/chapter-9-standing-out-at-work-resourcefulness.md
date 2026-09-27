# Chapter 9 — Standing Out at Work: Resourcefulness

This chapter shows you how to use free tools and reusable materials to do visible, useful work beyond your job description, and what to check before you rely on them.

![One professional creates a guide that several colleagues can use independently.](/assets/career/jeff-su-playbook/chapter-9/01-one-to-many-resource.webp)

*A reusable resource scales help beyond a single conversation.*

## 9.1 Resourcefulness as visibility

Jeff's "Think Outside the Box" series rests on one claim: "the more resourceful or scrappy you are in the workplace the more likely you are to be recognized as capable and proactive". Early-career tasks look much like your peers', so solving a shared problem with a free tool no one else thought of makes you noticeable.

**The evidence is personal anecdote.** Mail merge brought him "some extra recognition at work", and a no-budget event poster earned "a lot of recognition… because no one else had thought about something like this before". Onboarding videos were one of three reasons he was promoted "relatively quickly" in his second full-time job, alongside consulting skills and a supportive manager, so resourcefulness alone didn't get him promoted. He made the videos to save time: "I didn't do this with a goal in mind".

**Episode order and dates.** The series ran from September 2021 to January 2022. Presentation design is the first episode, Canva the second and onboarding the third; the mail merge and presentation-engagement videos call themselves only "another episode." All tool features, menu paths and free tiers in this chapter are as of 2021–22; check the current version before you build a workflow on any of them.

## 9.2 One-to-many scale

The resourcefulness usually comes from scale: one piece of work reaches many people. "Helping one or two people is good, helping a hundred is great."

| One-to-one habit | One-to-many alternative |
|---|---|
| Generic BCC blast, or typing each email yourself | Personalized bulk email built from a spreadsheet |
| Forwarding an event invitation one by one | A poster invitees can share over messaging apps |
| Answering the same new-hire questions in each 1:1 | Guides shared with each batch of 20–30 new hires |
| Building each deck or graphic from scratch | Starting from templates |

Scale is Jeff's answer to the objection "I mentor colleagues at work as well, I'm not getting promoted."

## 9.3 The presentation lifecycle

### Design: raise the production value

Jeff says he hasn't started a presentation from scratch in five years. He demonstrates in Google Slides; the tools also work with PowerPoint.

| Stage | Tools | Caution |
|---|---|---|
| 1. Template: never start from scratch | Slide Carnival ("Simple" category), Slidesgo | Credit Slide Carnival; Slidesgo allowed 10 free downloads a month |
| 2. Color palette: make it "unique to me" | Color Hunt, or a generator built around one hex code | External decks follow brand guidelines; internal ones are where "you can get a bit creative" |
| 3. Full-slide images, dimmed so text stands out | Unsplash, Pexels, Pixabay | Check licensing terms |
| 4. Icons | Flaticon; Noun Project for formal decks | Crown icons were premium; free Flaticon use requires credit |
| Bonus: fonts | Typewolf | "Not every font is going to be available" |

His summary is that these resources are "safe to use if you're including them in presentations and not trying to profit off these free resources," but he tells viewers to check the terms themselves.

### Engagement: the "Harry Potter" structure

Good slides don't guarantee attention; even useful presentations lose people to phones and switched-off webcams. Jeff's structure borrows from the Harry Potter series: hook the audience at the start, keep them engaged throughout, and leave them wanting more.

| Phase | Tool | What Jeff does | Why |
|---|---|---|---|
| Hook | Mentimeter | A light mood poll ("On a scale of Harry Potter, how are you feeling today?"), a topic word cloud, and a short quiz with a leaderboard, joined by QR code | Lightens the mood and shows "how knowledgeable the participants are" |
| Sustain | Slido | Puts the Q&A QR code in the deck, even on every slide; the audience asks anonymously and upvotes | Many people don't ask "because they're afraid of looking stupid"; asking throughout means "they don't interrupt you and they don't forget what they wanted to ask" |
| Close | Kahoot | Announces at the start that a quiz will close the session with a prize for the top three; runs about five questions | Tests "whether the audience has been paying attention." "It's not bribery if there's some sort of fair competition involved" |

**The 10-minute claim.** Jeff says "research has shown that on average attention spans during presentations max out at 10 minutes" but gives no source. On that basis he reviews Slido questions or runs a poll every 7–8 minutes. Treat the timing as a rule of thumb, not an established finding.

**Free tiers.** Mentimeter's was "a bit limited but … more than enough for most of us." Kahoot's required educator or student sign-up and allowed 20 players. Run a Kahoot practice round alone first.

## 9.4 Personalized bulk email with mail merge

Mail merge sends one email to many people, each copy filled in from a spreadsheet row. Jeff calls it "a less generic and more efficient" alternative to BCC. Personalization makes a mass email read as individual, and including a customer's account ID "prove[s] that this is a legit email from their account manager and not spam".

**Mechanism.** Google publishes a free Mail Merge script (built by Martin Hawksey) on its Google Workspace for Developers site. It replaces each <code v-pre>{{Column header}}</code> in a Gmail draft with that row's value from a Google Sheet.

**Procedure:**

1. Copy the sample spreadsheet and fill in one row per recipient. Rename or add any column **except "Recipient" and "Email Sent,"** which the script needs.
2. Write a Gmail draft with <code v-pre>{{Recipient}}</code> in the To field and <code v-pre>{{Header}}</code> placeholders in the subject and body.
3. Run **Mail Merge → Send Emails** and paste the draft's exact subject line. Google warns that it "hasn't verified this app"; Jeff proceeds because the script comes from Google's developer site. That is his judgment, so check your organization's policy first.
4. **Send a test to yourself first**, check that Email Sent fills with a timestamp, and clear it before rerunning.

**Examples.** In account management he emailed more than 200 clients a quarter, each citing the client's vertical and customer ID. An event confirmation can carry a check-in ID built by a spreadsheet formula, since formula output works as a merge field too.

**Common mistakes:** one curly bracket instead of two, and not copying the column header exactly. The video doesn't mention Gmail sending limits.

## 9.5 Canva for work assets

Canva's free tier lets a non-designer produce work graphics. The LinkedIn photo and banner uses are covered in Chapter 2.

| Use | How | Note |
|---|---|---|
| Editable PDFs | Drag a long report into Canva, edit a few pages, add your analysis and branding, export to slides | "Do not forget to give credit to the source material" |
| Mock-ups | Drop a screenshot into a device frame | Helps others "envision what you have in your mind" |
| Event poster | Customize a template and add a QR code to a sign-up form | One invitee can share it with many people |
| Resume or cover letter | Draft in Google Docs, move into a simple template **without a headshot**, export PDF | Alignment "could be a nightmare" in Word or Google Docs |
| Custom sizes | Set exact dimensions, e.g. a Notion cover | Look up the required size first |

The editable PDFs solve a pain Jeff had as a first-year consultant, and the poster is his main recognition story from the episode.

## 9.6 Onboarding guides: mentoring at scale

Mentoring new hires with reusable guides is, in Jeff's words, "an easy and natural way" to raise your visibility. About six months after joining a sales team, he recorded his screen and voice answering the questions new hires asked most, and shared the videos with each batch of 20–30 people. They added "personal observations" and "tips to avoid mistakes I had already made" to formal onboarding. Free recorders include QuickTime, OBS and Zoom.

**Why it raises visibility (Jeff's three reasons):**

1. **The curse of knowledge.** Jeff says the idea was "first brought up by C.S. Lewis": "people don't learn best from experts; instead we learn best from those who are just one step ahead of us along the same journey." Buddy systems pair a new hire with someone who joined 6–12 months earlier because "the boss is too far removed from the day-to-day job". The attribution to Lewis is the speaker's own and is unverified here; the learning claim has no source.
2. **Helping senior leadership.** Managers know they are not best placed to teach operational details, so stepping in does them "a huge favor." They also give performance ratings.
3. **Word of mouth.** Citing Jonah Berger's *Contagious*, Jeff notes that things get talked about partly for their practical value. New hires hold 1:1s with "everyone and anyone" in their first months, so practical advice travels.

**Limits of recorded video.** A mistake meant re-recording the whole video without editing skills; for "nitty gritty instructions like what buttons to press," written steps work better because people read at their own pace; and the videos went out of date about every six months as products changed.

Editorial guidance: these downsides point toward short written guides you can edit when a process changes. The rest of the video demonstrates a sponsored tool, which this book omits.

## 9.7 Recurring cautions

Every episode carries some version of the same four checks.

**Test before it counts**: mail a test to yourself and rehearse the quiz. **Credit and check licensing** for templates, icons and reused PDFs. **Follow company policy**: brand guidelines for external decks, and IT rules on authorizing scripts. **Know the free-tier limits**, which change over time.

**Chapter standard:** A resourceful piece of work solves a problem others share, reaches many people at once, and has been tested, credited and checked against company policy before anyone else sees it. Editorial guidance: if you can't say who benefits beyond yourself, it is not yet a visibility project.

---
