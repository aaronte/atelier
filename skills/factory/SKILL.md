---
name: factory
description: >-
  Software factory router. Use when the user says /factory, a Linear
  issue is assigned, a cloud agent is asked to work this repo, queues a
  feature, asks to run the factory, drain the queue, or ship a change
  autonomously with isolate-build-prove-review. Picks a playbook and
  runs factory-* plus verify-<app>, then poteto-mode.
disable-model-invocation: true
---

# Factory

Stop micromanaging the steps. The user gives a goal and a finish
condition. You pick one playbook, copy its steps into the todo list
verbatim, and call the beat skills as those steps fire.

Read the app's `AGENTS.md` and `factory/README.md` before matching a
playbook. If `factory/README.md` is missing, the app has not stamped
the factory yet — copy it from Atelier `templates/factory/` first.

After claiming the queue item and writing the finish condition, read
pstack `/poteto-mode` and run the rest of the work in that style.
Use `subagent_type: "poteto-agent"` for playbook delegates. Linear
issues and cloud-agent assignments are factory items. Do not skip
poteto-mode because the prompt came from Linear instead of a slash
command. This app's queue, invariants, and `/verify-<app>` still
govern.

Visual design / taste passes are out of scope for the factory. Do not
route to a design playbook. If the request is only visual, point at
Hallmark and stop.

## First todos (mandatory)

1. Read the invariants in `AGENTS.md`.
2. Match one playbook below. Open the file. Copy every numbered step
   into the todo list **verbatim** before any task-specific todos.
3. A skipped step stays in the list as `skip: <reason>`. Silent skips
   are not allowed.

## Match a playbook

| Signal | Playbook |
|---|---|
| New or changed user-visible behavior, a named data shape | [`playbooks/feature.md`](playbooks/feature.md) |
| Something is broken; repro first | [`playbooks/bug-fix.md`](playbooks/bug-fix.md) |
| Linear issue or cloud-agent assignment (no defect) | [`playbooks/feature.md`](playbooks/feature.md) |
| `/factory next`, drain the queue, overnight backlog | [`playbooks/queue.md`](playbooks/queue.md) |
| Review this PR/diff, raise confidence, babysit comments | [`playbooks/review.md`](playbooks/review.md) |
| Open the PR, get it merge-ready, land unless `don't merge` | [`playbooks/ship.md`](playbooks/ship.md) |

Default to **feature** when the user describes new behavior. Default to
**queue** when they say `next` or point at `factory/queue.md` without a
specific item. If nothing fits, write a three-step plan (isolate, one
build slice, prove) and say you invented it — do not pretend a playbook
matched.

A duration is not a finish condition. If the user omitted `done means`,
write one in your own words and confirm it in the first reply, then
proceed.

## Beat skills

Call these by reading the matching `SKILL.md` when the playbook step
names them (installed as `.cursor/skills/<name>/` in the app):

- Isolate → `factory-isolate`
- Build → `factory-build`
- Prove → `factory-prove`
- Review / ship confidence → `factory-review`
- Land → `factory-land`
- Drive the app → `verify-<app>` (lives in the consuming app, not Atelier)

## Sticky mode

Follow-ups stay in this factory run (`continue`, `do it`, `keep going
until done`). Say `new task` to re-match a playbook.

## Reply shape

Lead with what you did and the evidence. End with the PR URL and
whether it landed. Never claim `ready` without the checklist in
`factory/README.md`. Never leave a ready PR as draft.
