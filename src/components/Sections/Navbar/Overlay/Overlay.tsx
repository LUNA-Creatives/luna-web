import { useState } from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import useStyles from './style';
import { IOverlay, Item, Link as LinkType } from './types';

export const Overlay = ({ data, closeOverlay }: IOverlay) => {
  const classes = useStyles();
  const [extend, setExtend] = useState(-1);

  return (
    <Container className={classes.container}>
      <Container className={classes.flexContainer}>
        {data.map((item: Item, i: number) => (
          <Box key={i} component={'div'} className={classes.textContainer}>
            <Box component={'div'} className={classes.textBox}>
              <Typography variant={'h3'} className={classes.heading}>
                {item.headline}
              </Typography>
              <Box component={'div'} className={classes.linkBox}>
                {item.links.map((type: LinkType, index: number) =>
                  // Links navigating within app
                  i === 0 ? (
                    <RouterLink
                      key={index}
                      onMouseEnter={() => setExtend(type.id)}
                      onMouseLeave={() => setExtend(-1)}
                      to={type.link}
                      onClick={() =>
                        closeOverlay(false) & (window.scrollTo(0, 0) as any)
                      }
                      className={classes.link}
                    >
                      <Typography variant={'h4'}>{type.text}</Typography>
                      <Typography variant={'h4'}>{type?.zipcode}</Typography>
                      <span
                        className={clsx(classes.underline, {
                          [classes.extended]: extend === type.id,
                        })}
                      ></span>
                    </RouterLink>
                  ) : (
                    // Links navigating outside app
                    <Link
                      key={index}
                      onMouseEnter={() => setExtend(type.id)}
                      onMouseLeave={() => setExtend(-1)}
                      href={type.link}
                      onClick={() =>
                        closeOverlay(false) & (window.scrollTo(0, 0) as any)
                      }
                      className={classes.link}
                    >
                      <Typography variant={'h4'}>{type.text}</Typography>
                      <Typography variant={'h4'}>{type?.zipcode}</Typography>
                      <span
                        className={clsx(classes.underline, {
                          [classes.extended]: extend === type.id,
                        })}
                      ></span>
                    </Link>
                  )
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </Container>
    </Container>
  );
};
