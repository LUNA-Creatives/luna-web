import { Link, Grid, Container, Typography, Box } from '@material-ui/core';
import { Icon } from '@iconify/react';

import useStyles from './style';
import { IFooter } from './types';

export const Footer = ({
  emailAddress,
  phoneNumber,
  location,
  heading,
}: IFooter) => {
  const classes = useStyles();

  const openEmail = `mailto:${emailAddress}?`;

  const phoneCall = `tel:${phoneNumber}`;

  const adressLink =
    'https://www.google.com/maps/place/Norra+Gubberogatan+30,+416+63+G%C3%B6teborg/@57.7110727,11.9989526,19.99z/data=!4m13!1m7!3m6!1s0x464ff3807eee5043:0xa9505df8e18bb9f4!2sNorra+Gubberogatan+30,+416+63+G%C3%B6teborg!3b1!8m2!3d57.7112605!4d11.999111!3m4!1s0x464ff3807eee5043:0xa9505df8e18bb9f4!8m2!3d57.7112605!4d11.999111';

  return (
    <Grid className={classes.root}>
      <Grid className={classes.container}>
        <Container>
          <Typography className={classes.heading} variant={'h2'}>
            {heading}
          </Typography>
          <Box className={classes.infobox}>
            <Box className={classes.flexbox}>
              <Link variant={'body1'} href={openEmail} className={classes.box}>
                <Icon
                  className={classes.icon}
                  icon="fluent:mail-24-regular"
                  width={18}
                  color="white"
                />

                {emailAddress}
              </Link>
              <Link href={phoneCall} variant={'body1'} className={classes.box}>
                <Icon
                  className={classes.icon}
                  icon="ant-design:phone-outlined"
                  width={18}
                  color="white"
                />

                {phoneNumber}
              </Link>
              <Link href={adressLink} variant={'body1'} className={classes.box}>
                <Icon
                  className={classes.icon}
                  icon="ic:outline-place"
                  color="white"
                />

                {location}
              </Link>
            </Box>
            <Box className={classes.box}>
              <Icon
                icon="akar-icons:linkedin-fill"
                width={18}
                color="white"
                className={classes.icon}
              />
              <Icon
                icon="akar-icons:instagram-fill"
                width={18}
                color="white"
                className={classes.icon}
              />
            </Box>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
