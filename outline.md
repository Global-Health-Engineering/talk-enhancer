# Outline: EnhanceR Symposium 2026 talk

Talk: "Teaching Git, GitHub, and coding agents to researchers who do not come from IT". Monday 30 November 2026, PSI Villigen, 20 minutes plus 5 minutes of questions, given twice (11:45 in WHGA/001 and 14:35 in WHGA/121).

How this file works: each section holds my own words first, in quote blocks. Words in [square brackets] are readings I am not sure of. Below my words sits the slide plan. Lines that start with TODO are still open and are mine to answer. The deck is rebuilt from this file.

Sources named in the slide plan:

- RDC talk: `talk/ledger/deck.qmd` in <https://github.com/Global-Health-Engineering/rdc-2026>
- RDC workshop: `workshop/slides.qmd` in the website repository of the gitforsci-rdc organisation
- Draft deck: `slides/deck.qmd` in this repository (first draft of 22 November)
- Book: Greg Wilson (2019), Teaching Tech Together, Taylor & Francis, CC BY-NC 4.0, <https://teachtogether.tech/en/index.html>

## Lars's notes, 23 November 2026

### 1. Opening: everyone stands up

> Who in this room is teaching GitHub to scientists?
>
> Who in this room has had a formal or semi-formal education in teaching and learning, [in how] adults learn best?
>
> Okay, I see quite a few people up here, that's great. I would love to hear what your education is.

Decided: the questions use the wording of the printed title, they replace the show of hands planned on 22 November, and everyone gets up from their seats.

Slide plan:

- Slide 1, title slide.
- Slide 2, "Please stand up": two lines, shown one after the other.
  - "Stay standing if you teach Git, GitHub or coding agents to researchers."
  - "Stay standing if you have had formal or semi-formal training in how adults learn."
  - Then one or two of those still standing say in a sentence what their training was.
  - Suggestion: add "or raise a hand" for anyone who prefers to stay seated.

### 2. Where my own teaching comes from

> The one that I followed is Teaching Tech Together. Me going through that program has highlighted so many things that I've integrated into my teaching, which I today believe [are] the foundation of why I have found a good way to teach technical concepts to people not from IT, which is largely what our learners are, or at least the learners that I choose to teach.
>
> Crucial to all of this is that we find a way to evaluate ourselves, be honest to ourselves, be critical with ourselves to improve our teaching. Be open to applying new methods and realizing certain things that may feel uncomfortable.

Slide plan:

- Slide 3, "Who speaks": the slide from the RDC talk (id `s-quiet`): "No doctorate. No qualification in statistics. No computer science degree." Then "An environmental engineer who likes computers." and "Empathy, patience and persistence." One line added for this room: data steward inside a research group of 15 people at ETH Zurich, Global Health Engineering.
- Slide 4, "Where this comes from": Teaching Tech Together, Greg Wilson (2019), free to read. The book says of itself that it is derived from The Carpentries instructor training, and that training is the open route today. My own route was the RStudio instructor certification in 2020, built by Greg Wilson on the same material. Base: the slide "Where this comes from" of the RDC workshop.
  - Wording check: Greg Wilson is the co-founder of Software Carpentry, which became part of The Carpentries. "Founder of The Carpentries" would not be exact.

### 3. The words "just", "quickly", "easily"

> How often in your teaching do you use the words just, quickly, easily? Have you ever observed yourself? Have you ever filmed your own workshop and then assessed how many times you use these words?
>
> These are the types of words that we as educators, when we are speaking to our learners, they may slip out unnoticed. But what they can do in a learner is to put them into a seat where they don't believe in being able to learn these concepts themselves. They might have even been told that they are not capable of learning technical topics, that there may be something like a gene or a talent [for] computational topics, which goes beyond our individual capacity.
>
> Most of these things we know today are wrong. They've been disproven. But there's still a lot to learn about how adults actually learn when they're learning technical topics. And it has a lot to do with motivation.

Slide plan:

- Slide 5, three words in large type: just, quickly, easily. Then the question "Have you ever filmed your own workshop?" On the side a placeholder for a photo of someone who looks highly demotivated. Base: the slide "Words I leave out" of the RDC workshop, with its line "They say that a step costs nothing. A learner who is stuck on it hears: it is me."
  - TODO: choose the photo. Until then the frowning figure from Greg Wilson's motivation slides (already in the RDC workshop deck, CC BY 4.0) stands in.
