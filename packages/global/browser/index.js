import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import GAM from '@parameter1/base-cms-marko-web-gam/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';
import IdentityX from '@parameter1/base-cms-marko-web-identity-x/browser';
import BlockLoader from './block-loader.vue';
import MenuToggleButton from './menu-toggle-button.vue';
import NewsletterCloseButton from './newsletter-close-button.vue';
import WufooForm from './wufoo-form.vue';
import TopStoriesMenu from './top-stories-menu.vue';
import CommentToggleButton from './comment-toggle-button.vue';
import IdentityXAuthenticate from './identity-x/authenticate.vue';
import IdentityXCommentStream from './identity-x/comments/stream.vue';
// import TopStoriesCarousel from './top-stories-carousel.vue';
const TopStoriesCarousel = () =>  import(/* webpackChunkName: "top-stories-carousel" */ './top-stories-carousel.vue');
export default (Browser) => {
  GTM(Browser);
  GAM(Browser);
  SocialSharing(Browser);
  IdentityX(Browser, {
    CustomAuthenticateComponent: IdentityXAuthenticate,
    CustomCommentStreamComponent: IdentityXCommentStream,
  });

  Browser.register('GlobalBlockLoader', BlockLoader);
  Browser.register('GlobalMenuToggleButton', MenuToggleButton);
  Browser.register('GlobalNewsletterCloseButton', NewsletterCloseButton);
  Browser.register('GlobalTopStoriesMenu', TopStoriesMenu);
  Browser.register('GlobalTopStoriesCarousel', TopStoriesCarousel);
  Browser.register('GlobalCommentToggleButton', CommentToggleButton);
  Browser.register('WufooForm', WufooForm);
};
