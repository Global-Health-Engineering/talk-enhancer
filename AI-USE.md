# Use of AI tools in this talk

Draft of 26 November 2026, written by Claude Code from the history of this repository, for Lars to correct.

The last slide of the deck says: "I wrote the outline of this talk in my own words. Claude Code (Anthropic) built the slides, the charts and the drawings from it and revised them on my instructions. I reviewed every change." This is the full declaration.

## Tool

Claude Code (Anthropic), run on the speaker's laptop in several sessions between 22 and 26 November 2026.

## What the speaker did

- The idea and the argument of the talk, the opening with the two questions to the room, and the message at the end.
- The outline, [outline.md](outline.md): the talk in his own words, section by section, with his answers to the open points.
- The teaching the talk reports on: the workshops, the feedback round at the Research Data Conference 2026, and the post-it notes and survey answers that came out of it.
- Every decision on content: which slides stay, move or go, which numbers and which notes of the room are shown, and what is said on each slide.
- Two timed runs of the talk, on 24 and 26 November 2026. After each one he said what to change, slide by slide.
- Review of each version of the deck.

## What Claude Code did

- **The outline as a file.** It wrote the speaker's notes of 23 November 2026 into `outline.md` and added the slide plan below his words. His words stand in quote blocks.
- **The deck.** All code of the deck, [slides/deck.qmd](slides/deck.qmd) and [slides/deck.scss](slides/deck.scss), built from the outline and revised on the speaker's instructions.
- **The charts.** The R code of the three charts in the deck, and the script [R/get-learnings-data.R](R/get-learnings-data.R) that copies the feedback and survey counts into `data/`.
- **The drawings.** The script [slides/img/make_drawings.js](slides/img/make_drawings.js), which draws the sketches from lists of shapes. The speaker said what each drawing shows.
- **The speaker notes.** First versions from the outline, then rewritten after each timed run to the wording the speaker used. Sentences he ruled out are listed in the notes as "Do not say".
- **Review.** Before the first timed run, agents in several roles read the deck and wrote feedback. The speaker decided which points to take up.
- **Checks.** Rendering, screenshots of slides, the wording of the post-it notes against the data, and the two references against Crossref.

## What this means for the slides

- No step of rendering the slides calls an AI tool. The deck is rebuilt from the sources with R and Quarto.
- Every number on a chart is computed from the files in `data/`. The numbers in the speaker notes are typed by hand.
- The post-it notes on the rubric slide are in the words of the room. Capitals and one spelling are normalised.
- The words spoken in the talk are the speaker's.

## Record

Each commit that Claude Code wrote carries the line `Co-Authored-By: Claude` in its message, so the history of this repository shows which changes came from the agent: <https://github.com/Global-Health-Engineering/talk-enhancer/commits/dev>. The outline and the commits that built the deck from it can be compared there. The prompts of the sessions are not kept in this repository.
