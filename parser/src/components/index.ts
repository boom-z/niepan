// 自定义标签，未使用

import WXView from './view';
import WXText from './text';
import WXCheckBox from './checkbox';
import WXCheckboxGroup from './checkboxGroup';
import WXLabel from './label';

import './index.css';

const components = [WXView, WXText, WXCheckBox, WXLabel, WXCheckboxGroup];

const install = () => {
  components.forEach((component) => {
    component.install();
  });
};

install();
