import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.ts"] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];
