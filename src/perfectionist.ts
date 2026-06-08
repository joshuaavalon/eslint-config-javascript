import perfectionistPlugin from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";
import type { Linter } from "eslint";
import type { rules as perfectionistRules } from "eslint-plugin-perfectionist";
import type { Prefix } from "./utils.js";

type OmitRules =
  | "@perfectionist/sort-interfaces"
  | "@perfectionist/sort-intersection-types"
  | "@perfectionist/sort-jsx-props"
  | "@perfectionist/sort-modules" // Break define first
  | "@perfectionist/sort-object-types"
  | "@perfectionist/sort-union-types";

type Rules = Record<Prefix<keyof typeof perfectionistRules, "@perfectionist/">, Linter.RuleSeverityAndOptions>;

const rules: Omit<Rules, OmitRules> = {
  "@perfectionist/sort-array-includes": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: false,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-classes": ["off"],
  "@perfectionist/sort-decorators": ["off"],
  "@perfectionist/sort-enums": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: true,
      partitionByNewLine: false,
      sortByValue: "ifNumericEnum",
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-export-attributes": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: false,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-exports": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: false,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-heritage-clauses": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      specialCharacters: "keep",
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-import-attributes": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: false,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-imports": [
    "error",
    {
      groups: [
        "builtin",
        "external",
        "internal",
        "parent",
        "sibling",
        "side-effect",
        "index",
        "side-effect-style",
        "unknown"
      ],
      ignoreCase: true,
      internalPattern: ["^~/.+", "^@/.+", "^#.+", "^#.*/.*"],
      newlinesBetween: "ignore",
      order: "asc",
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-maps": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: true,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-named-exports": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-named-imports": [
    "error",
    {
      ignoreAlias: true,
      ignoreCase: true,
      order: "asc",
      partitionByComment: false,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-objects": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: true,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-sets": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: true,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-switch-case": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      type: "alphabetical"
    }
  ],
  "@perfectionist/sort-variable-declarations": [
    "error",
    {
      ignoreCase: true,
      order: "asc",
      partitionByComment: true,
      partitionByNewLine: false,
      type: "alphabetical"
    }
  ]
};

const config = defineConfig({
  name: "@joshuaavalon/eslint-config-javascript/perfectionist",
  plugins: { "@perfectionist": perfectionistPlugin },
  rules
});

export default config;
