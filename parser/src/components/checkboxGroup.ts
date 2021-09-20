class WxCheckBoxGroup extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    var wrapper = document.createElement('div');
    const html = this.innerHTML;
    wrapper.innerHTML = html;
    var shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(wrapper);
  }
}

const install = () => {
  customElements.define('wx-checkbox-group', WxCheckBoxGroup, {
    extends: 'div',
  });
};

export default {
  install,
};
