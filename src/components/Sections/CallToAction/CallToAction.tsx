import {
  Grid,
  Container,
  Typography,
  Box,
  Button,
  useMediaQuery,
} from '@mui/material';

import { ICallToAction } from './types';
import useStyles from './style';
import { Section } from './types';
import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';

export const CallToAction = ({ data }: ICallToAction) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(`(min-width:${ipadBreakpoint}px)`);

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
              {isDesktop && index === 0 && (
                <Box component={'div'} className={classes.underline} />
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Grid>
  );
};
