import { IAst } from '../typing';

const RE = /[\n\r]+/g; // 匹配换行符

export const creatTextElement = (texts: IAst[]): string => {
  if (!texts) return '';
  return texts.reduce((html, ast) => {
    if (ast.type !== 3 || typeof ast.text !== 'string') return html;
    const text = ast.text.split(RE);
    return text.reduce((_h, _text) => {
      return _h + `<p>${_text}</p>`;
    }, html);
  }, '');
};
