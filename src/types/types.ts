export type SlsDbItem = {
  key: string;
  modified: string;
  created: string;
  value?: Record<string, any>;
};

export type TeamMember = SlsDbItem & {
  name: string;
  role: string;
  profileImage?: string;
  gif?: string;
  alt?: string;
};
