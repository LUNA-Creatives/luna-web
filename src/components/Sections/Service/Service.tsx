import { CustomDivider } from '../../CustomDivider';
import { Information } from './Information';
import { Parallax } from './Parallax';
import { IService } from './types';

export const Service = ({ data }: IService) => {
  return (
    <>
      <Parallax data={data.header} />
      <Information headline={data.headline} data={data.information} />
      <CustomDivider hasBackgroundColor />
    </>
  );
};
