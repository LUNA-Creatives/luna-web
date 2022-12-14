import {
  Grid,
  Container,
  Typography,
  Box,
  Button,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { ICallToAction, Section } from './types';
import useStyles from './style';
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
              <Typography className={classes.subHeadline} variant="h2">
                {section.subHeadline}
              </Typography>
              <Typography variant="body1">{section.text}</Typography>
              <Link
                className={classes.routeLink}
                to={section.url}
                onClick={() => window.scrollTo(0, 0)}
              >
                <Button className={classes.button} color="primary">
                  {section.button}
                </Button>
              </Link>
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
