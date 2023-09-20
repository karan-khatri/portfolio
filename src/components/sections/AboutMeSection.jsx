import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import SectionHeader from "../SectionHeader";

const AboutMeSection = () => {
  return (
    <Container component="section" id="about-us-section" maxWidth="xl" sx={{ py: 5 }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <SectionHeader heading="About Me" subHeading="Goal" />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="body1" align="justify">
            🚀 Passionate MERN Stack Developer | Front End Specialist | Open to Opportunities in
            Dubai 🇦🇪 <br /> <br />
            Hi there! I'm Karan Kumar Khatri, an ambitious MERN stack developer hailing from
            Karachi, Pakistan. With 2+ years of experience, I've honed my skills in crafting
            end-to-end web apps with a strong focus on intuitive user interfaces. <br /> <br /> My
            journey has led me to master technologies like React, Vue.js, Material UI, Ant Design,
            and more. I take pride in my ability to write efficient test cases, collaborate with
            remote teams, and deliver top-notch solutions. <br /> <br /> Currently, I'm seeking an
            exciting role as a MERN stack developer in UAE, where I can fuel my passion for the
            latest tech and make a significant impact. Let's connect and explore how we can create
            something extraordinary together!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMeSection;
