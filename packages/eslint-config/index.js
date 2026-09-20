/**
 * @aaronte/eslint-config
 *
 * Flat config an agent can run and fix. Core ESLint only — no extra plugins.
 * Design-system rules can grow later toward https://github.com/shadcn-ui/lint
 *
 * @type {import("eslint").Linter.Config[]}
 */
const recommended = [
  {
    name: "@aaronte/recommended",
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      eqeqeq: ["error", "always", { null: "ignore" }],
      "no-var": "error",
      "prefer-const": "error",
      "no-debugger": "error",
      "no-eval": "error",
      "no-with": "error",
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "default-case-last": "error",
    },
  },
]

export default recommended
export { recommended }
