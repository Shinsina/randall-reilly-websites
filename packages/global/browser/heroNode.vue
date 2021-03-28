<template>
  <div class="top-stories__row">
    <div class="top-stories__col top-stories__col--hero">
      <div class="node node--top-stories-hero-image node--image-top node--flush node--card node--podcast-content-type">
        <div class="node__contents">
          <div class="node__image-wrapper node__image-wrapper--align-top">
            <a :href="currentelement.siteContext.path" class="node__image-inner-wrapper node__image-inner-wrapper--fluid-3by2">
              <img
                :src="currentelement.primaryImage.src"
                :alt="currentelement.primaryImage.alt"
                width="500px"
                height="300px"
                class="node__image lazyloaded"
              >
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <div class="top-stories__col top-stories__col--list">
      <div class="node node--top-stories-hero node--image-left node--flush node--card node--full-height node--podcast-content-type">
        <div class="node__contents">
          <div class="node__body">
            <div class="node__header node__header--body">
              <div class="node__header-left">
                <div class="node__website-section-name">
                  <a :href="currentelement.primarySection.canonicalPath">{{ currentelement.primarySection.name }}</a>
                </div>
              </div>
            </div>
            <div class="node__contents node__contents--body">
              <h5 class="node__title">
                <a :href="currentelement.siteContext.path">{{ currentelement.shortName }}</a>
              </h5>
              <div class="node__text node__text--teaser">
                <a :href="currentelement.siteContext.path">{{ currentelement.teaser }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentelement: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
