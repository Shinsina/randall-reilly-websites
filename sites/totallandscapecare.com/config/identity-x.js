const configureIdentityX = require('@randall-reilly/package-global/config/identity-x');
const formDefault = require('@randall-reilly/package-global/config/identity-x/default');

formDefault.anonymousCta = 'Register on TotalLandscapeCare.com to download this document, gain access to premium content, and more.';

// append custom demos row of questions to the end of general questions
formDefault.fieldRows.push(
  [
    {
      label: 'Your Primary Role?',
      id: '6259c321c28d542111bf125c',
      type: 'custom-select',
      required: true,
      width: 1,
    },
  ],
  // [
  //   {
  //     label: '</strong>Total Landscape Care Weekly</strong>
  //      The weeks top landscaping news and insights',
  //     id: '685ab9ca582f12397879b638',
  //     type: 'custom-boolean',
  //     required: false,
  //     width: 1,
  //   },
  // ],
);

module.exports = configureIdentityX({
  appId: '5f77a1c80f883d979ae63eff',
  // activeCustomFieldIds: [
  //   '6259c321c28d542111bf125c', // Primary Role
  //   '685ab9ca582f12397879b638', // Total Landscape Care Weekly
  // ],
  forms: {
    default: formDefault,
  },
});
