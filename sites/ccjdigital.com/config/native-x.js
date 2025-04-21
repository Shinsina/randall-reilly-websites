const configureNativeX = require('@randall-reilly/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;
config.publisherId = '5fd24889b192ef0001843b79';
config.domainName = 'www.ccjdigital.com';

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6000b6bd0ea4830001340a86' },
    { name: 'partner-insights', id: '61f5aefe8ec1b500012be0f6' },
  ]);

config
  .setAliasPlacements('preventable-or-not', [
    { name: 'default', id: '68059ee1f19116cde54e99c7' },
    { name: 'partner-insights', id: '68059ef0f19116cde54e99c9' },
  ]);

module.exports = config;
