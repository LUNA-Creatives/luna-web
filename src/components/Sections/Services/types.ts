export interface IServices {
  data: {
    headline: string;
    subHeadline: string;
    card: Card[];
  };
}

export type Card = {
  headline: string;
  text: string[];
  imageSource: string;
};
