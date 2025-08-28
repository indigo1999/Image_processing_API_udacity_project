import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import tseslint_eslint_plugin from "@typescript-eslint/eslint-plugin"
import tsparser from "@typescript-eslint/parser"
import prettierPlugin from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], 
    plugins: { 
      js ,
      "@typescript-eslint" : tseslint_eslint_plugin ,
      prettier : prettierPlugin
    }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: globals.browser ,
      parser : tsparser ,
      sourceType : "module"
    } ,
    rules : {
      ...tseslint_eslint_plugin.configs.recommended.rules,
      ...prettierConfig.rules ,
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "prettier/prettier": "error",
    }
  },
  tseslint.configs.recommended,
]);
