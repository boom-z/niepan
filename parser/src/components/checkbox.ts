class WxCheckBox extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    var wrapper = document.createElement('input');
    wrapper.setAttribute('type', 'checkbox');
    const checked = this.getAttribute('checked');
    if (String(checked) === 'true') wrapper.setAttribute('checked', checked);
    var shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(wrapper);

    let checkboxgroup: ParentNode = null;
    let parent: ParentNode = this.parentNode;
    while (parent) {
      if (parent.nodeName.toLowerCase() === 'wx-checkbox-group')
        checkboxgroup = parent;
      parent = parent.parentNode;
    }

    wrapper.addEventListener('change', (e) => {
      console.log(e, checkboxgroup);
    });
  }
}

const install = () => {
  customElements.define('wx-checkbox', WxCheckBox);
};

export default {
  install,
};
