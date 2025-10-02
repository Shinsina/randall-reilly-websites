import MonoRail from '@mindful-web/marko-web-theme-monorail/browser';

const GooglePreferredSourcesButton = () => import(/* webpackChunkName: "google-preferred-sources-button" */ './google-preferred-sources-button.vue');
const LoadAnalyzer = () => import(/* webpackChunkName: "load-analyzer" */ './load-analyzer.vue');
const LoadToggler = () => import(/* webpackChunkName: "load-toggler" */ './load-toggler.vue');

export default (Browser) => {
  const { EventBus } = Browser;
  EventBus.$on('identity-x-login-link-sent', ({ data, source, additionalEventData }) => {
    if (additionalEventData.createdNewUser) {
      const { appUser } = data;
      const newIdentityXUser = { userId: appUser.id, source };
      window.dataLayer.push({ event: 'identity-x-created-new-user', newIdentityXUser });
    }
  });

  Browser.register('GooglePreferredSourcesButton', GooglePreferredSourcesButton);
  Browser.register('LoadAnalyzer', LoadAnalyzer, { provide: { EventBus } });
  Browser.register('LoadToggler', LoadToggler);

  // @todo figure out what else to track
  EventBus.$on('loadAnalyzer_submit', (payload) => {
    window.dataLayer.push({ event: 'loadAnalyzer_submit', ...payload });
  });

  MonoRail(Browser);
};
