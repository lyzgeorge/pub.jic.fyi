# Chapter 8 — AI-Assisted Preparation

This chapter lets you use a chatbot to draft interview answers, find likely questions, tailor application documents, and pick LinkedIn keywords, using short prompt chains that start from the employer's needs and end with your own check of every line.

![A job description and resume feed an AI draft that a person checks against the original record.](/assets/career/jeff-su-playbook/chapter-8/01-ai-draft-verification.webp)

*Use AI to organize a draft, then verify every claim against your actual experience.*

## 8.1 The problem with single, self-centered prompts

Jeff opens his 2023 ChatGPT guide by saying that "most ChatGPT outputs are a waste of time for job seekers." A popular cover-letter prompt from GitHub shows two faults: it is **self-centered**, "all about me, me and me," when the best cover letters open with a hook about the company; and it is a **single prompt**, though "a dual prompt or multi-prompt approach is shown to give better results" (no source given).

**The fix.** Every chain here runs in the same order: extract what the employer needs from a real job description, combine it with your resume, then check and edit the output yourself. Editorial guidance: the chains below are this one pattern applied to different documents.

**Tools and dates.** The 2023 and early-2024 interview videos name ChatGPT and Google Bard; the mid-2024 LinkedIn video names Gemini, Bard's later name. The October 2023 video claims "46% of applicants are successfully using ChatGPT and Google Bard" (no source given). Products change; the prompts transfer.

## 8.2 The named prompting techniques

Jeff names four techniques, and this book adds none. **Role prompting** assigns a persona ("You are a seasoned hiring manager with over 20 years of experience"). **Knowledge generation and integration** means "you first prompt the chatbot to generate information about a given topic, then you use that output... to help the chatbot answer the question more accurately." **Few-shot prompting** means "you basically give a chatbot an example and ask it for an output using that example as reference," as in the bullet rewrite (8.6). **Multi-prompting** splits the task across several prompts. A fifth practice recurs unnamed: put the framework in the prompt. A situational answer requested without RCS comes out "way worse."

## 8.3 Step one: extract what the employer needs

"Within literally a minute we're able to cut through the noise and understand what the hiring manager is really looking for." For interview answers:

> You are a seasoned hiring manager with over 20 years of experience. You are responsible for this job posting. Highlight the three most important responsibilities in this job description: [paste job description]

For resume tailoring, the persona becomes "an expert resume writer with over 20 years of experience working with job seekers trying to land a role in [tech]." For a cover letter:

> Based on this job description, what is the biggest challenge someone in this position would face day to day? [paste job description]

Jeff runs the first prompt on a Netflix sales operations opening, a field where he has "zero experience." It returns collaboration with sales (measured by advertising revenue), sales process management including data hygiene and tools, and pipeline and business reviews.

Yet Jeff elsewhere calls job descriptions "often just too vague" and prefers insiders (see Chapter 1). Editorial guidance: treat the extracted priorities as a hypothesis to test with people at the company.

## 8.4 Drafting "Tell me about yourself"

The framework is in Chapter 4. After the hiring-manager prompt, ask for a draft (the October 2023 version, lightly cleaned):

> Based on the three most important responsibilities you just identified, use my resume to structure a convincing answer to the "tell me about yourself" interview question. Use the present, past and future framework. Create a separate header two for each section. The present is a snapshot of my current career situation as it relates to the job description; limit this part to 100 words. The past should only include one previous work experience that's most related to the new role; limit this part to 50 words. The future should draw a connection between my career trajectory and the new role; feel free to get creative here; limit this part to 100 words. Here's my resume: [paste resume]

The 2023 guide's version is looser, with "a few select work experiences" and one cap: "keep the answer within 300 words." Its future section came out so vague it "can apply to any company," so Jeff added:

> The future section is too vague. Based on the job description, please give me one specific example why working at [Apple] would be a great fit for me based on my previous experiences. Include keywords from the job description where appropriate. Prioritize unorthodox, lesser known advice in your answer. Do not make information up. Here's the job description: [paste]

**Edit by hand.** The draft is "80% there." Keep the present under 100 words so the answer fits two minutes; swap fluff ("delivered exceptional results") for facts ("15 times return on investment"); keep only the most relevant past experience; and add your own bridge to the future, as Jeff did:

> In the short term, I believe my existing skill set will help with a faster ramp-up, while in the longer term I'm excited to round out my B2B capabilities in the sales operations team.

## 8.5 Finding likely questions and drafting answers

CARL and RCS are in Chapter 5. Generic online lists are "extremely inefficient"; ask for predictions instead (the 2024 version):

> You are a seasoned hiring manager with over 20 years of experience. You are responsible for this job posting. Based on this job description, what are the 10 most common behavioral interview questions you will ask job applicants? Here's the job description: [paste]

Then "rinse and repeat by replacing 'behavioral' with 'situational'." The 2023 guide asked for "the 10 most common interview questions" without the split. Jeff says "over 90% of non-technical interview questions" are one of the two (no source given). To learn why a question is asked:

