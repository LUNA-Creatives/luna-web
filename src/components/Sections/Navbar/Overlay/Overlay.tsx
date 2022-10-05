import { useState } from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

import useStyles from './style';
import { IOverlay, ColumnData, NavItem } from './types';

export const Overlay = ({ data, closeOverlay }: IOverlay) => {
  const classes = useStyles();
  const [extend, setExtend] = useState(-1);

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    closeOverlay(false);
  };

  return (
    <Container className={classes.container}>
      <Container className={classes.flexContainer}>
        {data.map((column: ColumnData, i: number) => (
          <Box key={i} component={'div'} className={classes.textContainer}>
            <Box component={'div'} className={classes.textBox}>
              <Typography variant={'h3'} className={classes.headline}>
                {column.headline}
              </Typography>
              <Box component={'div'} className={classes.linkBox}>
                {column.navItems.map((item: NavItem, index: number) =>
                  // Links navigating within app
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
                      <Typography variant={'h4'}>{item.text1}</Typography>
                      <Typography variant={'h4'}>{item?.text2}</Typography>
                      <span
                        className={clsx(classes.underline, {
                          [classes.extended]: extend === item.id,
                        })}
                      ></span>
                    </RouterLink>
                  ) : (
                    // Links navigating outside app
                    <Link
                      key={index}
                      onMouseEnter={() => setExtend(item.id)}
                      onMouseLeave={() => setExtend(-1)}
                      onClick={() => openInNewTab(item.link)}
                      className={classes.link}
                    >
                      <Typography variant={'h4'}>{item.text1}</Typography>
                      <Typography variant={'h4'}>{item?.text2}</Typography>
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
