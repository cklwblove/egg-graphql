'use strict';

// had enabled by egg
// exports.static = true;

// validate
exports.validate = {
  enable: true,
  package: 'egg-validate',
};

// cors
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.graphql = {
  enable: true,
  package: 'egg-graphql',
};
