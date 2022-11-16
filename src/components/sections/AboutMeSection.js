import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import SectionHeader from '../SectionHeader';

const AboutMeSection = () => {
  return (
    <Container component='section' id='about-us-section' maxWidth='xl' sx={{ py: 5 }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <SectionHeader heading='About Me' subHeading='Goal' />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant='body1' align='justify'>
            Hi there! I am Karan Kumar. I’m an undergraduate student of B.S Information Technology at Quaid-e-Awam University of Engineering, Science, and Technology. I am a professional Web Developer and Graphic Designer. I have work experience of 2+ years in the ever-growing fields of Web Developing and Graphic Designing. I started programming at the age
            of 15. Fascinated by the fact how a little piece of code can ease human life to that extent made me passionate and consistent in challenging periods of development. My skill set includes HTML5, CSS3, JavaScript, PHP, AngularJS, ReactJS, ASP.NET Web, MySQL, SQL, and SQLite, Java, Python, C#. Apart from my technical skills, I am a self-taught
            Pianist. I also participated & volunteered in various technical and Non-technical events at my undergraduate level. I am always dedicated to provide my clients with my best version of creativity. Feel free to check out my other online Profiles.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMeSection;
