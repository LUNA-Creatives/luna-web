import { useState } from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

import useStyles from './style';
import { IOverlay, ColumnData, NavItem, serviceItem } from './types';

export const Overlay = ({ data, closeOverlay }: IOverlay) => {
  const classes = useStyles();
  const [extend, setExtend] = useState(-1);
  const [showToggleItems, setShowToggleItems] = useState(false);

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    closeOverlay(false);
  };

  const handleToggleItem = (itemId: number) => {
    setExtend(itemId);
    if (showToggleItems) {
      setShowToggleItems(false);
    } else {
      setShowToggleItems(true);
    }
  };

  return (
    <Container className={classes.container}>
      <Container className={classes.flexContainer}>
        {data.map((column: ColumnData) => (
          <Box
            key={column.headline}
            component={'div'}
            className={classes.textContainer}
          >
            <Box component={'div'} className={classes.textBox}>
              <Typography variant={'h3'} className={classes.headline}>
                {column.headline}
              </Typography>
              <Box component={'div'} className={classes.linkBox}>
                {column.navItems.map((item: NavItem) => (
                  // Links navigating within app

                  <>
                    <Box component={'div'}>
                      {item.link && column.id === 1 && (
                        <RouterLink
                          key={item.id}
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
                      )}
                      {item.toggleItem && (
                        <Box component={'div'}>
                          <Box
                            className={classes.link}
                            component={'div'}
                            onMouseEnter={() => setExtend(item.id)}
                            onMouseLeave={() => setExtend(-1)}
                            onClick={() => handleToggleItem(item.id)}
                          >
                            <Typography variant={'h4'}>
                              {item.toggleItem.text1}
                            </Typography>
                            <span
                              className={clsx(classes.underline, {
                                [classes.extended]: extend === item.id,
                                [classes.active]: showToggleItems,
                              })}
                            ></span>
                          </Box>
                          <Box
                            component={'div'}
                            className={clsx(classes.toggleItems, {
                              [classes.showToggleItems]: showToggleItems,
                            })}
                          >
                            {item.toggleItem.serviceItems?.map(
                              (serviceItem: serviceItem) => (
                                <RouterLink
                                  key={serviceItem.id}
                                  onMouseEnter={() => setExtend(serviceItem.id)}
                                  onMouseLeave={() => setExtend(-1)}
                                  to={serviceItem.link}
                                  onClick={() =>
                                    closeOverlay(false) &
                                    (window.scrollTo(0, 0) as any)
                                  }
                                  className={classes.link}
                                >
                                  <Typography variant={'h5'}>
                                    {serviceItem.text}
                                  </Typography>
                                  <span
                                    className={clsx(classes.underline, {
                                      [classes.extended]:
                                        extend === serviceItem.id,
                                    })}
                                  ></span>
                                </RouterLink>
                              )
                            )}
                          </Box>
                        </Box>
                      )}
                    </Box>
                    <Box component={'div'}>
                      {column.id > 1 && (
                        <Link
                          key={item.id}
                          onMouseEnter={() => setExtend(item.id)}
                          onMouseLeave={() => setExtend(-1)}
                          onClick={() => openInNewTab(item.link as string)}
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
                      )}
                    </Box>
                  </>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Container>
    </Container>
  );
};
