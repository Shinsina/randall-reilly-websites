const GAMConfiguration = require('@parameter1/base-cms-marko-web-gam/config');

module.exports = ({
  accountId = '142181607',
  basePath,
} = {}) => {
  const config = new GAMConfiguration(accountId, { basePath });

  config.lazyLoad = {
    enabled: true, // set to true to enable lazy loading
    fetchMarginPercent: 100, // fetch ad when one viewport away
    renderMarginPercent: 50, // render ad when half viewport away
    mobileScaling: 2, // double these on mobile
  };

  config.btfLeaderboard = true;

  config
    .setTemplate('LEADERBOARD', {
      size: [
        [970, 90],
        [728, 90],
        [300, 250],
        [265, 149], // Featured Pushdown / Fluid Banner
        [1060, 596],
        [736, 414],
        [428, 241],
      ],
      sizeMapping: [
        { viewport: [1070, 0], size: [[970, 90], [728, 90], [1060, 596]] },
        { viewport: [980, 0], size: [[970, 90], [728, 90], [736, 414]] },
        { viewport: [750, 0], size: [[728, 90], [736, 414]] },
        { viewport: [300, 0], size: [[300, 250], [265, 149], [428, 241]] },
      ],
    })
    .setTemplate('LEADERBOARD-DESKTOP', {
      size: [
        [970, 90],
        [728, 90],
        [1060, 596],
        [736, 414],
        [640, 480],
      ],
      sizeMapping: [
        { viewport: [1070, 0], size: [[970, 90], [728, 90], [1060, 596]] },
        { viewport: [980, 0], size: [[970, 90], [728, 90], [640, 480], [736, 414]] },
        { viewport: [300, 0], size: [] },
      ],
    })
    .setTemplate('INLINE-LEADERBOARD-MOBILE', {
      size: [300, 250],
      sizeMapping: [
        { viewport: [980, 0], size: [] },
        { viewport: [300, 0], size: [[300, 250], [265, 149], [428, 241]] },
      ],
    })
    .setTemplate('ROTATION', {
      size: [[1124, 600], [970, 250], [970, 90], [728, 90], [430, 720], [320, 100]],
      sizeMapping: [
        { viewport: [1150, 0], size: [[1124, 600], [970, 250], [970, 90], [728, 90]] },
        { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90], [430, 720]] },
        { viewport: [750, 0], size: [[728, 90], [430, 720], [300, 250]] },
        { viewport: [300, 0], size: [[430, 720], [300, 50], [300, 250], [320, 100]] },
      ],
    })
    .setTemplate('ROTATION-DESKTOP', {
      size: [[1124, 600], [970, 250], [970, 90], [728, 90], [430, 720]],
      sizeMapping: [
        { viewport: [1150, 0], size: [[1124, 600], [970, 250], [970, 90], [728, 90]] },
        { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90], [430, 720]] },
        { viewport: [300, 0], size: [] },
      ],
    })
    .setTemplate('INLINE-CONTENT-MOBILE', {
      size: [[970, 250], [970, 90], [728, 90], [430, 720], [320, 100]],
      sizeMapping: [
        { viewport: [980, 0], size: [] },
        { viewport: [480, 0], size: [430, 720] },
        { viewport: [300, 0], size: [[430, 720], [300, 50], [300, 250], [320, 100]] },
      ],
    })
    .setTemplate('INLINE-CONTENT-DESKTOP', {
      size: [[1124, 600], [970, 250], [970, 90], [728, 90], [430, 720], [320, 100]],
      sizeMapping: [
        { viewport: [1150, 0], size: [[1124, 600], [970, 250], [970, 90], [728, 90]] },
        { viewport: [980, 0], size: [[970, 250], [970, 90], [728, 90], [430, 720]] },
        { viewport: [750, 0], size: [[728, 90], [300, 250], [430, 720]] },
        { viewport: [0, 0], size: [] },
      ],
    })
    .setTemplate('WALLPAPER', {
      size: [[300, 600], [100, 600]],
      sizeMapping: [
        { viewport: [1400, 0], size: [300, 600] },
        { viewport: [0, 0], size: [] },
      ],
    })
    .setTemplate('GEAR', {
      size: [300, 250],
      sizeMapping: [
        { viewport: [980, 0], size: [300, 250] },
        { viewport: [0, 0], size: [] },
      ],
    })
    .setTemplate('GEAR-MOBILE', {
      size: [300, 250],
      sizeMapping: [
        { viewport: [980, 0], size: [] },
        { viewport: [300, 0], size: [300, 250] },
      ],
    });

  return config;
};
