# @joshuaavalon/eslint-config-javascript

[![NPM Version](https://img.shields.io/npm/v/%40joshuaavalon%2Feslint-config-javascript)](https://www.npmjs.com/package/@joshuaavalon/eslint-config-javascript)

This is the opinionated ESLint configuration repository that used by myself.
Not support is guaranteed. Use as your own risk.

This configuration include both lint and format rules which may cause conflicts with other formatter like Prettier.

> For <10.0.0, please check https://github.com/joshuaavalon/eslint-config.

## Getting Started

```
npm i -D eslint @joshuaavalon/eslint-config-javascript
```

```js
// eslint.config.js
import jsConfig from "@joshuaavalon/eslint-config-javascript";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";


export default defineConfig([
  globalIgnores(["**/node_modules", "**/dist"], "Ignore Default Files"),
  {
    extends: [jsConfig],
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: { globals: { ...globals.node } },
    name: "JavaScript Config"
  }
]);
```
