import { Grid } from '@mui/material';

import { Vision, Footer, Navbar } from '../../components/Sections';
import data from '../../assets/data/data.json';
import useStyles from '../style';

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
