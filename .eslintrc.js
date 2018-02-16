// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  },
  overrides: {
    files: 'src/**/*.test.js',
    env: {
      jest: true
    },
    globals: {
      afterEach: true,
      beforeEach: true,
      config: true,
      describe: true,
      expect: true,
      it: true,
      jest: true,
      mockFn: true,
      pit: true,
      require: true,
      runs: true,
      sinon: true,
      waitsFor: true,
      xdescribe: true,
      xit: true
    }
  }
}
