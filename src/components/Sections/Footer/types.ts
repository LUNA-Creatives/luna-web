export interface IFooter {
  data: {
    emailAddress: string;
    heading: string;
    text: string;
    location: string;
    phoneNumber: string;
    addressLink: string;
    copyRights: string;
    urls: {
      addressUrl: string;
      linkedInUrl: string;
      instagramUrl: string;
    };
  };
}
