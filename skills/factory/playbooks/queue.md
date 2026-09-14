# Queue

Drain `factory/queue.md`. One item per branch. Each item lands unless
the user said `don't merge`.

1. Read `factory/queue.md`. List `queued` items in file order.
2. If the user named an id, take that one. Otherwise take the first `queued` item. If none, stop and say the queue is empty.
3. Confirm the item has a checkable `done when`. If it does not, write one into the item and proceed.
4. Read `factory-isolate` and isolate. Claim the item (`claimed`, owner, branch).
5. Run the item's playbook (`feature` or `bug-fix`) by opening that playbook and copying its remaining steps into the todo list verbatim. Do not invent a shorter plan.
6. When that playbook finishes, if the user asked to drain / continue / overnight, pick the next `queued` item on a **new** isolate (new branch). Never stack a second item onto a dirty branch.
7. If prove fails twice on the same item, set `status: blocked` with the reason and continue to the next item only when the user asked to drain.
8. End with a table of id, status, PR URL. Status should be `landed` unless the user opted out of merge.

Overnight contract: do not ask before committing on the task branch. Keep `.artifacts/<task>/decisions.tsv` (time, step, decision, reason, evidence, result). If truly stuck after two prove loops, block and write why — do not quietly relax `done when`.
