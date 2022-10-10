import { CustomDivider } from '../../CustomDivider';
import { Portfolio, Parallax, OurOffers, Information } from './index';
import { IService } from './types';


export const Service = ({ data }: IService) => {
  return (
    <>
      <Parallax data={data.header} />
      <Information headline={data.headline} data={data.information} />
      <CustomDivider />
      {data.offers && (
        <>
          <OurOffers data={data.offers} /> <CustomDivider hasBackgroundColor />
        </>
      )}
      <Portfolio data={data.portfolio} />
    </>
  );
};
