import { defineConfig } from "eslint/config";
import eslintConfig from "./eslint.js";
import perfectionistConfig from "./perfectionist.js";
import stylisticConfig from "./stylistic.js";

const config = defineConfig({
  extends: [eslintConfig, stylisticConfig, perfectionistConfig],
  name: "@joshuaavalon/eslint-config-javascript"
});

export default config;
