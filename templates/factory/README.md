# Software factory

Queue a feature. An agent isolates, builds, proves, opens a PR with
evidence, and lands it when review is clean. Visual design is out of
scope here — use [Hallmark](https://www.usehallmark.com/).

A software factory is the workflows, skills, and domain knowledge — not a
new harness. This stamp comes from [aaronte/atelier](https://github.com/aaronte/atelier)
and wraps:

- [michaelshimeles/skills](https://github.com/michaelshimeles/skills) —
  isolate → build → prove → ship
- [pstack](https://github.com/cursor/plugins/blob/main/pstack/docs/guide/README.md) —
  goal + finish condition, playbooks, overnight queue
- poteto-mode — skills and review confidence over more agents

`/factory` is the front door. After the queue claim and a checkable
`done when`, the run follows `/poteto-mode`. Linear issues and
cloud-agent assignments enter here the same way. The queue, this app's
invariants, and `/verify-<app>` still govern.

## Start a run

Give a goal and a way to check it:

```text
/factory add the thing.
done means <checkable predicate>
and the project checks + the matching verify-<app> recipe pass.
```

Or claim the next queued item:

```text
/factory next
```

Or drain the queue overnight (lands each ready item):

```text
/factory drain the queue. keep a decision log.
if you're stuck after two failed prove loops on an item, mark it blocked
and continue.
```

Opt out of landing with `don't merge`.

## What "ready" means

A queued item is `ready` only when all of these are true:

1. Isolated on a branch from `origin/main` (not `main`).
2. The project's typecheck, lint, and test scripts do not regress vs
   `origin/main`. Pre-existing failures stay listed in the PR; new ones
   block `ready`. Many apps use `pnpm typecheck`, `pnpm lint`, `pnpm test`.
3. `/verify-<app>` drove the matching feature-map entry (or recorded
   `inconclusive` with a reason — inconclusive is not ready).
4. Evidence lives in `.artifacts/<task>/` and is linked from the PR.
5. `/factory-review` independent pass is clean.
6. The GitHub PR is marked ready for review (not left draft).
7. `/factory-land` squash-merges unless the user said `don't merge`.

Worktrees (when the harness does not already isolate): `.worktrees/`
(gitignored). Proof artifacts: `.artifacts/` (gitignored).
