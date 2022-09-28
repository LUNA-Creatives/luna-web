export interface IOverlay {
  data: [Item];
  closeOverlay: CallableFunction;
}
export type Item = {
  headline: string;
  links: [Link];
};
export type Link = {
  id: number;
  text: string;
  link: string;
  zipcode?: string;
};
