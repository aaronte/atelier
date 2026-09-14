# Feature

New or changed behavior. You own the design. Plan, review, verify.
Delegate implementation when a subagent helps; stay in the lead.

1. Read `factory-isolate` and isolate this task (scope check, branch or worktree, never `main`).
2. If the item is in `factory/queue.md`, claim it (`status: claimed`, owner, branch, Linear id when present). If it is not, append a `claimed` item with the finish condition and the Linear id.
3. `how`: read the affected files and name the data shape before editing (state machine, table, or typed model — not scattered booleans).
4. Read `factory-build` and write the smallest change that satisfies `done when`. Domain rules in the app's domain layer; routes/pages orchestrate.
5. Add or update a colocated test for any new pure logic.
6. Read `factory-prove` and verify on the matching `/verify-<app>` feature. Inconclusive is not a pass.
7. Read `factory-review` and open a focused PR with evidence. `ready` only after the independent pass is clean.
8. Unless the user said `don't merge`, read `factory-land` and land. Update the queue item to `landed` (or `ready` if opted out).

**Reply:** what you built, what you chose and why, evidence pointers, PR URL, landed or not.
