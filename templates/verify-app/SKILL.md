---
name: verify-app
description: >-
  Stub. Rename this skill to verify-<app> and fill in launch, doctor,
  drive, and a feature map for this product. Use when proving a factory
  change or when asked to verify the app the way a user does.
---

# Verify `<app>`

**TODO:** Replace this stub. Copy the folder to
`.cursor/skills/verify-<app>/`, set `name: verify-<app>`, and write
this product's surfaces. Do not keep the `verify-app` name in a
shipping repo.

Primary surface: the app origin this run owns (write it in
`.artifacts/<task>/origin.txt`). Secondary surfaces: HTTP APIs the
feature map names.

Read `features/README.md`, then the feature file for the behavior
under test. A proof that drives one convenient entry point is
incomplete when the map lists others.

## Launch

Start the app from the task checkout with the **project package
manager** (often `pnpm`). Do not drive an instance you did not start.

Ready when the origin returns the identity string you document here
(homepage H1, health payload, or equivalent).

Teardown: kill only the PID you started. Never `pkill` the whole
stack.

## Doctor

Read-only. Confirm the listener is yours, then hit the ready URL.
Unmet env (no database, no auth) is `untested` / `inconclusive` for
those surfaces — not a pass through a different path.

## Drive

Prefer the browser. Prefer ARIA names and labels over CSS or
coordinates. HTTP recipes are valid evidence for APIs and redirects.

If you cannot sign in, mark signed-in features `untested` and prove
the signed-out paths.

## Evidence

Save under `.artifacts/<task>/` (gitignored). Keep proof after
cleanup. Do not record secrets, tokens, or customer data.

## Cleanup

Kill only the process this run started. Leave `.artifacts/<task>/`
in place.
