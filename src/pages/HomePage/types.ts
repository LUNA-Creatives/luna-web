import { SlsDbItem } from '../../types';

export type Skill = SlsDbItem & {
  alt: string;
  id: number;
  url: string;
};
