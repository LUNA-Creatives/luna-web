export interface IFooter {
  data: {
    headline: headline[];
    subHeadline: subHeadline;
    copyRights: string;
  };
}
export type headline = {
  id: number;
  text: string;
  subtitle?: string;
  socialLinks?: socialLinks[];
};
export type subHeadline = {
  text: string;
  contactInformation: contactInformation;
  email?: string;
  phoneNumber?: string;
};
export type socialLinks = {
  id: number;
  text: string;
  url: string;
};
export type contactInformation = {
  streetName: string;
  city: string;
  url: string;
};
