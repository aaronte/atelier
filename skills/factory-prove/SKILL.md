---
name: factory-prove
description: >-
  Prove factory work with repo checks plus runtime evidence on the real
  app. Use before calling a feature done, before opening a PR, or when
  the user wants proof instead of prose. Wraps evidence-driven-testing
  and the app's verify-<app> skill.
---

# Prove

"It compiles" is not evidence. Wrap
[evidence-driven-testing](https://github.com/michaelshimeles/skills/blob/main/evidence-driven-testing/SKILL.md)
and drive this app with `/verify-<app>`.

If the upstream evidence skill is installed and a GUI + computer-use
(or cua-driver) exists, use its recorder. Otherwise use the headless
path below. Never invent a passing result for a check you did not run.

## Checks (always)

From the task checkout, on the revision you will ship, run the
project's typecheck, lint, and test scripts. Many apps use `pnpm`:

```bash
pnpm typecheck
pnpm lint
pnpm test
```

Use whatever `package.json` defines if the names differ. All three
must pass (or the documented equivalent). Record the commit:
`git rev-parse HEAD`.

## Drive the real surface

Read the app's `verify-<app>` skill and the feature-map entry the
change touches. Launch, doctor, drive, capture, then cleanup.
Cleanup must not delete evidence.

Match the check to the change:

- UI / dashboard / public page → browser recipe in the map
- API / redirect / entitlements → HTTP probe + status/body
- Pure domain → the unit test you added is the evidence; still run the
  suite, not a single file in isolation if neighbors import the change

Wrong surface or skipped auth is `inconclusive`, not a pass.

## Headless evidence (default here)

Write everything to `.artifacts/<task>/` (gitignored, never commit):

- `assertions.md` — each `setup` / `test_start` / `assertion` with
  `passed` | `failed` | `untested` + reason
- Numbered captures: `01-precondition-….png`, `02-it-….png`
- HTTP: `probe-output.txt` (command, status, body excerpt)
- Optional Playwright one-off, **not** added to `package.json`.
  Install beside the script if the environment cannot resolve the ESM
  import from `npx --package=playwright`:

  ```bash
  mkdir -p /tmp/pw-verify && cd /tmp/pw-verify
  npm init -y && npm install playwright
  npx playwright install chromium
  # put drive.mjs here, then point ORIGIN at the app you started
  ```

Capture the action **and** the resulting state. For a fix, the before
repro is half the pair — take it before editing when you still can.

## Guardrails

- Confirm the server is *your* process (`ss` / `lsof` on the port).
- Do not record secrets, tokens, or customer data. Mark those paths
  `untested`.
- Evidence complements checks; it never replaces them.
- If `/verify-<app>` doctor fails (missing env for a dashboard
  recipe), say `inconclusive` and prove every part that *can* run.
