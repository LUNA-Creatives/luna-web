import { Grid, Container, Box, Typography } from '@mui/material';

import { IInformation, Column, Item } from './types';
import useStyles from './style';

export const Information = ({ data }: IInformation) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Box component={'div'} className={classes.flexBox}>
          {data.map((column: Column) => (
            <Box key={column.id} component={'div'} className={classes.textBox}>
              <Typography className={classes.upperCase} variant={'subtitle1'}>
                {column.subHeadline}
              </Typography>
              <Typography className={classes.text} variant={'body1'}>
                {column.text}
              </Typography>

              {column.listItems?.map((item: Item) => (
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
          ))}
        </Box>
      </Container>
    </Grid>
  );
};
