import { Parallax } from './Parallax';
import { Header } from '../Service/Parallax';
export interface IService {
  data: {
    header: Header;
  };
}
export const Service = ({ data }: IService) => {
  return (
    <>
      <Parallax data={data.header} />
    </>
  );
};
