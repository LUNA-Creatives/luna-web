export interface IServices {
  data: {
    headline: string;
    subHeadline: string;
    card: Card[];
  };
}

export type Card = {
  id: number;
  slug: string;
  headline: string;
  listItems: string[];
  imageSource: string;
  borderColor: string;
};
