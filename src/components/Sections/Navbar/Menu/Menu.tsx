import { Container } from '@mui/material';

import useStyles from './style';
import { IOverlay, ColumnData } from './types';
import { MenuColumn } from './MenuColumn';

export const Menu = ({ data, closeOverlay }: IOverlay) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Container className={classes.flexContainer}>
        {data.map((columnData: ColumnData) => (
          <MenuColumn
            key={columnData.id}
            data={columnData}
            closeOverlay={closeOverlay}
          />
        ))}
      </Container>
    </Container>
  );
};
