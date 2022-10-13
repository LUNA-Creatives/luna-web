import { useState } from 'react';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

import useStyles from './style';
import { IToggleItem } from './types';

export const ToggleList = ({ data, closeOverlay }: IToggleItem) => {
  const classes = useStyles();
  const [extendUnderline, setExtendUnderline] = useState(-1);

  return (
    <RouterLink
      key={data.id}
      onMouseEnter={() => setExtendUnderline(data.id)}
      onMouseLeave={() => setExtendUnderline(-1)}
      to={data.link}
      onClick={() => closeOverlay(false) & (window.scrollTo(0, 0) as any)}
      className={classes.link}
    >
      <Typography variant={'h5'}>{data.text}</Typography>
      <span
        className={clsx(classes.underline, {
          [classes.extended]: extendUnderline === data.id,
        })}
      ></span>
    </RouterLink>
  );
};
