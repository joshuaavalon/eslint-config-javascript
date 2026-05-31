import jsConfig from "@joshuaavalon/eslint-config-javascript";
import tsConfig from "@joshuaavalon/eslint-config-typescript";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

export default defineConfig([
  globalIgnores(["**/node_modules", "**/dist"], "Ignore Default Files"),
  {
    extends: [jsConfig],
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: { globals: { ...globals.node } },
    name: "JavaScript Config"
  },
  {
    extends: [tsConfig],
    files: ["**/*.ts"],
    languageOptions: { globals: { ...globals.node } },
    name: "TypeScript Config"
  }
]);
