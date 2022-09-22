import { useState } from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import clsx from 'clsx';

import useStyles from './style';
import { IOverlay } from './types';

export const Overlay = ({ data }: IOverlay) => {
  const classes = useStyles();
  const [extend, setExtend] = useState(0);

  return (
    <Container className={classes.overlay}>
      <Container>
        <Box component={'div'} className={classes.textBox}>
          <Box component={'div'}>
            <Typography variant={'h3'}>
              {data.navBar.navigation.meny.headline.toUpperCase()}
            </Typography>
            <Box component={'div'} className={classes.linkBox}>
              <Link
                onMouseEnter={() => setExtend(1)}
                onMouseLeave={() => setExtend(0)}
                href={data.navBar.navigation.meny.home.link}
                className={classes.link}
              >
                <Typography variant={'h4'}>
                  {data.navBar.navigation.meny.home.text}
                </Typography>
                <span
                  className={clsx(classes.underline, {
                    [classes.extended]: extend === 1,
                  })}
                ></span>
              </Link>
            </Box>
            <Box component={'div'} className={classes.linkBox}>
              <Link
                onMouseEnter={() => setExtend(2)}
                onMouseLeave={() => setExtend(0)}
                href={data.navBar.navigation.meny.about.link}
                className={classes.link}
              >
                <Typography variant={'h4'}>
                  {data.navBar.navigation.meny.about.text}
                </Typography>
                <span
                  className={clsx(classes.underline, {
                    [classes.extended]: extend === 2,
                  })}
                ></span>
              </Link>
            </Box>
            <Box component={'div'} className={classes.linkBox}>
              <Link
                onMouseEnter={() => setExtend(3)}
                onMouseLeave={() => setExtend(0)}
                href={data.navBar.navigation.meny.team.link}
                className={classes.link}
              >
                <Typography variant={'h4'}>
                  {data.navBar.navigation.meny.team.text}
                </Typography>
                <span
                  className={clsx(classes.underline, {
                    [classes.extended]: extend === 3,
                  })}
                ></span>
              </Link>
            </Box>
          </Box>
          <Box component={'div'}>
            <Typography variant={'h3'}>
              {data.navBar.navigation.contact.headline.toUpperCase()}
            </Typography>
            <Box component={'div'} className={classes.linkBox}>
              <Link
                onMouseEnter={() => setExtend(4)}
                onMouseLeave={() => setExtend(0)}
                href={data.footer.addressLink}
                className={classes.link}
              >
                <Typography variant={'h4'}>{data.footer.location}</Typography>
                <Typography variant={'h4'}>{data.footer.zipCode}</Typography>
                <span
                  className={clsx(classes.underline, {
                    [classes.extended]: extend === 4,
                  })}
                ></span>
              </Link>
            </Box>
          </Box>
          <Box component={'div'}>
            <Typography variant={'h3'}>
              {data.navBar.navigation.socials.headline.toUpperCase()}
            </Typography>
            <Box component={'div'} className={classes.linkBox}>
              <Link
                onMouseEnter={() => setExtend(5)}
                onMouseLeave={() => setExtend(0)}
                href={data.footer.urls.linkedInUrl}
                className={classes.link}
              >
                <Typography variant={'h4'}>
                  {data.navBar.navigation.socials.link.linkedin}
                </Typography>
                <span
                  className={clsx(classes.underline, {
                    [classes.extended]: extend === 5,
                  })}
                ></span>
              </Link>
              <Link
                onMouseEnter={() => setExtend(6)}
                onMouseLeave={() => setExtend(0)}
                href={data.footer.urls.instagramUrl}
                className={classes.link}
              >
                <Typography variant={'h4'}>
                  {data.navBar.navigation.socials.link.instagram}
                </Typography>
                <span
                  className={clsx(classes.underline, {
                    [classes.extended]: extend === 6,
                  })}
                ></span>
              </Link>
              <Link
                onMouseEnter={() => setExtend(7)}
                onMouseLeave={() => setExtend(0)}
                href={data.footer.urls.facebookUrl}
                className={classes.link}
              >
                <Typography variant={'h4'}>
                  {data.navBar.navigation.socials.link.facebook}
                </Typography>
                <span
                  className={clsx(classes.underline, {
                    [classes.extended]: extend === 7,
                  })}
                ></span>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};
