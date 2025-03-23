import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import SectionHeader from "../SectionHeader";
import SingleExperience from "../SingleComponents/SingleExperience";

const educationData = [
  {
    position: "Software Engineer",
    duration: "Dec 2022 - Jan 2025",
    company: "Concept Recall",
  },
  {
    position: "Freelance Front End Developer",
    duration: "March 2021 - Dec 2022",
    company: "Fiverr",
  },
  {
    position: "Virtual Summer Intern ",
    duration: "Aug 2021 - Sep 2021",
    company: "State Bank of Pakistan",
  },
];

const ExperienceSection = () => {
  return (
    <Container
      component="section"
      id="about-us-section"
      disableGutters
      maxWidth={false}
      sx={{ pt: 7 }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={4}>
            <SectionHeader heading="Experience" color="" />
          </Grid>
          <Grid item xs={12} md={8}>
            {educationData.map((education, index) => {
              const { position, duration, company } = education;
              return (
                <SingleExperience
                  key={index}
                  position={position}
                  duration={duration}
                  company={company}
                />
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default ExperienceSection;
