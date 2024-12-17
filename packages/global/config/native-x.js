const NativeXConfiguration = require('@mindful-web/marko-web-native-x/config');

module.exports = ({
  uri = process.env.NATIVEX_SERVE_URI || 'https://delivery.mindfulcms.com/rr/default/compat/native-website',
  enabled = true,
} = {}) => new NativeXConfiguration(uri, { enabled, tenantKey: 'randallreilly' });
