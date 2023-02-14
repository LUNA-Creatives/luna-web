import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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

  const title = "Services"
  const description =  "We develop mobile applications and web applications. Based in Gothenburg."

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
  }, [serviceData, servicePageData, slug]);

  const url = `https://lunacreatives.se/services/${slug}`

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      {showPopup && <Popup data={data.popup} />}
      <Navbar data={data} />
      {serviceData && <Service data={serviceData} />}
      <Contact data={data.contact} />
      <Footer data={data.footer} />
    </>
  );
};
