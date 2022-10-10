export interface IInformation {
  data: Column[];
  headline: string;
}

export type Column = {
  id: number;
  subHeadline: string;
  text1?: string;
  text2?: string;
  listItems?: Item[];
};

export type Item = {
  id: number;
  text: string;
};
