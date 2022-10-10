import { Box, Typography } from '@mui/material';
import clsx from 'clsx';

import useStyles from './style';
import { ICard, listItem } from './types';

export const Card = ({ data }: ICard) => {
  const classes = useStyles();
  return (
    <Box
      className={clsx(classes.cardBox, {
        [classes.active]: data.isActive,
      })}
      component={'div'}
    >
      <Box className={classes.innerBox} component={'div'}>
        <Box component={'div'} className={classes.flexBox}>
          <Typography
            className={`${classes.disabledText} & ${classes.boldText}`}
            variant={'subtitle1'}
          >
            {data.subHeadline.text}
          </Typography>
          <Typography
            className={clsx(classes.boldText, {
              [classes.activeText]: data.isActive,
            })}
            variant={'subtitle1'}
          >
            {data.subHeadline.activeText}
          </Typography>
        </Box>
        <Box component={'div'} className={classes.headlineBox}>
          <Typography variant={'h3'}>{data.headline.price}</Typography>
          <Typography className={classes.disabledText} variant={'h5'}>
            {data.headline.vatText}
          </Typography>
          <Typography className={classes.upperCase} variant={'h3'}>
            {data.headline.text}
          </Typography>
        </Box>
        <Box component={'div'} className={classes.textBox}>
          <Typography className={classes.disabledText} variant={'body1'}>
            {data.text1}
          </Typography>
          <Typography variant={'body1'}>{data.text2}</Typography>
          <Typography
            className={`${classes.boldText} & ${classes.text}`}
            variant={'body1'}
          >
            {data.text3}
          </Typography>
        </Box>
        {data.listItems && (
          <Box component={'div'} className={classes.listBox}>
            {data.listItems?.map((item: listItem) => (
              <Box
                key={item.id}
                component={'div'}
                className={classes.inlineBox}
              >
                <li></li>
                <Typography variant={'body1'}>{item.text}</Typography>
              </Box>
            ))}
          </Box>
        )}
        {data.disabledTextGroup && (
          <Box component={'div'}>
            <Typography
              className={`${classes.disabledText} & ${classes.boldText}`}
              variant={'subtitle1'}
            >
              {data.disabledTextGroup.priceText}
            </Typography>
            <Typography
              className={`${classes.disabledText} & ${classes.boldText}`}
              variant={'subtitle1'}
            >
              {data.disabledTextGroup.logoText}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
