module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: ["@configs/eslint-config"],
  ignorePatterns: ["dist", "esm", ".eslintrc.cjs"],
  rules: {},
}
