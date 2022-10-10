import { Column } from '../../components/Sections/Service/Information/types';
import { Header } from '../../components/Sections/Service/Parallax';

export interface IServicePage {
  slug: string;
  headline: string;
  header: Header;
  information: Column[];
}
