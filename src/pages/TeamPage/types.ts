import { SlsDbItem } from '../../types';

export type TeamMember = SlsDbItem & {
  name: string;
  role: string;
  profileImage?: string;
  gif?: string;
  alt?: string;
};
