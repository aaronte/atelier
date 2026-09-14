# `@aaronte/tsconfig`

Strict TypeScript bases. Apps extend them. Apps do not fork them unless the compiler needs a different module or JSX setting.

## Install

```bash
npm install -D github:aaronte/atelier#path:packages/tsconfig
```

## Extend it

```json
{
  "extends": "@aaronte/tsconfig/base.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "lib": ["ES2022", "DOM", "DOM.Iterable"]
  },
  "include": ["src"]
}
```

`base.json` is Node-first and strict. Add DOM libs and JSX in the app.

## What is on

- `strict`
- `noUncheckedIndexedAccess`
- `exactOptionalPropertyTypes`
- `verbatimModuleSyntax`
- `isolatedModules`

Catch the hole at compile time. Do not paper it over with `any`.
