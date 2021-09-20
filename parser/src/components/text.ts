class WxText extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback() {
    var wrapper = document.createElement('div');
    const text = this.textContent.split('\n').join('</br>');
    wrapper.innerHTML = text;
    var shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(wrapper);
  }
}

const install = () => {
  customElements.define('wx-text', WxText);
};

export default { install };
