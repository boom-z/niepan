class WxView extends HTMLElement {
  constructor() {
    super();
  }
}

const install = () => {
  customElements.define('wx-view', WxView, { extends: 'div' });
};

export default {
  install,
};
