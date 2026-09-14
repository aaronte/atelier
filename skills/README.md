# Skills

Agent skills are folders with a `SKILL.md`. The file has YAML frontmatter (`name`, `description`) and the instructions the agent should follow.

Atelier ships them under `skills/<name>/SKILL.md` so [`npx skills add`](https://github.com/vercel-labs/skills) can find them.

## Install in another app

Preferred:

```bash
npx skills add aaronte/atelier
```

The CLI detects Cursor, Claude Code, and Codex and copies each skill into the right place. Re-run to update.

Install one skill:

```bash
npx skills add aaronte/atelier --skill factory
```

Design is [Impeccable](https://impeccable.style/). Require it like pstack (`npx impeccable install`). Do not vendor it here. Apps keep `DESIGN.md` and `PRODUCT.md`. [Hallmark](https://www.usehallmark.com/) is optional for greenfield marketing pages — not the default.

## Skills in this repo

| Skill | What it is |
| --- | --- |
| [`factory`](factory/SKILL.md) | Router + playbooks. `/factory` picks a beat and stays there. |
| [`factory-isolate`](factory-isolate/SKILL.md) | Branch / worktree before code. |
| [`factory-build`](factory-build/SKILL.md) | Domain vs routes. Structured results. |
| [`factory-prove`](factory-prove/SKILL.md) | Repo checks + `/verify-<app>` evidence. |
| [`factory-review`](factory-review/SKILL.md) | Independent pass. Author does not grade their own work. |
| [`factory-land`](factory-land/SKILL.md) | Undraft + squash-merge after `ready`. |

`verify-<app>` is not here. Stamp [`templates/verify-app/`](../templates/verify-app/) in the consuming app.

The factory also needs files that are not skills. Copy those from [`templates/`](../templates/).

## Fallback: copy by hand

If the CLI is not available, copy the skill folder:

| Agent | Path |
| --- | --- |
| Claude Code | `~/.claude/skills/<name>/` |
| Cursor (this repo) | `.cursor/skills/<name>/` |
| Cursor (user) | `~/.cursor/skills/<name>/` |
| Codex (user) | `~/.codex/skills/<name>/` |
| Codex (project) | `.codex/skills/<name>/` |

Keep the folder name and `SKILL.md` together. Do not flatten the file into a rule unless the agent requires it.

## Adding a skill here

1. Create `skills/<name>/SKILL.md`.
2. Put `name` and `description` in the frontmatter. The description is how the agent decides to load it.
3. Keep the body short. Link a `references/` file if the rule-set grows.
4. Mention the skill in the root README if apps should install it.

Do not put secrets, private app paths, or unreleased product details in a skill. This repo is public.
