export interface IVision {
  data: {
    headline: string;
    vision: Vision;
    mission: Mission;
  };
}

export type Vision = {
  punchline: string;
  headline: string;
  body: string;
};
export type Mission = {
  punchline: {
    first: string;
    second: string;
    third: string;
  };
  headline: string;
  body: string;
};
