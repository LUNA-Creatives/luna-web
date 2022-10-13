import { Box, Typography } from '@mui/material';

import { IColumnData } from './types';
import { LinkItem as LinkItemType, RouterItem } from '../types';
import useStyles from './style';
import { RouterNavItem } from './RouterNavItem';
import { LinkItem } from './LinkItem';

export const MenuColumn = ({ closeOverlay, data }: IColumnData) => {
  const classes = useStyles();

  return (
    <Box
      key={data.headline}
      component={'div'}
      className={classes.textContainer}
    >
      <Box component={'div'} className={classes.textBox}>
        <Typography variant={'h3'} className={classes.headline}>
          {data.headline}
        </Typography>
        <Box component={'div'} className={classes.linkBox}>
          {data.routerItems
            ? data.routerItems?.map((routerItem: RouterItem) => (
                <RouterNavItem
                  key={routerItem.id}
                  data={routerItem}
                  closeOverlay={closeOverlay}
                />
              ))
            : data.linkItems?.map((linkItem: LinkItemType) => (
                <LinkItem
                  key={linkItem.id}
                  data={linkItem}
                  closeOverlay={closeOverlay}
                />
              ))}
        </Box>
      </Box>
    </Box>
  );
};
