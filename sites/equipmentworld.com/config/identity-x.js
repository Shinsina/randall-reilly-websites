const configureIdentityX = require('@randall-reilly/package-global/config/identity-x');
const formDefault = require('@randall-reilly/package-global/config/identity-x/default');

formDefault.anonymousCta = 'Register on EquipmentWorld.com to download this document, gain access to premium content, and more.';

// append custom demos row of questions to the end of general questions
formDefault.fieldRows.push(
  [
    // Primary Role
    {
      label: 'Your Primary Role?',
      id: '6259c1dbc28d5480c0bf1246',
      type: 'custom-select',
      required: true,
      width: 1,
    },
  ],
  // [
  //   {
  //     label: '<strong>Equipment World Weekly Technology</strong>
  //      The latest news and information in equipment technology',
  //     id: '685ac203bc20f88141e4f7f9',
  //     type: 'custom-boolean',
  //     required: false,
  //     width: 1,
  //   },
  // ],
  // [
  //   {
  //     label: '<strong>Equipment World Weekly</strong>
  //      The week's top construction and heavy equipment news',
  //     id: '685ac22dfc51a3056278d61c',
  //     type: 'custom-boolean',
  //     required: false,
  //     width: 1,
  //   },
  // ],
  // [
  //   {
  //     label: '<strong>Equipment World Video Highlights</strong>
  //       The latest videos and insights for construction professionals',
  //     id: '685ac17efc51a3ad0b78b45d',
  //     type: 'custom-boolean',
  //     required: false,
  //     width: 1,
  //   },
  // ],
  // [
  //   {
  //     label: '<strong>Big Iron Dealer Weekly</strong>
  //      Top news and insights for construction equipment dealers',
  //     id: '685ac258bc20f8829fe50882',
  //     type: 'custom-boolean',
  //     required: false,
  //     width: 1,
  //   },
  // ],
  // [
  //   {
  //     label: '<strong>Better Roads Weekly</strong>
  //      Roundup of highway project and road construction news',
  //     id: '685ac1d6fc51a3333478c514', // Regulatory Rundown
  //     type: 'custom-boolean',
  //     required: true,
  //     width: 1,
  //   },
  // ],
);

module.exports = configureIdentityX({
  appId: '5f77a17b8eebee8cabee53fb',
  // activeCustomFieldIds: [
  //   '6259c1dbc28d5480c0bf1246', // Primary Role
  //   '685ac203bc20f88141e4f7f9', // Equipment World Weekly Technology
  //   '685ac22dfc51a3056278d61c', // Equipment World Weekly
  //   '685ac17efc51a3ad0b78b45d', // Equipment World Video Highlights
  //   '685ac258bc20f8829fe50882', // Big Iron Dealer Weekly
  //   '685ac1d6fc51a3333478c514', // Better Roads Weekly
  // ],
  forms: {
    default: formDefault,
  },
});
