import { useEffect } from 'react';
import { Grid, Container, Typography, Box, Button } from '@mui/material';

import { ICallToAction } from './types';
import useStyles from './style';
import { Section } from './types';

export const CallToAction = ({ data }: ICallToAction) => {
  const classes = useStyles();

  useEffect(() => {
    console.log('data', data);
  }, []);
  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Box component={'div'}>
          <Typography variant="h2">{data.headline}</Typography>
        </Box>
        <Box component={'div'}>
          {data.sections.map((section: Section, index: number) => (
            <Box component={'div'}>
              <Typography variant="h3">{section.subHeadline}</Typography>
              <Typography variant="h5">{section.text}</Typography>
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
