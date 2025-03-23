import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import SectionHeader from '../SectionHeader';
import SingleEducation from '../SingleComponents/SingleEducation';

const educationData = [
  {
    degree: 'M.S Software: Science and Technology',
    duration: '2024 - Present',
    institute: 'Università degli Studi di Firenze, Italy',
  },
  {
    degree: 'B.S Information Technology',
    duration: '2018 - 2022',
    institute: 'Quaid-e-Awam University of Engineering, Science, and Technology, Nawabshah',
  },
  {
    degree: 'Intermediate',
    duration: '2016 - 2018',
    institute: 'Govt. S.I. Degree College, Hala New',
  },
];

const EducationSection = () => {
  return (
    <Container component='section' id='about-us-section' disableGutters maxWidth={false} sx={{ pt: 7, backgroundColor: '#5a4493' }}>
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item xs={12} md={4}>
            <SectionHeader heading='Education' color='white' />
          </Grid>
          <Grid item xs={12} md={8}>
            {educationData.map((education, index) => {
              const { degree, duration, institute } = education;
              return <SingleEducation key={index} degree={degree} duration={duration} institute={institute} />;
            })}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default EducationSection;
