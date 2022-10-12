import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

import useStyles from './style';
import { IRouterNavItem } from './types';
import { ToggleList } from './ToggleList';
import { ServiceItem } from '../../types';

export const RouterNavItem = ({ closeOverlay, data }: IRouterNavItem) => {
  const classes = useStyles();
  const [extend, setExtend] = useState(-1);
  const [showToggleItems, setShowToggleItems] = useState(false);

  const handleToggleItem = (itemId: number) => {
    setExtend(itemId);
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
          onMouseEnter={() => setExtend(data.id)}
          onMouseLeave={() => setExtend(-1)}
          to={data.link}
          onClick={() => closeOverlay(false) & (window.scrollTo(0, 0) as any)}
          className={classes.link}
        >
          <Typography variant={'h4'}>{data.text1}</Typography>
          <span
            className={clsx(classes.underline, {
              [classes.extended]: extend === data.id,
            })}
          ></span>
        </RouterLink>
      )}
      {data.toggleItem && (
        <Box component={'div'}>
          <Box
            className={classes.link}
            component={'div'}
            onMouseEnter={() => setExtend(data.id)}
            onMouseLeave={() => setExtend(-1)}
            onClick={() => handleToggleItem(data.id)}
          >
            <Typography variant={'h4'}>{data.toggleItem?.text1}</Typography>
            <span
              className={clsx(classes.underline, {
                [classes.extended]: extend === data.id,
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
