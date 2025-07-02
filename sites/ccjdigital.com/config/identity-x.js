const configureIdentityX = require('@randall-reilly/package-global/config/identity-x');
const formDefault = require('@randall-reilly/package-global/config/identity-x/default');

formDefault.anonymousCta = 'Register on CCJ.com to download this document, gain access to premium content, and more.';

// append custom demos row of questions to the end of general questions
formDefault.fieldRows.push(
  [
    // Primary Role
    {
      label: 'Your Primary Role?',
      id: '6259c0f80e2f6901fb059a15',
      type: 'custom-select',
      required: true,
      width: 1,
    },
  ],
  // [
  //   {
  //     label: '<strong> CCJ Equipment Weekly </strong>
  //      Roundup of trucking equipment news and reviews',
  //     id: '685abbea691f645f78fe6ade',
  //     type: 'custom-boolean',
  //     required: false,
  //     width: 1,
  //   },
  // ],
  // [
  //   {
  //     label: '<strong>CCJ Technology Weekly</strong>
  //      Top tech developments in the trucking industry',
  //     id: '685abe19bc20f8543ee41e6b',
  //     type: 'custom-boolean',
  //     required: false,
  //     width: 1,
  //   },
  // ],
);

module.exports = configureIdentityX({
  appId: '5f77a19d8eebee8244ee53fc',
  // activeCustomFieldIds: [
  //   '6259c0f80e2f6901fb059a15', // Primary Role
  //   '685abbea691f645f78fe6ade', // CCJ Equipment Weekly
  //   '685abe19bc20f8543ee41e6b', // CCJ Technology Weekly
  // ],
  forms: {
    default: formDefault,
  },
});
