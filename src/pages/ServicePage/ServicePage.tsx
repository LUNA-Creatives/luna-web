import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import data from '../../assets/data/data.json';
import { useStore } from '../../state/GlobalState';
import {
  Contact,
  Popup,
  Footer,
  Navbar,
  Service,
} from '../../components/Sections';

export const ServicePage = () => {
  const { slug } = useParams();
  const showPopup = useStore((state) => state.showPopup);
  const [slugData, setSlugData] = useState() as any;

  const mappedArray = data.servicePage.map((x: any) => x);

  useEffect(() => {
    mappedArray.forEach((o: any) => {
      if (o.slug === slug) {
        setSlugData(o);
      }
    });
  });
  return (
    <>
      {showPopup && <Popup data={data.popup} />}
      <Navbar data={data} />
      {slugData && <Service data={slugData} />}
      <Contact data={data.contact} />
      <Footer data={data.footer} />
    </>
  );
};
