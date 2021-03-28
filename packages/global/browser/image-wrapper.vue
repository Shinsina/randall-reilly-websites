
<template>
  <!-- eslint-disable vue/no-v-html -->
  <div class="card-deck-flow__node">
    <div class="node node--top-stories-card node--image-top node--flush node--card node--full-height node--article-content-type">
      <div class="node__contents">
        <div class="node__image-wrapper node__image-wrapper--align-top">
          <a :href="articlelink" class="node__image-inner-wrapper node__image-inner-wrapper--fluid-3by2">
            <img
              :src="src"
              :alt="alt"
              class="node__image lazyloaded"
            >
          </a>
        </div>
        <div class="node__body">
          <div class="node__header node__header--body">
            <div class="node__header-left">
              <div class="node__website-section-name">
                <a
                  v-if="sectionlink"
                  :href="sectionlink"
                  v-html="section"
                />
              </div>
            </div>
          </div>
          <div class="node__contents node__contents--body">
            <h5 class="node__title">
              <a
                v-if="title"
                :class="`${blockName}__title`"
                :href="articlelink"
                v-html="title"
              />
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blockName: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    preview: {
      type: String,
      default: null,
    },
    section: {
      type: String,
      default: null,
    },
    sectionlink: {
      type: String,
      default: null,
    },
    articlelink: {
      type: String,
      default: null,
    },
  },
};
</script>
