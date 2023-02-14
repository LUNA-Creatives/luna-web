import { Grid } from '@mui/material';
import { Helmet } from 'react-helmet';

import { Vision, Footer, Navbar } from '../../components/Sections';
import data from '../../assets/data/data.json';
import useStyles from '../style';

export const AboutPage = () => {
  const classes = useStyles();

  const title = "About LUNA"
  const description =  "Home of creativity. Aim for the moon but stay busy gazing at the stars. This defines where we are headed towards in our digital ventures."

  return (
    <Grid className={classes.root}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={"https://lunacreatives.se/about-us"} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <Navbar data={data} />
      <Vision data={data.vision} />
      <Footer data={data.footer} />
    </Grid>
  );
};
