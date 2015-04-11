'use strict';

var path = require('path');
var _ = require('lodash');

var PLUGIN_NAME = 'kalabox-plugin-static-port';

module.exports = function(kbox) {

  var events = kbox.core.events;
  var engine = kbox.engine;
  var globalConfig = kbox.core.deps.lookup('globalConfig');

  kbox.whenApp(function(app) {

    // Helper function to grab desired port from
    var getPort = function(component) {
      // iterate through pluginConf to see if any
      // plugin config designates a static port.
      console.log(app.config.pluginConf);
      _.forEach(app.config.pluginConf, function(n, key) {
        console.log(n, key);
      });
    };

    // Events
    // Before a component starts, add port flag if one is specified
    // in the component settings.
    // http://docs.docker.com/reference/run/#expose-incoming-ports
    kbox.core.events.on('pre-start-component', function(component) {
      console.log(component);
      // grab the stting
      var port = getPort(component);

      //app.config.pluginConf[PLUGIN_NAME].settings
    });

    kbox.core.events.on('pre-install-component', function(component, done) {
      console.log(component);
      var port = getPort(component);

      // Assign the designated port to the component.
      // if (port) {
      //   component.installOptions.HostConfig.PortBindings.push(
      //    '3306/tcp': [{'HostIp' : '', 'HostPort' : port}]
      //  );
      // }
    });

    // may
    // kbox inspect [name of component] --> output from docker remote env
    // may need to use pre-install-component event and modify installOptions like
    // db-env:
    // component.installOptions.Env.push(
    //    'KB_APP_SETTINGS=' + JSON.stringify(settings)
    //  );
    //
    //  installOptions.HostConfig[] =
    //  '3306/tcp': [{'HostIp' : '', 'HostPort' : port}]
    //
    //  This is very similar to the way that settings work in Hipache, since it
    //  needs to be available on a consisten port as well.
    //
    //  Config in kalabox.json should take key as db or something, value is user-specified
    //  port.
  });
};
