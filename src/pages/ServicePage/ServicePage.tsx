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
import { IServicePage } from './types';

export const ServicePage = () => {
  const { slug } = useParams();
  const showPopup = useStore((state) => state.showPopup);
  const [serviceData, setServiceData] = useState<IServicePage>();

  const servicePageData: IServicePage[] = data.servicePage.map(
    (serviceObject: IServicePage) => serviceObject
  );

  useEffect(() => {
    servicePageData.forEach((serviceObject) => {
      if (serviceObject.slug === slug) {
        const serviceData: IServicePage = serviceObject;
        setServiceData(serviceData);
      }
    });
  }, []);
  return (
    <>
      {showPopup && <Popup data={data.popup} />}
      <Navbar data={data} />
      {serviceData && <Service data={serviceData} />}
      <Contact data={data.contact} />
      <Footer data={data.footer} />
    </>
  );
};
