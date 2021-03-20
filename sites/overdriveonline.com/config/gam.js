const configureGAM = require('@randall-reilly/package-global/config/gam');

const config = configureGAM({ basePath: 'ovd' });

config.lazyLoad = {
  enabled: true, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config
  .setAliasAdUnits('default', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'leaderboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'rotation' },
    { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'wallpaper-left' },
    { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'wallpaper-right' },
  ])
  .setAliasAdUnits('gear', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'gear-leaderboard' },
    { name: 'leaderboard-2', templateName: 'LEADERBOARD', path: 'gear-leaderboard' },
    { name: 'rotation', templateName: 'LEADERBOARD', path: 'gear-leaderboard' },
    { name: 'rotation-1', templateName: 'GEAR', path: 'gear-rotation-1' },
    { name: 'rotation-2', templateName: 'GEAR', path: 'gear-rotation-2' },
    { name: 'rotation-3', templateName: 'GEAR', path: 'gear-rotation-3' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'gear-leaderboard' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'gear-leaderboard' },
    { name: 'wallpaper-left', templateName: 'WALLPAPER', path: 'gear-wallpaper-left' },
    { name: 'wallpaper-right', templateName: 'WALLPAPER', path: 'gear-wallpaper-right' },
  ]);

const aliases = [
  'business',
  'workforce',
  'economic-trends',
  'ecommerce-urban-delivery',
  'regulations',
  'equipment',
  'alternative-power',
  'equipment-controls',
  'life',
  'maintenance',
  'technology',
  'reader-rigs',
  'custom-rigs',
  'channel-19',
];

aliases.forEach(alias => config.setAliasAdUnits(alias, [
  { name: 'leaderboard', templateName: 'LEADERBOARD', path: `${alias}-leaderboard` },
  { name: 'rotation', templateName: 'ROTATION', path: `${alias}-rotation` },
  { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: `${alias}-rotation` },
  { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: `${alias}-rotation` },
]));

module.exports = config;
