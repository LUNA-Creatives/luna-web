import { Grid, Container, Box, Typography } from '@mui/material';

import { IInformation, Column, Item } from './types';
import useStyles from './style';

export const Information = ({ data, headline }: IInformation) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Box component={'div'}>
          <Typography
            key={headline}
            className={classes.headline}
            variant={'h1'}
          >
            {headline}
          </Typography>
        </Box>

        <Box component={'div'} className={classes.flexBox}>
          {data.map((column: Column) => (
            <Box key={column.id} component={'div'} className={classes.textBox}>
              <Typography className={classes.upperCase} variant={'subtitle1'}>
                {column.subHeadline}
              </Typography>
              {column.text1 && (
                <Typography className={classes.text} variant={'body1'}>
                  {column.text1}
                </Typography>
              )}
              {column.text2 && (
                <Typography
                  className={`${classes.text}, ${classes.bold}`}
                  variant={'body1'}
                >
                  {column.text2}
                </Typography>
              )}
              {column.listItems?.map((item: Item) => (
                <Box component={'div'} key={item.id}>
                  <Typography component={'li'} variant={'body1'}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Container>
    </Grid>
  );
};
