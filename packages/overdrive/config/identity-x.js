const configureIdentityX = require('@randall-reilly/package-global/config/identity-x');
const formDefault = require('@randall-reilly/package-global/config/identity-x/default');

module.exports = configureIdentityX({
  appId: '5f77a1b98eebeee1c3ee53fd',
  forms: {
    default: formDefault,
  },
});
