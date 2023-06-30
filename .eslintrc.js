module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "standard"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  rules: {
    "vue/max-attributes-per-line": ["error", {
      singleline: {
        max: 5
      },
      multiline: {
        max: 1
      }
    }],
    "vue/first-attribute-linebreak": [2, {
      singleline: "beside",
      multiline: "below"
    }],
    // 闭合括号在多行标签属性的情况下换行单独占据一行
    "vue/html-closing-bracket-newline": 2,
    "vue/html-indent": 2,
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    // 禁止使用 props 中的保留名称
    "vue/no-reserved-props": ["error", {
      vueVersion: 3 // 2 or 3
    }],
    // 多个单词命名组件名
    "vue/multi-word-component-names": 0,
    // 使用中划线命名标签属性
    "vue/attribute-hyphenation": [2, "always"],
    // 属性值使用双引号, （'avoidEscape': true）除非字符串中包含双引号
    "vue/html-quotes": [2, "double", { avoidEscape: true }],
    quotes: [2, "double", {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    indent: ["error", 2],
    "no-tabs": 0,
    "no-mixed-spaces-and-tabs": "error",
    "comma-dangle": 0,
    "no-undef": 0,
    "vue/no-mutating-props": 0,
    "no-debugger": "off",
    "no-console": "off"
  }
}
