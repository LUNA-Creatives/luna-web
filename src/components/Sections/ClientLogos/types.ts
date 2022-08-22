export interface ILogos {
  logos: Logo[];
}

export type Logo = {
  id: number;
  url?: string;
  alt: string;
};
