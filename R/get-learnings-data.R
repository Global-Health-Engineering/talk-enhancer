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
write.csv(
  talk_data$github$commits_by_person,
  file.path("data", "commits_by_person.csv"),
  row.names = FALSE
)
