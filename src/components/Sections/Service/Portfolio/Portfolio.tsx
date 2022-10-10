import { useEffect } from 'react';
import { Grid, Container, Box, Typography, Link } from '@mui/material';

import useStyles from './style';
import { IPortfolio, CustomerCases, CustomerCase } from './types';

export const Portfolio = ({ data }: IPortfolio) => {
  const classes = useStyles();
  useEffect(() => {
    console.log('dtaa', data.customerCases);
  });
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Box component={'div'}>
          <Typography className={classes.headline} variant={'h1'}>
            {data.headline}
          </Typography>
          <Typography variant={'body1'}>{data.subHeadline}</Typography>
          {data.customerCases.map((item: CustomerCases) =>
            item.headline ? (
              <Box component={'div'} key={item.id}>
                <Typography variant={'body1'}>{item.headline}</Typography>
                {item.customerCases?.map((item: CustomerCase) => (
                  <Box
                    key={item.id}
                    component={'div'}
                    className={classes.linkBox}
                  >
                    <Link
                      onClick={() => openInNewTab(item.customerLink as string)}
                      className={`${classes.link} & ${classes.inlineBox}`}
                    >
                      <li></li>
                      <Typography variant={'body1'}>{item.customer}</Typography>
                    </Link>
                  </Box>
                ))}
              </Box>
            ) : (
              <Box component={'div'} className={classes.linkBox}>
                <Link
                  key={item.customerLink}
                  onClick={() => openInNewTab(item.customerLink as string)}
                  className={`${classes.link} & ${classes.inlineBox}`}
                >
                  <li></li>
                  <Typography variant={'body1'}>{item.customer}</Typography>
                </Link>
              </Box>
            )
          )}
        </Box>
      </Container>
    </Grid>
  );
};
