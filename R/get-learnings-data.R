# Copies the feedback data of the RDC 2026 workshop from a local clone of
# the learnings repository (github.com/gitforsci/learnings, private) into data/.
# The deck reads the copies in data/, so it renders without that clone.
learnings <- Sys.getenv(
  "LEARNINGS_PATH",
  "~/Documents/gitrepos/context-gitforsci/gh-org-gitforsci/learnings"
)

files <- c("feedback_items.csv", "survey_counts.csv")
file.copy(
  from = file.path(learnings, "data", files),
  to = file.path("data", files),
  overwrite = TRUE
)

# Copies the commits by group member from the data file of the RDC 2026 talk
# (github.com/Global-Health-Engineering/rdc-2026, built there from the ghedata
# package). One row per person, by rank, without names.
rdc <- Sys.getenv(
  "RDC_PATH",
  "~/Documents/gitrepos/gh-org-global-health-engineering/rdc-2026"
)
talk_data <- jsonlite::fromJSON(file.path(rdc, "talk", "shared", "data.json"))

# The source counts everyone who committed in the group's organisations in the
# twelve months, students included. The talk shows group members only (decided
# on 24 November 2026): the trainer, the 14 people trained in a workshop, and
# two group members who are not trained. The other people without a workshop
# are students and are left out. One of the two group members has commits
# under a second identity (a row of its own in the source), which is added to
# the first. The rows are picked by their rank in the snapshot of 11 November
# 2026; with a new snapshot these ranks have to be checked again.
persons <- talk_data$github$commits_by_person
members_not_trained <- c(12, 15)
second_identity <- c(from = 25, to = 12)

from <- persons$rank == second_identity[["from"]]
to <- persons$rank == second_identity[["to"]]
persons$commits[to] <- persons$commits[to] + persons$commits[from]
persons$assisted[to] <- persons$assisted[to] + persons$assisted[from]

persons <- persons[persons$workshop != "none" | persons$rank %in% members_not_trained, ]
persons <- persons[order(-persons$commits, persons$workshop), ]
persons$rank <- seq_len(nrow(persons))

write.csv(
  persons,
  file.path("data", "commits_by_person.csv"),
  row.names = FALSE
)
