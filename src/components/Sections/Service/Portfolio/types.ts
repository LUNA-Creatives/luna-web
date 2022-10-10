export interface IPortfolio {
  data: {
    headline: string;
    subHeadline: string;
    customerCases: CustomerCases[];
  };
}
export type CustomerCases = {
  headline?: string | undefined;
  customerCases?: CustomerCase[] | undefined;
  id?: number | undefined;
  customer?: string | undefined;
  customerLink?: string;
};
export type CustomerCase = {
  id: number;
  customer: string;
  customerLink: string;
};
