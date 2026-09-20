# Verification map

Each consuming app owns this file. Atelier ships the empty shape.
Replace `verify-app` with `verify-<app>` and list this product's
user-facing features. Do not copy another app's feature files here.

## Baseline preconditions

- Launch per the sibling `SKILL.md` on an origin this run owns.
- Doctor must pass for the surfaces you will drive.
- Never drive an instance you did not start.

## Driving conventions

- Start from the feature file's entry point.
- Prefer labels and roles in the skill's handle table.
- Treat every command as literal.
- Restore or archive rows this run inserted. Do not delete proof.

## Proof and skip reporting

- Capture the action and the resulting state.
- UI proof: screenshot or ARIA snapshot with an identity string visible.
- HTTP proof: command, status, headers, body excerpt.
- Record the feature file used on every artifact.
- An unmet precondition is `untested` / `inconclusive`, not a pass
  through a different path.

## Features

Add one markdown file per user-visible slice. Example names only —
delete these lines and write the real map:

- `marketing.md` — signed-out marketing / docs
- `auth.md` — login gate
- `core.md` — the behavior this app exists to do
