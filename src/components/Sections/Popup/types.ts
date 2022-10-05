export interface IPopup {
  data: {
    headline: string;
    text: string;
    punchline: string;
    subHeadline: SubHeadline[];
  };
}

export type SubHeadline = {
  id: number;
  headline: string;
  text?: string;
  street?: string;
  city?: string;
  url?: string;
  emailAddress?: string;
  phoneNumber?: string;
};
