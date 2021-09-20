export type IAttr = {
  name: string;
  value: string;
  dynamic?: any;
};

export type IMapType<U> = { [T in keyof any]: U };
