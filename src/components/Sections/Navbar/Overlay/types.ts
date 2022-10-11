export interface IOverlay {
  data: ColumnData[];
  closeOverlay: CallableFunction;
}
export type ColumnData = {
  id: number;
  headline: string;
  navItems: NavItem[];
};
export type NavItem = {
  id: number;
  text1: string;
  link?: string;
  text2?: string;
  toggleItem?: toggleItem;
};

export type toggleItem = {
  text1: string;
  serviceItems?: serviceItem[];
};
export type serviceItem = {
  id: number;
  text: string;
  link: string;
};
