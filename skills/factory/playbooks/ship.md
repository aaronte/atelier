# Ship

Babysit the PR until it is `ready`, then land it. `don't merge` is the
only reason to stop at `ready`.

1. Confirm the work is isolated on a task branch (not `main`) and the queue item is claimed.
2. Rebase onto latest `origin/main` with `--force-with-lease` only if this branch was already pushed.
3. Rerun the project's typecheck, lint, and test scripts (no new failures vs `origin/main`). Use the package manager and script names in `package.json` — many apps use `pnpm`.
4. Read `factory-prove` if evidence is missing or stale against `HEAD`.
5. Read `factory-review` and open or update the PR. Evidence belongs in the body. If the PR is still draft after review is clean, that is not done — undraft is part of land.
6. Address review comments that are real. Dismiss noise with the disproof on the thread.
7. Set the queue item to `ready` only when the ready checklist is green. Otherwise `in-review` or `blocked`.
8. Unless the user said `don't merge`, read `factory-land` and land. Then set the queue item `landed`.

**Reply:** PR URL, landed or ready-with-opt-out, evidence pointers.
