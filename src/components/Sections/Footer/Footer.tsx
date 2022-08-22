import { Link, Grid, Container, Typography, Box } from '@material-ui/core';
import { Icon } from '@iconify/react';

import useStyles from './style';
import { IFooter } from './types';

export const Footer = ({ data }: IFooter) => {
  const classes = useStyles();

  const openEmail = `mailto:${data.emailAddress}?`;

  const phoneCall = `tel:${data.phoneNumber}`;

  return (
    <Grid className={classes.root}>
      <Grid className={classes.container}>
        <Container>
          <Typography className={classes.heading} variant={'h1'}>
            {data.heading}
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

                {data.emailAddress}
              </Link>
              <Link href={phoneCall} variant={'body1'} className={classes.box}>
                <Icon
                  className={classes.icon}
                  icon="ant-design:phone-outlined"
                  width={18}
                  color="white"
                />

                {data.phoneNumber}
              </Link>
              <Link
                href={data.addressLink}
                variant={'body1'}
                className={classes.box}
              >
                <Icon
                  className={classes.icon}
                  icon="ic:outline-place"
                  color="white"
                />

                {data.location}
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
