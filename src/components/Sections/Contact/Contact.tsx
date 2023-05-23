import {
  Grid,
  Container,
  Box,
  Typography,
  Button,
  useMediaQuery,
} from '@mui/material';

import { IContact } from './types';
import useStyles from './style';
import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';
import { useStore } from '../../../state/GlobalState';

export const Contact = ({ data }: IContact) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(`(min-width:${ipadBreakpoint}px)`);
  const setShowPopup = useStore((state: any) => state.setShowPopup);

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Box component={'div'} className={classes.flexBox}>
          <Box component={'div'} className={classes.textBox}>
            <Typography className={classes.headline} variant={'h2'}>
              {data.headline}
            </Typography>
            <Box component={'div'}>
              <Typography display={'inline'} variant={'body1'}>
                {data.text}{' '}
              </Typography>
              <Typography
                display={'inline'}
                fontWeight={'600'}
                variant={'body1'}
              >
                {data.punchline}
              </Typography>
            </Box>
            <Button
              onClick={() => setShowPopup(true)}
              className={classes.button}
              color="primary"
            >
              {data.buttonText}
            </Button>
          </Box>
          {isDesktop && (
            <Box component={'div'} className={classes.imageBox}>
              <img
                className={classes.image}
                src={data.imageSource}
                alt="wavy"
                loading="lazy"
              />
            </Box>
          )}
        </Box>
      </Container>
    </Grid>
  );
};
