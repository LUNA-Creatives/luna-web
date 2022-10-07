import { CustomDivider } from '../../CustomDivider';
import { Information } from './Information';
import { Parallax } from './Parallax';

export const Service = ({ data }: any) => {
  return (
    <>
      <Parallax data={data.header} />
      <Information headline={data.headline} data={data.information} />
      <CustomDivider hasBackgroundColor />
    </>
  );
};
