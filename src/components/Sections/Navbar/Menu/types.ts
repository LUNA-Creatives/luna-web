export interface IOverlay {
  data: ColumnData[];
  closeOverlay: CallableFunction;
}
export type ColumnData = {
  id: number;
  headline: string;
  linkItems?: LinkItem[];
  routerItems?: RouterItem[];
};
export type RouterItem = {
  id: number;
  link: string;
  text1: string;
  toggleItem?: ToggleItem;
};

export type ToggleItem = {
  text1: string;
  serviceItems?: ServiceItem[];
};
export type ServiceItem = {
  id: number;
  text: string;
  link: string;
};

export type LinkItem = {
  id: number;
  text1: string;
  link: string;
  text2?: string;
};
