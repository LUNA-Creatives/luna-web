import { Grid } from '@mui/material';

import { Vision } from '../../components/Sections/Vision';
import data from '../../assets/data/data.json';
import { Footer } from '../../components/Sections/Footer';
import { Navbar } from '../../components/Navbar';
import useStyles from '../Styling/style';

export const AboutPage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Navbar data={data} />
      <Vision data={data.vision} />
      <Footer data={data.footer} />
    </Grid>
  );
};
