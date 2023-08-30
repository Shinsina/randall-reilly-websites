const configureNativeX = require('@randall-reilly/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6000b769140b3d0001040760' },
    { name: 'partner-insights', id: '62c467b25be2060001803cf1' },
    { name: 'native', id: '64ee5a186b776a0001dc4e6e' },
  ]);

module.exports = config;
