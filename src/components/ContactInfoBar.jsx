import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ATag from '@mui/material/Link';

import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';

import { yellow } from '@mui/material/colors';

import resume from '../assets/docs/Karan_Kumar_Resume.pdf';

const ContactInfoBar = () => {
  return (
    <Container sx={{ maxWidth: 1000, position: 'absolute', top: 60, left: 0, right: 0 }}>
      <Grid container rowSpacing={2} sx={{ backgroundColor: yellow[700], borderRadius: 5, px: { xs: 3, sm: 4, md: 5 }, pt: 2, pb: 4, mb: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant='body1'>
            <PlaceIcon fontSize='large' sx={{ mr: 1 }} /> Firenze, Italy
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant='body1'>
            <ATag href='tel:+393295975221' underline='hover' color='inherit'>
              <PhoneIcon fontSize='large' sx={{ mr: 2 }} />
              +39-329-5975221
            </ATag>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Typography variant='body1' noWrap>
            <ATag href='mailto:khatrikamlesh23@gmail.com' underline='hover' color='inherit'>
              <EmailIcon fontSize='large' sx={{ mr: 2 }} />
              khatrikamlesh23@gmail.com
            </ATag>
          </Typography>
        </Grid>
      </Grid>

      <Button variant='contained' href="https://drive.google.com/file/d/18Fg2gCMiMv8tnllNjg7jwepCq-UMPxPE/view?usp=sharing" color='portfolioYellow' sx={{ float: 'right' }} target='_blank'>
        Download Resume
      </Button>
    </Container>
  );
};

export default ContactInfoBar;
