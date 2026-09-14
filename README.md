# Atelier

A public library of agent skills, shared configs, and a software factory
you can stamp into any app.

Named **Atelier** (A). Opinions you can install. Not a framework.

## Inspiration

Three layers. Three public sources.

| Layer | Source | What it is for |
| --- | --- | --- |
| Design | [Hallmark](https://www.usehallmark.com/) | Anti-slop design skill — build, audit, study, redesign. |
| Motion | [transitions.dev](https://transitions.dev/) | Motion as a skill, not decoration. |
| Lint | [shadcn/lint](https://github.com/shadcn-ui/lint) | Rules an agent can verify and fix. |

Taste lives in the skill. Motion lives in the transition. Enforcement lives in the linter.

## How other repos use this

### Skills

```bash
npx skills add aaronte/atelier
```

That installs the `factory*` skills into Cursor, Claude Code, and Codex.

Fallback — copy `skills/factory*` into the agent's skill path (`<name>/SKILL.md` stays a folder):

- **Claude Code:** `~/.claude/skills/<name>/`
- **Cursor:** `.cursor/skills/<name>/` (project) or `~/.cursor/skills/<name>/`
- **Codex:** `~/.codex/skills/<name>/` (personal) or `.codex/skills/<name>/` (project)

More in [`skills/README.md`](skills/README.md).

### ESLint

Depend on [`@aaronte/eslint-config`](packages/eslint-config). Not on npm yet — install from GitHub.

```bash
npm install -D github:aaronte/atelier#path:packages/eslint-config
```

pnpm and Yarn understand the same `github:aaronte/atelier#path:…` form.

```js
// eslint.config.js
import atelier from "@aaronte/eslint-config"

export default [...atelier]
```

Tell the agent to run lint after it edits. See [`packages/eslint-config/README.md`](packages/eslint-config/README.md).

### TSConfig

```bash
npm install -D github:aaronte/atelier#path:packages/tsconfig
```

```json
{
  "extends": "@aaronte/tsconfig/base.json"
}
```

Strict by default. See [`packages/tsconfig/README.md`](packages/tsconfig/README.md).

### Coming later

`@aaronte/ui` when two or more apps share a component. No empty folder until then.

The default design skill is [Hallmark](https://www.usehallmark.com/). Require it like pstack — do not vendor it here. Atelier may add thin overlays later. It will not ship a hollow design stub.

## Software factory

The same isolate → build → prove → review → land loop in every app. Atelier owns the factory and shared configs. Each app owns its queue, invariants, and `verify-<app>` map.

### 1. Require pstack and Hallmark

Do not vendor either into this repo.

```text
/add-plugin pstack
/setup-pstack
```

```bash
npx skills add nutlope/hallmark
```

### 2. Install Atelier skills

```bash
npx skills add aaronte/atelier
```

Or copy `skills/factory*` (and `skills/factory/playbooks/`) into the app's `.cursor/skills/`.

### 3. First use in an app

Stamp the templates. Start from the empty queue. Do not paste a filled-in backlog.

```text
templates/factory/queue.md              → factory/queue.md
templates/factory/README.md             → factory/README.md
templates/.cursor/rules/factory.mdc     → .cursor/rules/factory.mdc
templates/.cursor/rules/pstack-models.mdc → .cursor/rules/pstack-models.mdc
templates/verify-app/                   → .cursor/skills/verify-<app>/
```

Rename the verify stub to `verify-<app>`. Fill launch, doctor, drive, and the feature map. That skill stays in the app.

### 4. Daily

`/factory` + `/poteto-mode`. Same workflow every app. Give a goal and a `done when`. Landing is the default; say `don't merge` to stop at `ready`.

### 5. Who owns what

| Atelier | The app |
| --- | --- |
| `factory` hub + playbooks | Live `factory/queue.md` |
| `factory-isolate` / `build` / `prove` / `review` / `land` | `verify-<app>` + feature maps |
| Queue skeleton, factory rules, pstack reviewer panel | `AGENTS.md` invariants |
| Shared ESLint + tsconfig | Package manager, check scripts, ports, product code |

Reviews use Gemini 3.8 Flash on the interrogate panel (`templates/.cursor/rules/pstack-models.mdc`). Implementation models stay on pstack defaults.

More in [`templates/README.md`](templates/README.md) and [`skills/README.md`](skills/README.md).

## In scope / out of scope

**In:** opinions. Enforceable defaults. The generic software factory. Shared configs an agent can run.

**Out:** secrets. App-specific product code. Live queues. `verify-<app>` feature maps. Empty reserved packages. Anything that only makes sense inside one private app.

This repo stays public. If it cannot live in the open, it does not belong here.

## Roadmap

- Thin design overlays on top of Hallmark, if a note earns a place
- Shipping checklist skill
- ESLint rules that grow toward [shadcn/lint](https://github.com/shadcn-ui/lint)
- Motion notes drawn from [transitions.dev](https://transitions.dev/)
- Factory playbooks stay thin; apps prove new beats before they land here
- `@aaronte/ui` only after a second app needs the same component

## License

[MIT](LICENSE). Use it, fork it, ship it.
