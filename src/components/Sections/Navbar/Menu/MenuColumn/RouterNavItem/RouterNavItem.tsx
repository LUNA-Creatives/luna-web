import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import useStyles from './style';
import { IRouterNavItem } from './types';
import { ToggleList } from './ToggleList';
import { ServiceItem } from '../../types';

export const RouterNavItem = ({ closeOverlay, data }: IRouterNavItem) => {
  const classes = useStyles();
  const [extendUnderline, setExtendUnderline] = useState(-1);
  const [showToggleItems, setShowToggleItems] = useState(false);

  const handleToggleItem = (itemId: number) => {
    setExtendUnderline(itemId);
    if (showToggleItems) {
      setShowToggleItems(false);
    } else {
      setShowToggleItems(true);
    }
  };
  return (
    <Box component={'div'}>
      {data.link && (
        <RouterLink
          key={data.id}
          onMouseEnter={() => setExtendUnderline(data.id)}
          onMouseLeave={() => setExtendUnderline(-1)}
          to={data.link}
          onClick={() => closeOverlay(false) & (window.scrollTo(0, 0) as any)}
          className={classes.link}
        >
          <Typography variant={'h4'}>{data.text1}</Typography>
          <span
            className={clsx(classes.underline, {
              [classes.extended]: extendUnderline === data.id,
            })}
          ></span>
        </RouterLink>
      )}
      {data.toggleItem && (
        <Box component={'div'}>
          <Box
            className={classes.link}
            component={'div'}
            onMouseEnter={() => setExtendUnderline(data.id)}
            onMouseLeave={() => setExtendUnderline(-1)}
            onClick={() => handleToggleItem(data.id)}
          >
            <Box component={'div'} className={classes.iconBox}>
              <Box component={'div'} className={classes.text}>
                <Typography variant={'h4'}>{data.toggleItem?.text1}</Typography>
              </Box>
              {showToggleItems ? <ExpandLess /> : <ExpandMore />}
            </Box>
            <span
              className={clsx(classes.underline, {
                [classes.extended]: extendUnderline === data.id,
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
            {data.toggleItem.serviceItems?.map((serviceItem: ServiceItem) => (
              <ToggleList
                key={serviceItem.id}
                data={serviceItem}
                closeOverlay={closeOverlay}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};
