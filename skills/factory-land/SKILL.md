---
name: factory-land
description: >-
  Land a factory PR that is already ready: undraft it, squash-merge, mark
  the queue item landed. Use after factory-review is clean, when shipping,
  or when the user asks why the factory will not merge. Skip if the user
  said don't merge.
---

# Land

`ready` is not the end of the factory. A ready PR that stays draft, or
that an agent refuses to merge, is a stuck factory. This skill lands
only after the ready checklist in `factory-review` is green.

The author still does not grade the work. Land does not re-implement.
It publishes a PR that review already passed.

## Do not land when

- The queue item is not `ready` (or the ready checklist is not green).
- The user said `don't merge` / `stack, don't ship` / `I'll land it`.
- Mergeability is not `MERGEABLE` (conflicts, failing required checks
  that this branch introduced).
- You would be merging `main` into itself.

Pre-existing lint/test failures that also exist on `origin/main` do
not block land. New failures do.

## Steps

1. Confirm `factory/queue.md` status is `ready` and the PR URL is set.
2. Confirm `git diff origin/main...HEAD` is the assigned task only.
3. Mark the GitHub PR **ready for review** (not draft). Drafts cannot
   be merged. In Cursor, `ManagePullRequest` `update_pr` with
   `draft: false`. Do not leave it draft after this step.
4. Recheck mergeability. If not `MERGEABLE`, stop and set the queue
   item `blocked` with the GitHub merge state.
5. Squash-merge the PR (`merge_method: squash`). Prefer the GitHub
   merge tool / `gh pr merge --squash` only if the Cursor PR tool
   cannot merge. The merge commit title should state what landed, not
   "merge branch".
6. Set the queue item to `landed`. Record the merge SHA if you have it.
7. Do not delete the worktree until GitHub shows the PR merged.

## Reply

PR URL, merge SHA or "merged", queue id now `landed`.
