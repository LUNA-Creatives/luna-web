export interface IInformation {
  data: Column[];
}

export type Column = {
  id: number;
  subHeadline: string;
  text?: string;
  listItems?: Item[];
};

export type Item = {
  id: number;
  text: string;
};
