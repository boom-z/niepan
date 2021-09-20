import { MapEventWXToWeb, MapPropWXToWeb } from './map';
import { IAttr } from './typing';

export const handleAttrs = (attr: IAttr[]) => {
  MapEventWXToWeb(attr);
  MapPropWXToWeb(attr);
};
