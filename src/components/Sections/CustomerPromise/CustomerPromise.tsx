import {
  Grid,
  Container,
  Box,
  Typography,
  useMediaQuery,
  Button,
} from '@mui/material';

import useStyles from './style';
import { ICustomerPromise } from './types';
import lunaIphone from '../../../assets/images/lunaIphone.png';
import { ipadBreakpoint } from '../../../utils/screenSizeBreakpoints';
import { useStore } from '../../../state/GlobalState';

export const CustomerPromise = ({ data }: ICustomerPromise) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(`(min-width:${ipadBreakpoint}px)`);
  const setShowPopup = useStore(
    (state: { setShowPopup: any }) => state.setShowPopup
  );

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Typography className={classes.headline} variant="h2">
          {data.headline}
        </Typography>
        <Box component={'div'} className={classes.flexBox}>
          <Box component={'div'} className={classes.textBox}>
            {data.textSections.map((text: string, index: number) => (
              <Typography key={index} variant="body1" className={classes.text}>
                {text}
              </Typography>
            ))}
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              onClick={() => setShowPopup(true)}
            >
              {data.buttonText}
            </Button>
          </Box>
          {isDesktop && (
            <Box component={'div'} className={classes.imageBox}>
              <img
                className={classes.image}
                src={lunaIphone}
                alt="luna App"
                loading="lazy"
              />
            </Box>
          )}
        </Box>
      </Container>
    </Grid>
  );
};
