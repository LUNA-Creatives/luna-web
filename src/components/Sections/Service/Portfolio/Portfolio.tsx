import { Grid, Container, Box, Typography, Link } from '@mui/material';

import useStyles from './style';
import { IPortfolio, CustomerCases, CustomerCase } from './types';

export const Portfolio = ({ data }: IPortfolio) => {
  const classes = useStyles();

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Box component={'div'}>
          <Box component={'div'} className={classes.textBox}>
            <Typography
              className={`${classes.headline} & ${classes.upperCase}`}
              variant={'h2'}
            >
              {data.headline}
            </Typography>
            <Typography className={classes.bold}>{data.subHeadline}</Typography>
          </Box>
          {data.customerCases.map((item: CustomerCases) =>
            item.headline ? (
              <Box component={'div'} key={item.id} className={classes.textBox}>
                <Typography className={classes.text} variant={'body1'}>
                  {item.headline}
                </Typography>
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
                  key={item.id}
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
