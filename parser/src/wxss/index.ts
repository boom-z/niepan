import { rpxRE } from './const';

export const wxssToCss = (wxss: string): string => {
  // 替换 rpx 为 vw 表示
  let m;
  while ((m = rpxRE.exec(wxss))) {
    wxss = wxss.replace(m[1], `${parseInt(m[2]) / 7.5}vw`);
  }
  return wxss;
};
