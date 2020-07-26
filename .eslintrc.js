// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': [0, 'always'],//引号类型 `` "" ''
    'quote-props':[0, 'always'],//对象字面量中的属性名是否强制双引号
    "semi": [0, "always"],//语句强制分号结尾
    "semi-spacing": [0, {"before": false, "after": false}],//分号前后空格
    "space-before-function-paren": 0,//函数后面不接空格
    "no-irregular-whitespace":"off",//关闭空格检查
    'eqeqeq': 'off', //允许双等号
    'indent': 'off', //不验证缩进
    "no-tabs":"off" //不验证符号

  }
}
