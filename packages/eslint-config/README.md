# `@aaronte/eslint-config`

Shared ESLint 9 flat config. A violation should tell an agent what broke.

Core rules only. No extra plugins. Later rules can grow toward
[shadcn/lint](https://github.com/shadcn-ui/lint).

## Install

Not on npm yet. Install the package from this repo:

```bash
npm install -D github:aaronte/atelier#path:packages/eslint-config
```

Requires ESLint 9 or later.

## Extend it

```js
// eslint.config.js
import atelier from "@aaronte/eslint-config"

export default [
  ...atelier,
  {
    rules: {
      // app-only overrides
    },
  },
]
```

Named export if you want it spelled out:

```js
import { recommended } from "@aaronte/eslint-config"

export default [...recommended]
```

Put `eslint .` (or your equivalent) on a `lint` script. Tell the agent to run it after edits.

## What is on

`eqeqeq` (null ignored), `no-var`, `prefer-const`, `no-debugger`,
`no-eval`, `no-with`, `no-unused-vars` (`_` ignored), `default-case-last`,
and unused `eslint-disable` directives.

Defaults that should be true in every app that uses this config. Not
product rules. Not one-off exceptions.
