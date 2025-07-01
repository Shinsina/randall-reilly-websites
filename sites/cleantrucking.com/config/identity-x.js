const configureIdentityX = require('@randall-reilly/package-global/config/identity-x');
const formDefault = require('@randall-reilly/package-global/config/identity-x/default');

formDefault.anonymousCta = 'Register on CleanTrucking.com to download this document, gain access to premium content, and more.';

// append custom demos row of questions to the end of general questions
formDefault.fieldRows.push(
  [
    {
      label: 'Your Job Function',
      id: '6524504b4e356d980615ff5b',
      type: 'custom-select',
      required: true,
      width: 1,
    },
  ],
);

module.exports = configureIdentityX({
  appId: '650465135269f6714f6bcdf9',
  // activeCustomFieldIds: [
  //   '6524504b4e356d980615ff5b', // Your Job Function
  // ],
  forms: {
    default: formDefault,
  },
});
