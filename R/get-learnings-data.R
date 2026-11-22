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
