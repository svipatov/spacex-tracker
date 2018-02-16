const path = require('path')

module.exports = {
  components: 'src/components/**/*.vue',
  skipComponentsWithoutExample: true,
  webpackConfig: require('./build/webpack.dev.conf'),
  require: [
    path.join(__dirname, 'src/assets/common.scss')
  ]
}
