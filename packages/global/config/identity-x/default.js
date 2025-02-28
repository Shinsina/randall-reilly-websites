module.exports = {
  title: 'Content Access',
  anonymousCta: 'Register to access this cointent, gain access to premium content, and more.',
  authenticatedCta: 'Fill out the form below to access this content.',
  fieldRows: [
    [
      {
        label: 'Email Address',
        key: 'email',
        type: 'built-in',
        required: true,
        width: 1,
      },
    ],
    [
      {
        label: 'Company Name',
        key: 'organization',
        type: 'built-in',
        required: true,
        width: 1,
      },
    ],
    // Row 3
    [
      {
        label: 'Country',
        key: 'countryCode',
        type: 'built-in',
        required: true,
        width: 0.5,
      },
      {
        label: 'ZIP Code',
        key: 'postalCode',
        type: 'built-in',
        required: true,
        width: 0.5,
      },

    ],
  ],
};
