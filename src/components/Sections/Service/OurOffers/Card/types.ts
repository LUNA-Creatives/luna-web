export interface ICard {
  data: Card;
}
export type Card = {
  id: number;
  isActive?: boolean;
  subHeadline: SubHeadline;
  headline: Headline;
  text1?: string;
  text2?: string;
  text3?: string;
  listItems?: listItem[];
  disabledTextGroup?: DisabledTextGroup;
};

export type Headline = {
  price?: string;
  vatText?: string;
  text?: string;
};

export type SubHeadline = {
  text: string;
  activeText?: string;
};

export type listItem = {
  id: number;
  text: string;
};

export type DisabledTextGroup = {
  priceText: string;
  logoText: string;
};
