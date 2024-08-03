import globals from "globals";
import pluginJs from "@eslint";
import tseslint from "typescript-eslint";

export default [
  {files: ["**/*.{js,mjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
