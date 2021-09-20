class WxView extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    var wrapper = document.createElement('div');
    wrapper.innerHTML = this.innerHTML;
    var shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(wrapper);
  }
}

const install = () => {
  customElements.define('wx-view', WxView);
};

export default {
  install,
};
