import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Attribix style rule: no em dash (—) in public marketing/editorial copy.
    // Scoped to public-facing pages/content; the logged-in /analytics dashboard
    // and internal API routes are excluded since "—" is also used there as a
    // legitimate empty-value placeholder, not editorial prose.
    files: [
      "src/app/**/*.{ts,tsx}",
      "src/components/**/*.{ts,tsx}",
    ],
    ignores: ["src/app/analytics/**", "src/app/api/**"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value=/\\u2014/]",
          message: "No em dash (—) in marketing copy. Use a period, comma, colon or parentheses instead.",
        },
        {
          selector: "JSXText[value=/\\u2014/]",
          message: "No em dash (—) in marketing copy. Use a period, comma, colon or parentheses instead.",
        },
        {
          selector: "TemplateElement[value.raw=/\\u2014/]",
          message: "No em dash (—) in marketing copy. Use a period, comma, colon or parentheses instead.",
        },
      ],
    },
  },
];

export default eslintConfig;
