import { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
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
                {item.links.map((item: LinkType, index: number) => (
                  <Link
                    key={index}
                    onMouseEnter={() => setExtend(item.id)}
                    onMouseLeave={() => setExtend(-1)}
                    to={item.link}
                    onClick={() => closeOverlay(false)}
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
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Container>
    </Container>
  );
};
