export interface ICallToAction {
  data: {
    headline: string;
    sections: Section[];
  };
}

export type Section = {
  subHeadline: string;
  text: string;
  button: string;
};
