# Review

Raise confidence on an existing branch or PR. The author does not grade their own work.

1. Identify the PR or branch. If neither exists, stop.
2. Read `factory-review` and run its loop (checks, independent review, evidence).
3. Drive `/verify-<app>` for every feature-map entry the diff can affect. Missing coverage is `inconclusive`, not a pass.
4. Push fixes onto the same branch. Do not widen scope.
5. Update `factory/queue.md` to `ready` only when the review skill's ready checklist is green. Otherwise `in-review` or `blocked`.
6. Unless the user said `don't merge`, read `factory-land` and land.

**Reply:** what was wrong, what was fixed, remaining risk, PR URL, landed or not.
