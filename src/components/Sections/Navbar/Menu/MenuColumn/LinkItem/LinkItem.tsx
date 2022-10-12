import { useState } from 'react';
import { Typography, Link } from '@mui/material';
import clsx from 'clsx';

import useStyles from './style';
import { ILinkItem } from './types';
export const LinkItem = ({ closeOverlay, data }: ILinkItem) => {
  const classes = useStyles();
  const [extend, setExtend] = useState(-1);

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    closeOverlay(false);
  };
  return (
    <Link
      key={data.id}
      onMouseEnter={() => setExtend(data.id)}
      onMouseLeave={() => setExtend(-1)}
      onClick={() => openInNewTab(data.link as string)}
      className={classes.link}
    >
      <Typography variant={'h4'}>{data.text1}</Typography>
      <Typography variant={'h4'}>{data?.text2}</Typography>
      <span
        className={clsx(classes.underline, {
          [classes.extended]: extend === data.id,
        })}
      ></span>
    </Link>
  );
};
