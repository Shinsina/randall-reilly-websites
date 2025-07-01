const configureIdentityX = require('@randall-reilly/package-global/config/identity-x');
const formDefault = require('@randall-reilly/package-global/config/identity-x/default');

formDefault.anonymousCta = 'Register on CCJ.com to download this document, gain access to premium content, and more.';

// append custom demos row of questions to the end of general questions
formDefault.fieldRows.push(
  [
    // Primary Role
    {
      label: 'Your Primary Role?',
      id: '6259c4370e2f695e98059a29',
      type: 'custom-select',
      required: true,
      width: 1,
    },
  ],
  // [
  //   {
  //     label: '<strong> Trucks Parts Service Weekly </strong>
  //      The week's top aftermarket and dealer industry news',
  //     id: '685abcf7bc20f8472be3e536',
  //     type: 'custom-boolean',
  //     required: false,
  //     width: 1,
  //   },
  // ],
  // [
  //   {
  //     label: '<strong>Successful Dealer Weekly</strong>
  //      Top news and insights for commercial truck dealers',
  //     id: '685abd35691f644e1cfea6a0',
  //     type: 'custom-boolean',
  //     required: false,
  //     width: 1,
  //   },
  // ],
);

module.exports = configureIdentityX({
  appId: '5f77a1fd0f883d221fe63f01',
  // activeCustomFieldIds: [
  //   '6259c4370e2f695e98059a29', // Primary Role
  //   '685abcf7bc20f8472be3e536', // Trucks Parts Service Weekly
  //   '685abd35691f644e1cfea6a0', // Successful Dealer Weekly
  // ],
  forms: {
    default: formDefault,
  },
});
