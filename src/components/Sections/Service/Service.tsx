import { CustomDivider } from '../../CustomDivider';
import { Portfolio, Parallax, OurOffers, Information } from './index';

export const Service = ({ data }: any) => {
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
