import { Header } from './Header';
import { Information } from './Information';
import { CustomDivider } from '../../CustomDivider';

export const Service = ({ data }: any) => {
  return (
    <>
      <Header data={data.header} />
      <Information data={data.information} />
      <CustomDivider hasBackgroundColor />
    </>
  );
};
