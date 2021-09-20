export const attrsToString = (attrs: Object) => {
  if (attrs == null) return '';
  return Object.keys(attrs).reduce((pre: string, next: keyof Object) => {
    return pre + `${next}="${attrs[next]}" `;
  }, '');
};
