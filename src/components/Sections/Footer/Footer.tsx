import { Link, Grid, Container, Typography, Box } from '@material-ui/core';
import { Icon } from '@iconify/react';

import useStyles from './style';
import { IFooter } from './types';
import { motion } from 'framer-motion';

export const Footer = ({ data }: IFooter) => {
  const classes = useStyles();
  const openEmail = `mailto:${data.emailAddress}?`;
  const phoneCall = `tel:${data.phoneNumber}`;
  return (
    <Grid className={classes.root}>
      <Grid className={classes.container}>
        <Container className={classes.flexbox}>
          <Box>
            <Box className={classes.textBox}>
              <Typography variant={'h2'}>{data.heading}</Typography>
            </Box>
            <Box className={classes.textBox}>
              <Typography variant={'h5'}>
                {data.text}

                <Icon icon="gridicons:arrow-right" inline={true} />

                <Link underline={'always'} variant={'h5'} href={openEmail}>
                  {data.emailAddress}
                </Link>
              </Typography>
            </Box>
          </Box>
          <Box className={classes.box}>
            <Grid className={classes.gridContainer}>
              <Link
                className={classes.iconBox}
                href={data.addressLink}
                variant={'body1'}
              >
                <motion.div
                  className={classes.iconBox}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.2 }}
                >
                  <Icon
                    width={30}
                    className={classes.icon}
                    icon="ic:outline-place"
                  />
                  <Typography className={classes.text}>
                    {data.location}
                  </Typography>
                </motion.div>
              </Link>
              <Link
                href={'https://www.instagram.com/lunacreatives.se/?hl=en'}
                className={classes.socialIcon}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.2 }}
                  className={classes.icon}
                >
                  <Icon
                    icon="akar-icons:instagram-fill"
                    width={30}
                    className={classes.icon}
                  />
                </motion.div>
              </Link>

              <Link
                className={classes.iconBox}
                href={phoneCall}
                variant={'body1'}
              >
                <motion.div
                  className={classes.iconBox}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.2 }}
                >
                  <Icon
                    className={classes.icon}
                    icon="ant-design:phone-outlined"
                    width={30}
                  />
                  <Typography className={classes.text}>
                    {data.phoneNumber}
                  </Typography>
                </motion.div>
              </Link>
              <Link
                href={'https://www.linkedin.com/company/lunacreatives/'}
                className={classes.socialIcon}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.2 }}
                  className={classes.icon}
                >
                  <Icon icon="akar-icons:linkedin-fill" width={30} />
                </motion.div>
              </Link>
            </Grid>
          </Box>
        </Container>
      </Grid>

      <Typography className={classes.text} variant="body2">
        {data.copyRights}
      </Typography>
    </Grid>
  );
};