- Slide 6, "The expert blind spot": the error message, read as a normal step by the expert and as proof of failure by the novice. With the citation.
  - Definition: Wilson (2019), chapter 3, "Expertise and Memory", <https://teachtogether.tech/en/index.html#s:memory>. Experts "can no longer imagine what it's like to not see the world that way". The same chapter has the box "The J Word": experts often betray their blind spot by using the word "just".
  - Mental models: Wilson (2019), chapter 2, "Mental Models and Formative Assessment", <https://teachtogether.tech/en/index.html#s:models>. Novices "don't yet have a usable mental model of the problem domain", and manuals frustrate novices because they use jargon and do not explain things.
  - My point on the slide: experts design their teaching from their own mental model, and novices receive too many uncertainties. The book does not say this in one sentence; the two passages above are the closest, so the slide cites both chapters.
- Slide 7, "No gene for coding": of 778 university course grade distributions, 5.8% showed signs of being multimodal, and professors who believed in innate talent were more likely to see two groups (Patitsas et al. 2016, cited in Wilson 2019, chapter 10, <https://teachtogether.tech/en/index.html#s:motivation-demotivation>). With a placeholder for a photo or similar.
  - TODO: choose the photo. Suggestion: a histogram with one hump drawn in the deck from a code chunk, as the picture of "no two groups".

### 4. Motivation and demotivation

> Here are my slides on motivation. Here are my slides on demotivation.

> No matter how easy or simple. This is also where giving everyone significant time for pre-work and then teaching that pre-work in the first lecture pays off. They spend their own time to complete it, some significantly more than others, but without noticing it in class. Then, in class, they are more likely to keep pace with the more experienced learners and will also be able to have formed their own questions due to the pre-work. It's a flipped classroom model without calling it that.

Slide plan: the two slides of the RDC workshop, taken over with their drawn figures (Greg Wilson, Teaching Tech Together, slides on motivation, CC BY 4.0).

- Slide 8, "What motivates adults to learn": self-efficacy (I am in control of my own life), utility (this will help me meet my goals), community (people I know are learning this with me). Below, as the second step of the slide: achievement leads to motivation, so an early win comes first, no matter how small. The pre-work is that early win: everyone gets significant time, some take much more of it than others, and nobody sees that in class. The first hour then teaches the pre-work again. A flipped classroom without calling it that.
- Slide 9, "What takes motivation away": unpredictability, unfairness, indifference. Then 30 seconds of silence with one question on the slide: "What might you have done in class that took the motivation away?"

### 5. How I teach

> So this is what we're doing in our group. I put a lot of emphasis on these aspects of learning. I check for my expert blind spots and always put myself into the learner's seat.
>
> Here's how I teach. Use the points from the RDC conference that I didn't use. [Avoid] the terms, etc.

Found: the points are in the RDC workshop deck. The slide "Six things I do" was shown on 20 November; the section "More on how I teach" behind the thank you slide holds one slide per point and was not shown.

Slide plan:

- Slide 10, "Six things I do", taken over from the RDC workshop, each point with one example:
  - Words I leave out: just, easily, quickly (already slide 5, so one glance back) TODO: In
  - Design for the novice: every click is written down, no gap between two steps, extra material marked as extra TODO: In
  - Know the learners, then design: a survey before anything is written (27 answers decided the software), a tracker for the pre-work, the content written the day before TODO: In, but not saying it live
  - A learner account: every demo runs as a second account with the rights of a learner; with my own account buttons differ and warnings never show TODO: In, but not saying it
  - Type with the room, mistakes included: participatory live coding, nothing is pasted TODO: In
  - Try out new things TODO: Out
- Also in the unused slides, as material for single lines: "Why GitHub Desktop?" (11 RStudio, 6 GitHub Desktop, 4 Positron, 5 no preference; I chose against the largest group) and "The same design, three days ago" (what the cohort before changed in the instructions).
  - TODO: six points in 2 minutes is 20 seconds each. Say which two or three get an example, the others are read from the slide.

### 6. What changes in the group

> Then I want to show the graphic of our Agents for Scientists, our number of commits on Git and GitHub, and how we are transforming how people use these technologies in our group. [Mere] proxies for [competency] and the most efficient activity.
>
> We're seeing [a] shift, and particularly [a] shift [in] how comfortable people feel about using the tools. And having addressed their fears, they now believe they can do it. They've applied a growth mindset to themselves. And that in itself is the best [goal] we can have as teachers: to change the perception of our learners and bring them back to believing in themselves, being capable of learning, which then [can have] better outcomes than being told that you have to learn a certain tool, or that we should force every PhD to learn Git.

> Commits, pull requests, comments and so on may be imperfect proxies for competency or research quality, but they show the shift towards actively working with version control systems, which is the aim. Once we have everyone using the tools comfortably, we can increase our overall potential for collaborative work that leads to competency and quality.

> And it moves people into a different mindset for project and folder organization, file management and so on. The folder as the unit of an output (a manuscript, a dataset, a piece of software) to which tasks (issues) are attached where they belong: in the issue tracker, not separate from the folder itself and buried in email, Asana, Todoist and the likes.

> "Claude Code? Codex? Clearly these aren't for me and only for people writing code." What terrible wording for a more powerful chat window.

Decided: the term growth mindset stays. The 7 of 14 go in. The agents part stays as it is in these words, because the Git for Scientists work is agents work too: these elements are what opens people up to agentic AI.

Slide plan:

- Slide 11, "Commits by group member: each bar is one person", the chart of the RDC talk (id `s-persons`), drawn here from a code chunk. A dot marks the 14 people trained in the workshops. 7 of them have no commit on GitHub since. My line: "They might have committed their work, but not pushed. Commit and push, commit and push."
  - Fact check for the line: the data counts commits that reached GitHub, so work that is committed and not pushed cannot be told apart from no work. That supports the line.
  - TODO: look at the 7. The talk data holds ranks only, no names (ranks 29 to 35, each with 0 commits; one more trained person has 1). Who they are, which workshop they took and what they work on is a look in ghedata, outside this public repository.
- Slide 12, the proxy slide: the reviewer's sentence from the RDC talk ("useful process indicators, but they are imperfect proxies for genuine competency"), then my answer above: the shift towards working with version control is the aim.
- Slide 13, "Fixed mindset, growth mindset": the RDC slide (id `s-mind`), "I'm not good." and "I can learn."
- Slide 14, "Voices from GHE": only if I manage to give the talk to the group before 30 November.
  - TODO: decide after Thursday 26 November. Without the practice run in the group this slide is out.
- Slide 15, "Why Git first, then agents": the folder as the unit of an output, with its tasks as issues where they belong. Version control is what connects a prompt to its changes.
- Slide 16, the quote in large type: "Claude Code? Codex? Clearly these aren't for me and only for people writing code." Then: a more powerful chat window with a terrible name.

### 7. Last week: my own workshop as the test

> I myself apply these principles in my own teaching. Last week I was at the Research Data Conference and I taught my first hour of my Git for Scientists workshop. All participants worked through the pre-work tasks. They completed them, some in time, some didn't.
>
> Everything I've learned about this one week [after] my workshop itself, and how people [can] understand how they could apply this to [their] own teaching, specifically through a feedback round.

This section looks good for now and may need cutting later.

Slide plan, all six from the draft deck:

- Slide 17, "Research Data Conference 2026: experts as learners": about 30 data professionals taught as beginners, pre-work before the day.
- Slide 18, "Who was in the room": chart of Git experience from the pre-course survey (n = 27), code chunk on `data/survey_counts.csv`.
- Slide 19, "The failure of the day": the feedback board that did not open in the room, flipcharts set up in the break.
- Slide 20, "What the room wrote": chart of the 65 post-it notes by flipchart, went well and did not go well (preparation 9 and 6, interaction 10 and 6, presentation 11 and 6, content 7 and 10), with post-it photos.
- Slide 21, "My own blind spots": what the room named that I had not seen.
- Slide 22, "The loop": teach, collect on post-its, turn into data, change the material.
- First cuts if the talk runs long: slides 19 and 22.

### 8. Close

No words yet.

- TODO: write the closing words.
- TODO: slide 23. The "Four checks for your teaching material" are out for now, I do not like them yet. Three other closes to choose from:
  - One ask, from my own workshop slide: "If you teach a technical tool, take an instructor training." It answers the second question of the opening.
  - One thing for the next workshop: film one session and count "just", "quickly", "easily".
  - The opening again: "Please stand up if you will look at your teaching material differently next week."
- Slide 24, "Thank you": the two course sites, the citation and funding line from <https://github.com/gitforsci>, the declaration of AI use.

## Time budget

| Section | Slides | Minutes |
|------------------------|------------------------|------------------------|
| 1\. Opening, everyone stands up | 1 to 2 | 2 |
| 2\. Where my teaching comes from | 3 to 4 | 2 |
| 3\. Just, quickly, easily | 5 to 7 | 3 |
| 4\. Motivation and demotivation, with 30 seconds of silence | 8 to 9 | 3 |
| 5\. How I teach | 10 | 2 |
| 6\. What changes in the group | 11 to 16 | 4 |
| 7\. Last week's workshop | 17 to 22 | 3 |
| 8\. Close | 23 to 24 | 1 |
| Total | 24 | 20 |

24 slides in 20 minutes is tight, and standing up takes longer than a show of hands. The rehearsal on Thursday 26 November decides the cuts. First candidates: slide 7, slide 12 merged into slide 11, slide 14, slides 19 and 22.

## Open TODOs

1.  Slide 5 and slide 7: choose the photos.
2.  Slide 10: say which two or three of the six points get an example.
3.  Slide 11: look at the 7 trained people without a commit on GitHub.
4.  Slide 14: voices from the group, decide after Thursday 26 November.
5.  Section 8: closing words and the closing slide.
