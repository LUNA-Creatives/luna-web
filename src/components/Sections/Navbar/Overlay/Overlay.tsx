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
                {item.links.map((item: LinkType, index: number) =>
                  i === 0 ? (
                    <RouterLink
                      key={index}
                      onMouseEnter={() => setExtend(item.id)}
                      onMouseLeave={() => setExtend(-1)}
                      to={item.link}
                      onClick={() =>
                        closeOverlay(false) & (window.scrollTo(0, 0) as any)
                      }
                      className={classes.link}
                    >
                      <Typography variant={'h4'}>{item.text}</Typography>
                      <Typography variant={'h4'}>{item?.zipcode}</Typography>
                      <span
                        className={clsx(classes.underline, {
                          [classes.extended]: extend === item.id,
                        })}
                      ></span>
                    </RouterLink>
                  ) : (
                    <Link
                      key={index}
                      onMouseEnter={() => setExtend(item.id)}
                      onMouseLeave={() => setExtend(-1)}
                      href={item.link}
                      onClick={() =>
                        closeOverlay(false) & (window.scrollTo(0, 0) as any)
                      }
                      className={classes.link}
                    >
                      <Typography variant={'h4'}>{item.text}</Typography>
                      <Typography variant={'h4'}>{item?.zipcode}</Typography>
                      <span
                        className={clsx(classes.underline, {
                          [classes.extended]: extend === item.id,
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
