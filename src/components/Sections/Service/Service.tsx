import { Parallax } from './Parallax';
import { IService } from './types';

export const Service = ({ data }: IService) => {
  return (
    <>
      <Parallax data={data.header} />
    </>
  );
};
