import { Grid, Container, Typography, Box, Button } from '@mui/material';

import { ICallToAction } from './types';
import useStyles from './style';
import { Section } from './types';

export const CallToAction = ({ data }: ICallToAction) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Box component={'div'} className={classes.textBox}>
          <Typography variant="h1">{data.headline}</Typography>
        </Box>
        <Box component={'div'} className={classes.box}>
          {data.sections.map((section: Section, index: number) => (
            <Box className={classes.sectionBox} component={'div'} key={index}>
              <Typography variant="h3">{section.subHeadline}</Typography>
              <Typography variant="body1">{section.text}</Typography>
              <Button className={classes.button} color="primary">
                {section.button}
              </Button>
            </Box>
          ))}
        </Box>
      </Container>
    </Grid>
  );
};
