import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import prettier from '@vue/eslint-config-prettier';
import typescript from '@vue/eslint-config-typescript';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue,js,jsx,cjs,mjs}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  ...typescript({
    extends: ['recommended'],
  }),
  prettier,
  {
    name: 'app/config-files',
    files: ['*.config.js'],
    languageOptions: {
      globals: {
        node: true,
      },
    },
  },
];
