---
name: factory-build
description: >-
  Build factory work to the app's service-layer shape. Use when
  implementing a queued feature, deciding what belongs in domain vs
  routes, or extracting shared operational logic. Wraps michaelshimeles
  code-structure.
---

# Build

Wraps [code-structure](https://github.com/michaelshimeles/skills/blob/main/code-structure/SKILL.md).
If that skill is installed, follow it. The default mapping:

| Layer | Owns | Lives in |
|---|---|---|
| Orchestration | Auth, ownership, entitlements, "when" | App routes, server pages, form actions |
| Domain | Rules, structured results, "why" | Domain modules (`src/lib/*` or the app's equivalent) |
| Mechanics | Provider/SDK, cache, SQL details reused by 2+ callers | Infra modules next to the domain |

**Rule of thumb:** product meaning stays in the domain layer or the
orchestrator. Reusable "how" (cache write, provider call, id
allocate) is a function with explicit params and a structured return.

Consuming apps should replace the table paths with their own layer map
in `AGENTS.md` if they differ. Do not invent a second architecture.

## Default shape

- Prefer result unions over thrown HTTP in domain code:

  ```ts
  type Result =
    | { ok: true; /* fields */ }
    | { ok: false; status: 400 | 404; reason: "invalid" | "not_found" /* … */ };
  ```

- Routes parse input, check auth / entitlements, then call domain.
  Do not embed provider sequences in UI components.
- Tests sit next to the module (`foo.test.ts`). Test the domain helper,
  not the page.
- Do not extract a service used by only one caller.

## Anti-patterns

| Don't | Do |
|---|---|
| Inline-import to dodge a cycle | Fix the cycle or split the module |
| Non-exhaustive union/enum switches | `never` in `default` |
| Drive-by refactors on a factory item | Stay on the assigned `done when` |

## Migration

Write the flow in the orchestrator first. Extract only the repeated
non-domain chunk. Replace one caller → run the project's tests →
replace the rest.
