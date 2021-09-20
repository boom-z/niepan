interface PageOptions {
  data: Object;
  onLoad: (e: any) => void;
  onShow: (e: any) => void;
  onReady: (e: any) => void;
  onHide: (e: any) => void;
  onUnload: (e: any) => void;
  onPullDownRefresh: (e: any) => void;
  onReachBottom: (e: any) => void;
  onShareAppMessage: (e: any) => void;
  onPageScroll: (e: any) => void;
  onResize: (e: any) => void;
}

type PageMethods = {
  [T in keyof any]: Function;
};

export type IPageOptions = Partial<PageOptions> | PageMethods;
