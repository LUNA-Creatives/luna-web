import { Grid, Container, Box, Typography, Link } from '@mui/material';

import { IFooter, headline, socialLinks } from './types';
import useStyle from './style';

export const Footer = ({ data }: IFooter) => {
  const classes = useStyle();

  const openEmail = `mailto:${data.subHeadline.email}?`;
  const phoneCall = `tel:${data.subHeadline.phoneNumber}`;

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Box component={'div'} className={classes.flexBox}>
          {data.headline.map((column: headline, index: number) => (
            <Box key={index} component={'div'} className={classes.textBox}>
              <Typography className={classes.headline} variant={'h2'}>
                {column.text}
              </Typography>
              {column.subtitle && (
                <Typography className={classes.text} variant={'body1'}>
                  {column.subtitle}
                </Typography>
              )}
              {column.socialLinks &&
                column.socialLinks.map((link: socialLinks, index: number) => (
                  <Box
                    key={index}
                    component={'div'}
                    className={classes.linkBox}
                  >
                    <Link
                      onClick={() => openInNewTab(link.url)}
                      className={classes.link}
                    >
                      <Typography
                        fontWeight={'600'}
                        lineHeight={'1.8'}
                        variant={'body1'}
                      >
                        {link.text}
                      </Typography>
                    </Link>
                  </Box>
                ))}
            </Box>
          ))}
        </Box>
        <Box component={'div'} className={classes.textBox}>
          <Typography className={classes.headline} variant={'h6'}>
            {data.subHeadline.text}
          </Typography>
          <Box component={'div'} className={classes.linkBox}>
            <Link
              onClick={() =>
                openInNewTab(data.subHeadline.contactInformation.url)
              }
              className={classes.link}
            >
              <Typography variant={'h5'} lineHeight={'1.8'}>
                {data.subHeadline.contactInformation.streetName}
              </Typography>
              <Typography variant={'h5'} lineHeight={'1.8'}>
                {data.subHeadline.contactInformation.city}
              </Typography>
            </Link>
            <Link
              onClick={() => openInNewTab(openEmail)}
              className={classes.link}
            >
              <Typography variant={'h5'} fontWeight={'500'} lineHeight={'1.8'}>
                {data.subHeadline.email}
              </Typography>
            </Link>
            <Link href={phoneCall} className={classes.link}>
              <Typography fontWeight={'500'} variant={'h5'} lineHeight={'1.8'}>
                {data.subHeadline.phoneNumber}
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
      <Typography className={classes.copyRights} variant="subtitle2">
        {data.copyRights}
      </Typography>
    </Grid>
  );
};
