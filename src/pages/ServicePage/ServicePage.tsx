import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';

import data from '../../assets/data/data.json';
import { useStore } from '../../state/GlobalState';
import useStyles from '../style';
import {
  Contact,
  Popup,
  Footer,
  Navbar,
  Service,
} from '../../components/Sections';

export const ServicePage = () => {
  const classes = useStyles();
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
      <Grid className={classes.root}>
        <Navbar data={data.navbar} />
        {slugData && <Service data={slugData} />}
        <Contact data={data.contact} />
        <Footer data={data.footer} />
      </Grid>
    </>
  );
};
