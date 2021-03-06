'use strict';
module.exports = function(config) {
  config.set({
    basePath: '..',
    browsers: ['firefox_latest'],
    frameworks: [
      'mocha',
      'chai-sinon'
    ],

    client: {
      captureConsole: true,
      mocha: { 'ui': 'tdd' }
    },

    customLaunchers: {
      firefox_latest: {
        base: 'FirefoxNightly',
        prefs: {
          'dom.webcomponents.enabled': true,
          'dom.w3c_touch_events.enabled': 1
        }
      }
    },

    files: [
      'bower_components/gaia-component/gaia-component.js',
      'bower_components/drag/drag.js',
      'gaia-switch.js',
      'node_modules/test-utils/node_modules/axe-core/axe.min.js',
      'node_modules/test-utils/src/utils.js',
      'node_modules/test-utils/src/accessibility.js',
      'test/test-unit.js'
    ],

    proxies: {
      '/bower_components/': 'http://localhost:9876/base/bower_components/',
      '/node_modules/': 'http://localhost:9876/base/node_modules/'
    }
  });
};
