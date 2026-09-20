# Bug fix

Reproduce first. The before-state is cheapest now.

1. Read `factory-isolate` and isolate this task.
2. Claim or add the queue item (`status: claimed`, Linear id when the prompt has one).
3. Reproduce the failure on the real surface and capture the before evidence (`/verify-<app>` or a failing test). If you cannot reproduce, stop and report `inconclusive`.
4. Read `factory-build`. Fix the cause, not the symptom. Keep the domain rule in the domain layer when the bug is a rule.
5. Add a regression test that failed before the fix when the logic is unit-testable.
6. Read `factory-prove`. After-evidence must show the old failure gone on the same surface.
7. Read `factory-review` and open a focused PR. `ready` only after the independent pass is clean.
8. Unless the user said `don't merge`, read `factory-land` and land. Update the queue item.

**Reply:** repro, cause, fix, before/after evidence, PR URL, landed or not.
