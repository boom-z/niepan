import { mapElement } from '../handleTags/map';
import { creatTextElement } from '../handleTags/text';
import { IAst, IElementType } from '../typing';
import { attrsToString } from './utils';

const tagElement = (ast: IAst) => {
  const tag = mapElement(ast.tag);
  if (tag.toLowerCase() === 'wx-text') {
    return creatTextElement(ast.children);
  }
  let html = `<${tag} ${attrsToString(ast.attrsMap)}>`;
  const elements = ast.children;
  for (let i = 0; i < elements.length; i++) {
    html += generate(elements[i]);
  }
  return html + `</${tag}>`;
};

const textElement = (ast: IAst) => {
  return ast.text;
};

const handles: any = {
  [IElementType.tag]: tagElement,
  [IElementType.expression]: textElement,
  [IElementType.text]: textElement,
};

/**
 * 将 ast 转换为 web html 字符串
 * @param ast
 * @returns
 */
export const generate = (ast: IAst) => {
  const type: any = ast.type;
  const handle = handles[type];
  if (handle) return handle(ast);
  console.warn('节点类型未处理: ' + type);
};
