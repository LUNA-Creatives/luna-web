import React, { useRef, useEffect } from 'react';
import { Grid, Container, Box, Typography, Link } from '@mui/material';

import useStyles from './style';
import { IPopup, SubHeadline } from './types';
import { useStore } from '../../../state';
import { CloseButton } from '../../CloseButton';

const PopupWrapper = React.forwardRef((props: any, ref: any) => (
  <Grid ref={ref}>{props.children}</Grid>
));

export const Popup = ({ data }: IPopup) => {
  const classes = useStyles();
  const ref = useRef();
  const ShowPopup = useStore((state) => state.showPopup);
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const setShowPopup = useStore((state) => state.setShowPopup);

  const useOnClickOutside = (ref: any, handler: any) => {
    useEffect(() => {
      const listener = (event: any) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler]);
  };
  useOnClickOutside(ref, () => setShowPopup(false));

  return (
    <Grid className={classes.root}>
      {ShowPopup && (
        <PopupWrapper ref={ref}>
          <Container className={classes.container}>
            <Box
              onClick={() => setShowPopup(false)}
              component={'div'}
              className={classes.closeButton}
            >
              <CloseButton />
            </Box>
            <Box component={'div'} className={classes.box}>
              <Box component={'div'} className={classes.textBox}>
                <Typography className={classes.headline} variant={'h2'}>
                  {data.headline}
                </Typography>
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
              <Box component={'div'} className={classes.flexBox}>
                {data.subHeadline.map((column: SubHeadline) => (
                  <Box
                    key={column.id}
                    component={'div'}
                    className={classes.columnBox}
                  >
                    <Typography className={classes.headline} variant={'h5'}>
                      {column.headline}
                    </Typography>

                    <Link
                      onClick={() => openInNewTab(column.url as string)}
                      className={classes.link}
                    >
                      <Typography variant={'body1'}>{column.street}</Typography>
                      <Typography variant={'body1'}>{column.city}</Typography>
                    </Link>
                    <Link
                      className={classes.link}
                      onClick={() =>
                        openInNewTab(`mailto:${column.emailAddress}?`)
                      }
                    >
                      <Typography variant={'body1'} fontWeight={'600'}>
                        {column.emailAddress}
                      </Typography>
                    </Link>
                    <Link
                      href={`tel:${column.phoneNumber}`}
                      className={classes.link}
                    >
                      <Typography variant={'body1'} fontWeight={'600'}>
                        {column.phoneNumber}
                      </Typography>
                    </Link>
                    <Typography
                      display={'inline'}
                      fontWeight={'600'}
                      variant={'body1'}
                    >
                      {column.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>
        </PopupWrapper>
      )}
    </Grid>
  );
};
