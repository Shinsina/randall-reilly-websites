<template>
  <div class="top-stories">
    <HeroNode :key="index" :currentelement="currentElement" />
    <!-- eslint-disable vue/no-v-html -->
    <div class="text-center">
      <button class="button" @click="moveCarouselLeft()">
        &#9194;
      </button>
      <button class="button" @click="toggleMoveCarousel()">
        &#9199;
      </button>
      <button class="button" @click="moveCarouselRight()">
        &#9193;
      </button>
    </div>
    <div class="card-deck-flow card-deck-flow--top-stories card-deck-flow--4-cols">
      <image-wrapper
        v-for="node in nodes"
        :key="node.id"
        :src="node.primaryImage.src"
        :alt="node.primaryImage.alt"
        :title="node.shortName"
        :preview="node.teaser"
        :block-name="blockName"
        :section="node.primarySection.name"
        :articlelink="node.siteContext.path"
        :sectionlink="node.primarySection.canonicalPath"
      />
    </div>
  </div>
</template>

<script>
// once inside the container component, sub-components can be directly imported
import ImageWrapper from './image-wrapper.vue';
import HeroNode from './heroNode.vue';

export default {
  components: { ImageWrapper, HeroNode },

  props: {
    nodes: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    blockName: 'top-stories-carousel',
    indexCap: 3,
    index: 0,
    timer: null,
  }),

  computed: {
    currentElement() {
      return this.nodes[this.index];
    },
  },

  created() {
    this.toggleMoveCarousel();
  },

  methods: {
    moveCarouselRight() {
      if (this.index < this.indexCap) {
        this.index += 1;
      } else {
        this.index = 0;
      }
    },
    moveCarouselLeft() {
      if (this.index === 0) {
        this.index = this.indexCap;
      } else {
        this.index -= 1;
      }
    },
    toggleMoveCarousel() {
      if (!this.timer) {
        this.timer = setInterval(() => this.moveCarouselRight(), 5000);
      } else {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
  },
};
</script>

<style>
  .button {
  background-color: transparent;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 50px;
  margin: 4px 2px;
  cursor: pointer;
  }
</style>
