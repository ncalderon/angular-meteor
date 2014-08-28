Package.describe({
  summary: "The simplest no-conflict way to use AngularJS with Meteor, Meteorite and Atmosphere Smart Packages.",
  version: "0.2.0",
  git: "git@github.com:Urigo/ngMeteor.git"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.0.1');
  // Exports the ngMeteor package scope
  api.export('ngMeteor', 'client');

  api.use('jquery', 'client');

  // Files to load in Client only.
  api.add_files([
    // Lib Files
    'lib/angular.js',
    'lib/angular-csp.css',
    'lib/angular-animate.js',
    'lib/angular-cookies.js',
    'lib/angular-resource.js',
    'lib/angular-route.js',
    'lib/angular-sanitize.js',
    'lib/angular-touch.js',
    'lib/angular-hash-key-copier.js',
    // Module Files
    'modules/ngMeteor-collections.js',
    'modules/ngMeteor-template.js',
    // Finally load ngMeteor File
    'urigo:ngmeteor.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('urigo:ngmeteor');
  api.addFiles('urigo:ngmeteor-tests.js');
});
