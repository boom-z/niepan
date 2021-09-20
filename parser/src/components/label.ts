class WxLabel extends HTMLElement {
  constructor() {
    super();
  }
}

const install = () => {
  customElements.define('wx-label', WxLabel, { extends: 'div' });
};

export default {
  install,
};
