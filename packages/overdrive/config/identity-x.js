const configureIdentityX = require('@randall-reilly/package-global/config/identity-x');
const formDefault = require('@randall-reilly/package-global/config/identity-x/default');

formDefault.anonymousCta = 'Register on OverdriveOnline.com to download this document, gain access to premium content, and more.';

// append custom demos row of questions to the end of general questions
formDefault.fieldRows.push(
  [
    // Primary Role
    {
      label: 'Primary Role',
      id: '62599fd70e2f690ce40599e1',
      type: 'custom-select',
      required: true,
      width: 1,
    },
  ],
  // [
  //   {
  //     label: '<strong>Custom Rigs Weekly Newsletter</strong>
  //      Great photos and stories of the coolest rigs out there',
  //     id: '685abf6bb5b62a3f7740f7aa',
  //     type: 'custom-boolean',
  //     required: false,
  //     width: 1,
  //   },
  // ],
  // [
  //   {
  //     label: '<strong>Overdrive Weekly Newsletter</strong>
  //      The most important news of the week in trucking',
  //     id: '685ac0aa582f127de07b2df3',
  //     type: 'custom-boolean',
  //     required: false,
  //     width: 1,
  //   },
  // ],
  // [
  //   {
  //     label: '<strong>Overdrive Monthly Gear Newsletter</strong>
  //      The best products for owner-operators',
  //     id: '685ac0db582f1227137b3be1',
  //     type: 'custom-boolean',
  //     required: false,
  //     width: 1,
  //   },
  // ],
  // [
  //   {
  //     label: '<strong>Haul with Authority</strong>',
  //     id: '685c60debc20f869d841cca6',
  //     type: 'custom-boolean',
  //     required: false,
  //     width: 1,
  //   },
  // ],
  // [
  //   {
  //     label: '<strong>Regulatory Rundown</strong',
  //     id: '685c611ac119ec48fd367bfe', // Regulatory Rundown
  //     type: 'custom-boolean',
  //     required: true,
  //     width: 1,
  //   },
  // ],
);

module.exports = configureIdentityX({
  appId: '5f77a1b98eebeee1c3ee53fd',
  // activeCustomFieldIds: [
  //   '62599fd70e2f690ce40599e1', // Primary Role
  //   '685abf6bb5b62a3f7740f7aa', // Custom Rigs Weekly Newsletter
  //   '685ac0aa582f127de07b2df3', // Overdrive Weekly Newsletter
  //   '685ac0db582f1227137b3be1', // Overdrive Monthly Gear Newsletter
  //   '685c60debc20f869d841cca6', // Haul with Authority
  //   '685c611ac119ec48fd367bfe', // Regulatory Rundown
  // ],
  forms: {
    default: formDefault,
  },
});