> I'm preparing for an interview. I'll share the job description. The interviewer is going to ask me [question]. Please list out the three main reasons why the interviewer is asking this question and give me three corresponding tips on how to structure my answer. Put this in a two-column table format: three main reasons in the left-hand column and the three corresponding tips in the right-hand column. Here is the job description: [paste]

Editorial guidance: this is the chatbot version of decoding the hidden question (Chapter 1); check its reasons against what insiders tell you.

For a behavioral answer (2024 version):

> Based on my resume, write me an answer to the behavioral interview question "Tell me about a time when you handled a difficult team member." Use one specific example from my work experiences. Use the CARL answer format: context, action, results and learning. Keep the answer concise and do not go above 260 words. Here's my resume: [paste]

The 2023 version builds on the reasons-and-tips table and spells out "results (include quantifiable metrics)." Spoken answers run two to three minutes; keep them all in one Google Doc. For situational answers, give the question and the RCS framework; Jeff links that prompt without reading it out, so its wording is not in the transcript.

## 8.6 Tailoring the cover letter and resume

**Cover letter.** After the challenge prompt (8.3), ask for a hook (bracketed roles are Jeff's hypothetical):

> You're currently working as a [sales account manager in the retail industry] and you're applying for this [product manager] position at [Apple]. Write an attention-grabbing hook for your cover letter that highlights your experience and qualifications in a way that shows you empathize and can successfully take on the challenges of the [product manager] role. Consider incorporating specific examples of how you've tackled these challenges in your past work and explore creative ideas or ways to express your enthusiasm for the opportunity. Keep your hook within a hundred words.

Edit the hook, then ask the chatbot to "finish writing the cover letter based on your resume and keep it within 250 words," pasting your hook and resume. Ignore any rewrite of your opening, which is "usually worse," and keep only the experience that addresses the challenge. Worst case, the hook still shows "you understand the pain points of the role... so they know you did your homework."

**Resume.** Don't "just copy paste the job description and ask ChatGPT to tailor your resume." Run the resume-writer prompt (8.3), then:

> Based on these three most important responsibilities from the job description, please tailor my resume for this [product manager] role at [Apple]. Do not make information up. Here is my resume: [paste]

> List out the differences between my original resume and your suggested draft in table format with two columns, original and updated. Be specific and list out exactly what was changed down to the exact wording.

That check is "extremely important because it allows us to easily catch hallucinations or lies." In Jeff's test the chatbot changed his title from Senior Management Consultant to Product Manager: "I can highlight transferable skills... but I can't change my title."

**Bullet points.** Role prompt, paste one bullet, and say: "No action needed for now. If you understand, please respond with yes." Then ask it to "rewrite this bullet point using this structure: I accomplished X as measured by Y that resulted in Z," with the hypothetical example "I lowered hospital mortality rate by 10% by educating nurses in new protocols, which translates to 200 lives saved per year," within 50 words. For a role that seems unmeasurable, ask where and how to add metrics: "The reader cares more about you knowing the importance of measurement than the actual numbers themselves." Editorial guidance: the numbers must still come from your own records.

## 8.7 LinkedIn keyword and skills prompts

Chapter 1 covers keyword extraction; Chapter 2 covers placement. Paste five job descriptions into one Google Doc and run this in ChatGPT or Gemini (as of 2024):

> I am a job seeker applying to [marketing manager] positions. Your task is to analyze the five job descriptions I will paste below and identify the top 10 keywords that appear by frequency. Clearly show the number of times that keyword appears in the five job descriptions, i.e., show a numerical value next to the keyword. Here are the five job descriptions: [paste]

The skills version asks instead to "identify the top 10 most relevant skills I should include in my LinkedIn profile. Sort the skills by most relevant to least relevant." Expect surprises ("measurement" and "channel" for Jeff's product marketing role) and pick the three most relevant. Editorial guidance: chatbot counts can be wrong; spot-check them with find.

## 8.8 Where the videos differ

| Point | 2023 ChatGPT guide | Later videos |
|---|---|---|
| **TMAY** | ≤300 words; "a few select work experiences" | 100/50/100 words; "only one previous work experience" (Chapter 4 covers the older time budget) |
| **Questions** | "10 most common interview questions" | Behavioral, then situational, matching CARL/RCS |
| **Answer length** | 2–3 minutes spoken, no cap | "Do not go above 260 words" |
| **Accuracy** | "Do not make information up" | "Feel free to get creative" in the future section, about connecting your path to the role, not facts |

## 8.9 Verification cautions

Jeff builds in some checks ("Do not make information up," the difference table) and treats output as a draft. The rest are *editorial*:

- **Never add experience you don't have.** Titles, employers, dates, and metrics must match your record.
- **Check every line.** Read drafts aloud; if you can't defend a claim under follow-up, cut it.
- **Treat suggested numbers as research prompts**, not results.
- **Don't paste confidential information**, and check your employer's AI policy.
- **Expect the tools to change.** Names, free tiers, and quality reflect 2023–2024; re-test before relying on a prompt.
- **Keep your voice.** Edit out generic phrasing.

**Chapter standard:** Every AI-assisted draft starts from a real job description, uses a named framework in the prompt, and passes a line-by-line check against your own record before you use it. You can explain, in your own words and without the draft in front of you, every claim it contains.

---
