import { Icon } from '../../components/Sections/Skills/types';
import { SlsDbItem } from '../../types';

export type Skill = SlsDbItem & {
  techIcons: Icon[];
  helperIcons: Icon[];
  designIcons: Icon[];
};
