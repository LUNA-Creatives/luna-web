import { Parallax } from './Parallax';

export const Service = ({ data }: any) => {
  return (
    <>
      <Parallax data={data.header} />
    </>
  );
};
