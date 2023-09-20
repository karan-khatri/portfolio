import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ContactInfoBar from '../ContactInfoBar';
import ProfileCard from '../ProfileCard';

const HeroSection = () => {
  return (
    <Container component='section' id='hero-section' sx={{ position: 'relative', backgroundImage: 'url(https://karan-khatri.github.io/portfolio/assets/images/13.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} disableGutters maxWidth={false}>
      <ContactInfoBar />
      <Grid container sx={{ pt: 55, '&::before': { content: '""', width: '100%', height: 200, position: 'absolute', bottom: 0, background: '#fff' } }}>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} sm={1} md={3}></Grid>
        <Grid item xs={12} sm={10} md={6}>
          <ProfileCard />
        </Grid>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }} sm={1} md={3}></Grid>
      </Grid>
    </Container>
  );
};

export default HeroSection;
