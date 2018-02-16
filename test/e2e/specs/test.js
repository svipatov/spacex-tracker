const selectors = {
  header: '.header .title'
}

module.exports = {
  'Check for title existence': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent(selectors.header)
      .assert.containsText(selectors.header, 'SpaceX')
      .end()
  }
}
