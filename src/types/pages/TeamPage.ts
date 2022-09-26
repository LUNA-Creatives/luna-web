import { ICard } from '../../components/Sections/Team/Card/types';

export default interface ITeamPage {
  key: string;
  created?: string;
  modified?: string;
  value?: ICard;
}
