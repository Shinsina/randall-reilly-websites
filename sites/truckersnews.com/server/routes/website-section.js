const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const { newsletterState } = require('@randall-reilly/package-global/middleware/newsletter-state');
const products = require('../templates/website-section/products');
const section = require('../templates/website-section');

module.exports = (app) => {
  app.get('/:alias(gear)', newsletterState(), withWebsiteSection({
    template: products,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', newsletterState(), withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
