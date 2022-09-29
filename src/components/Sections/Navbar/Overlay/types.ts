export interface IOverlay {
  data: ColumnData[];
  closeOverlay: CallableFunction;
}
export type ColumnData = {
  headline: string;
  navItems: NavItem[];
};
export type NavItem = {
  id: number;
  text1: string;
  link: string;
  text2?: string;
};
