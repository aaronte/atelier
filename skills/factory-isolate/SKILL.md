---
name: factory-isolate
description: >-
  Start a factory task on an isolated branch (worktree when the harness
  does not already isolate). Use at the beginning of every new feature,
  fix, or queued item — before writing code. Wraps michaelshimeles
  new-feature.
---

# Isolate

Every task gets its own branch from the latest `origin/main`. Never
build on `main`. Never reuse another agent's branch or worktree.

Wraps [new-feature](https://github.com/michaelshimeles/skills/blob/main/new-feature/SKILL.md).
If that skill is installed, follow it and apply the harness deltas and
conventions below.

## Harness deltas — read first

- **Cursor cloud / assigned branch** (including `cursor/*-NNNN` and
  `worktree-*`): keep the assigned branch and checkout. Skip creating a
  second worktree. Still do Sync and Scope check.
- **Claude Code**: the harness owns `.claude/worktrees/<task>`. Skip
  manual `git worktree add`. Still do Sync and Scope check.
- Any other harness: follow every step.

## Steps

1. **Sync**: `git fetch origin main`.

2. **Scope check**: list open PRs and their files (`gh pr list`,
   `gh pr diff --name-only`). If this task needs files another open PR
   is editing, **stop and ask**. Also check for uncommitted work in
   shared checkouts.

3. **Name the task**: lowercase-with-hyphens. Cloud agents already on a
   required branch name keep that name.

4. **Create isolation** (local / unmanaged harnesses only), from the
   repo root:

   ```bash
   git worktree add .worktrees/<task-name> -b agent/<task-name> origin/main
   cd .worktrees/<task-name>
   git branch --show-current   # must not print main
   # install with the project's package manager (often pnpm)
   ```

   `.worktrees/` is gitignored. Never commit a worktree.

5. **Enter and verify** you are not on `main`. Confirm the runtime and
   package manager from `package.json` (do not assume a pin).

## Remember

- Worktrees do not isolate ports or datastores. Confirm the origin you
  chose answers *your* process before trusting it.
- Keep the worktree until the PR is merged or closed. Cleanup:

  ```bash
  git worktree remove .worktrees/<task-name>
  git branch -D agent/<task-name>
  ```
