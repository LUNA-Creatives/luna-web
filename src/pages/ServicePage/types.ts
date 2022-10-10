import { Column } from '../../components/Sections/Service/Information/types';
import { Card } from '../../components/Sections/Service/OurOffers/Card/types';
import { Header } from '../../components/Sections/Service/Parallax';
import { Portfolio } from '../../components/Sections/Service/Portfolio/types';

export interface IServicePage {
  slug: string;
  headline: string;
  header: Header;
  information: Column[];
  offers?: Card[];
  portfolio: Portfolio;
}
