import { CustomDivider } from '../../CustomDivider';
import { Information } from './Information';
import { OurOffers } from './OurOffers';
import { Parallax } from './Parallax';
import { IService } from './types';

export const Service = ({ data }: IService) => {
  return (
    <>
      <Parallax data={data.header} />
      <Information headline={data.headline} data={data.information} />
      <CustomDivider hasBackgroundColor />
      {data.offers && <OurOffers data={data.offers} />}
    </>
  );
};
