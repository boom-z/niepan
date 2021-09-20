import WXView from './view';
import WXText from './text';
import WXCheckBox from './checkbox';
import WXCheckboxGroup from './checkboxGroup';
import WXLabel from './label';

const components = [WXView, WXText, WXCheckBox, WXLabel, WXCheckboxGroup];

const install = () => {
  components.forEach((component) => {
    component.install();
  });
};

install();
