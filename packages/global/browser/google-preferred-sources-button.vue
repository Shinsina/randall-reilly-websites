<template>
  <button
    :class="classNames"
    :title="shareTo"
    :rel="rel"
    @click="share"
  >
    <span style="letter-spacing: 0.5px">
      Add us as a preferred source on Google
    </span>
  </button>
</template>

<script>
import providerList from '@mindful-web/marko-web-social-sharing/browser/providers';
import i18n from '@mindful-web/marko-web-social-sharing/browser/i18n-vue';

export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    media: {
      type: String,
      default: null,
    },
    showAction: {
      type: Boolean,
      default: false,
    },
    /**
     * A custom print landing page URL.
     * If set, the print action will redirect the user as opposed
     * to prompting the print dialog.
     */
    printUrl: {
      type: String,
      default: null,
    },
    lang: {
      type: String,
      default: 'en',
    },
    hostName: {
      type: String,
      default: null,
    },
  },

  data: () => ({
    blockName: 'social-sharing',
    name: null,
    href: null,
    params: {},
    type: null,
    popup: {
      interval: null,
      features: {
        status: 0,
        resizable: 1,
        toolbar: 0,
        menubar: 0,
        scrollbars: 0,
        location: 0,
        directories: 0,
        width: 626,
        height: 436,
        top: 0,
        left: 0,
      },
    },
    rel: null,
  }),

  computed: {
    classNames() {
      const classNames = [this.elementName('button'), this.elementName('button', this.provider)];
      if (this.showAction) classNames.push(this.elementName('button', 'with-action'));
      return classNames;
    },

    iconComponent() {
      return `${this.provider}-icon`;
    },
    shareTo() {
      return this.action ? `${i18n(this.lang, this.action)}` : `${i18n(this.lang, 'shareTo')} ${this.provider}`;
    },
  },

  created() {
    const provider = providerList[this.provider];
    this.name = provider.name;
    this.href = provider.href;
    this.params = provider.params;
    this.action = provider.action;
    this.type = provider.type;
    if (provider.rel) {
      this.rel = provider.rel;
    }
  },

  mounted() {
    this.setPopupPosition();
  },

  methods: {
    /**
     *
     */
    share() {
      const url = this.buildSharerUrl();
      this.emitOpenEvent();
      if (this.type === 'direct') {
        window.open(url, '_self');
      } else if (this.type === 'print') {
        const { printUrl } = this;
        if (printUrl) {
          window.open(printUrl, '_self');
        } else {
          window.print();
        }
      } else {
        this.openPopup(url);
      }
    },

    /**
     *
     */
    encode(v) {
      return encodeURIComponent(v);
    },

    /**
     *
     */
    elementName(name, mod) {
      const elementName = `${this.blockName}__${name}`;
      if (!mod) return elementName;
      return `${elementName}--${mod}`;
    },

    /**
     *
     */
    buildSharerUrl() {
      const pattern = /^@/;
      const kvs = Object.keys(this.params).map((key) => {
        const value = this.params[key];
        if (pattern.test(value)) {
          // Needs to be replaced with a component value.
          const prop = value.replace(pattern, '');

          // Also need to replace in the href if they are used
          this.href = this.href.replace(value, this[prop]);

          return { key, value: this[prop] };
        }
        // Return value as is
        return { key, value };
      }).filter(({ value }) => value).map(({ key, value }) => `${this.encode(key)}=${this.encode(value)}`);
      // Return direct URLs without appending new parameters
      if (this.type === 'direct') return this.href;
      return `${this.href}?${kvs.join('&')}`;
    },

    emitOpenEvent() {
      const provider = providerList[this.provider];
      this.$emit('open', provider);
    },

    /**
     *
     */
    openPopup(url) {
      const provider = providerList[this.provider];

      let popup = window.open(url, 'social-share', this.buildPopupFeatures());
      if (popup) popup.focus();

      this.popup.interval = setInterval(() => {
        if (!popup || popup.closed) {
          clearInterval(this.popup.interval);
          popup = undefined;
          this.$emit('close', provider);
        }
      }, 500);
    },

    buildPopupFeatures() {
      const { features } = this.popup;
      return Object.keys(features).map((key) => `${key}=${features[key]}`).join(',');
    },

    /**
     *
     */
    setPopupPosition() {
      const { features } = this.popup;
      const { screen } = window;
      const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
      const dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

      const { documentElement } = document;
      const innerWidth = documentElement.clientWidth
        ? documentElement.clientWidth : screen.width;
      const innerHeight = documentElement.clientHeight
        ? documentElement.clientHeight : screen.height;

      const width = window.innerWidth ? window.innerWidth : innerWidth;
      const height = window.innerHeight ? window.innerHeight : innerHeight;

      this.popup.features.left = ((width / 2) - (features.width / 2)) + dualScreenLeft;
      this.popup.features.top = ((height / 2) - (features.height / 2)) + dualScreenTop;
    },
  },
};
</script>
