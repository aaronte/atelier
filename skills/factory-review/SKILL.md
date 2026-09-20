---
name: factory-review
description: >-
  Independent review loop for factory PRs until checks, evidence, and a
  second-pass review are clean. Use before marking a queue item ready,
  when babysitting review comments, or when the user wants high
  confidence. Greptile optional; local loop always runs.
---

# Review

The agent that wrote the change does not get to declare it ready.
This skill is the confidence gate. It wraps the *idea* of
[greploop](https://github.com/michaelshimeles/skills/blob/main/greploop/SKILL.md)
and pstack babysit without requiring Greptile.

## Ready checklist

All must be true. One miss → not `ready`.

1. Isolated branch, not `main`.
2. The project's typecheck, lint, and test scripts do not regress vs
   `origin/main`. New failures on this branch are blocking. Failures
   already on `origin/main` (same file and rule; line numbers may
   shift) are recorded in the PR body and do not block `ready`.
3. `/verify-<app>` (or an explicit `inconclusive` that the human accepted)
   covers every feature-map entry the diff can break.
4. Evidence is linked from the PR body (paths or uploaded media).
5. Independent review pass is clean (see below).
6. Diff stays on the assigned task. No drive-by refactors.
7. Invariants in `AGENTS.md` still hold.

## Independent pass

Spawn a review subagent (different model family when the harness
allows; otherwise a fresh subagent). When a model is named, use
Gemini 3.8 Flash (`gemini-3.8-flash`), not Claude Fable 5.1 Max.
Give it only:

- the PR diff
- `AGENTS.md` invariants
- the prove artifacts

It must not implement the fix in the same breath as the first read.
It returns: findings (blocking / nit / noise) and a verdict
`clean` | `changes-requested`.

You then:

- Fix blocking findings, push, rerun checks + the failed prove slice.
- Reply to nits or skip with a one-line reason.
- Disprove noise on the thread (or in the PR body if there is no
  comment yet).
- Repeat up to **3** independent passes. If still dirty, mark the
  queue item `blocked` and hand the PR back.

If Greptile is installed on the repo, trigger it after the local loop
and treat unresolved Greptile comments as blocking unless you can
disprove them. Do not fail the factory because Greptile is absent.

## PR body

Must include:

- What changed and why
- `done when` and the commands/evidence that prove it
- Risks / follow-ups
- Queue id (`Q-xxx`) when one exists

Review does not merge. After this skill returns `ready`, the playbook
must call `/factory-land` unless the user said `don't merge`. Leaving
a ready PR as draft, or refusing to merge without that opt-out, is a
factory bug.
