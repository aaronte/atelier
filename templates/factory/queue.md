# Factory queue

One item per heading. Claim the highest `queued` item, then stop.

Status: `queued` · `claimed` · `in-review` · `ready` · `landed` · `blocked`

| Status | Meaning |
|---|---|
| `queued` | Ready to claim |
| `claimed` | An agent owns it (branch named) |
| `in-review` | PR open, waiting on review/evidence |
| `ready` | Independent review is clean; factory will land unless `don't merge` |
| `landed` | Squash-merged |
| `blocked` | Stopped with a written reason |

Rules:

- One claimed item per branch per agent.
- `done when` is a predicate, not a duration.
- Agents update the row they claimed. They do not rewrite other items.
- Landing is the default after `ready`. Say `don't merge` to stop there.

---

## Template (copy, don't claim)

```markdown
## Q-000 — short title
- status: queued
- playbook: feature   # feature | bug-fix
- done when: one checkable predicate
- evidence: which verify-<app> feature file(s)
- linear:               # issue id when the item came from Linear
- owner:
- branch:
- pr:
- notes:
```

---

<!-- Agents: add items above this line. Do not delete the template. -->
