const configureNativeX = require('@randall-reilly/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6000b6bd0ea4830001340a86' },
    { name: 'partner-insights', id: '61f5aefe8ec1b500012be0f6' },
    { name: 'native', id: '64ee081a4520d80001bc8167' },
  ]);

module.exports = config;
