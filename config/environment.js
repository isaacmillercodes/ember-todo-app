/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: '',
    environment: environment,
    contentSecurityPolicy: {'connect-src': "'self' wss://*.firebaseio.com"},
    firebase: {
      apiKey: "AIzaSyCCFfX8jq6syTu23jrazE6lEV0c2Gtzylo",
      authDomain: "ember-todo-b749a.firebaseapp.com",
      databaseURL: "https://ember-todo-b749a.firebaseio.com",
      projectId: "ember-todo-b749a",
      storageBucket: "ember-todo-b749a.appspot.com",
      messagingSenderId: "509246593200"
    },
    rootURL: '/ember-todo-app/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.rootURL = '/ember-todo-app/';
  }

  return ENV;
};
