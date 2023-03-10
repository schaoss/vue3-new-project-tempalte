module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
    requireConfigFile: false,
    parser: '@babel/eslint-parser',
  },
  plugins: ['vue', 'prettier'],
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  rules: {
    semi: ['warn', 'never'],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty': 'warn',
    'no-extra-parens': 'warn',
    'no-lone-blocks': 'warn',
    'no-multi-spaces': 'warn',
    'no-return-await': 'warn',
    'no-self-compare': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-trailing-spaces': 'warn',
    'no-var': 'warn',
    'no-delete-var': 'off',
    'default-case': 'warn',
    eqeqeq: 'warn',
    curly: 'warn',
    'space-before-blocks': 'warn',
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
    'arrow-spacing': 'warn',
    'array-bracket-spacing': 'warn',
    'brace-style': 'warn',
    camelcase: 'warn',
    indent: ['warn', 2],
    quotes: ['warn', 'single', 'avoid-escape'],
    'vue/singleline-html-element-content-newline': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/require-default-prop': 0,
  },
}
