import { Header } from './Header';

export const Service = ({ data }: any) => {
  return (
    <>
      <Header data={data.header} />
    </>
  );
};
