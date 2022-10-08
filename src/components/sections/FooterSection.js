import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ATag from '@mui/material/Link';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import iconStyles from '../icons.module.css';

import Instagram from '@mui/icons-material/Instagram';
import Linkedin from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';

const LargeIconButton = styled(Button)({
  fontSize: '2.5rem',
  borderRadius: '50%',
  width: 60,
  height: 60,
  '& > :not(style)': {
    color: 'white',
    fill: 'white',
    fontSize: 'inherit',
    transition: 'fill 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 0.4s',
  },
});

const FooterSection = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{ bgcolor: '#212529' }}>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                my: { xs: 4, md: 7 },
                px: 4,
                py: 7,
                backgroundColor: { xs: 'white', md: 'transparent' },
                color: { xs: 'body', md: 'white' },
                borderRight: { xs: 'none', md: 'solid 2px #ddd' },
              }}
            >
              <Typography variant='body1' sx={{ mb: 1, textAlign: { xs: 'center', md: 'left' } }}>
                Need some work to be done?
              </Typography>
              <Typography variant='body1' sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                Let' chat!{' '}
                <ATag color='inherit' href='https://fiverr.com/karankhatri23' sx={{ fontWeight: 'bold' }}>
                  @Fiverr
                </ATag>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              color='white'
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              sx={{ px: 4, mb: { xs: 5, md: 0 }, height: '100%' }}
            >
              <Typography paragraph align='center'>
                Follow me on
              </Typography>
              <Stack direction='row' spacing={1} justifyContent='center' sx={{ mb: 3 }}>
                <LargeIconButton href='https://www.linkedin.com/in/karan-kumar-khatri/'>
                  <Linkedin className={iconStyles.linkedin} />
                </LargeIconButton>
                <LargeIconButton href='https://github.com/karan-khatri'>
                  <GitHub className={iconStyles.github} />
                </LargeIconButton>
                <LargeIconButton href='https://www.instagram.com/karankk79/'>
                  <Instagram className={iconStyles.instagram} />
                </LargeIconButton>
              </Stack>

              <Typography paragraph align='center'>
                This website is developed by{' '}
                <Typography variant='span' sx={{ fontWeight: 'bold' }}>
                  Karan Kumar
                </Typography>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default FooterSection;
