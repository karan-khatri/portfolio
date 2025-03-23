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
            🚀 Full Stack Web Developer | MERN Stack Specialist | Open to Opportunities in Italy 🇮🇹 <br /> <br />
            Hi, I&apos;m Karan Kumar, a Full Stack Web Developer with 3 years of experience, currently based in Italy. I have a strong background in building scalable, user-friendly web applications with modern technologies. <br /> <br />
            <strong>My Expertise: </strong>
            <br />
            ✅ <strong>Frontend: </strong> React, Vue.js, Next.js, Material UI, Tailwind CSS
            <br />
            ✅ <strong>Backend: </strong> Node.js, Express.js, REST APIs, WebSocket, GraphQL
            <br />
            ✅ <strong>Databases: </strong> MongoDB, PostgreSQL, Redis
            <br />
            ✅ <strong>DevOps & Cloud: </strong> AWS (S3, CloudFront, LightSail), Docker, GitHub Actions, CI/CD Pipelines
            <br />
            ✅ <strong>Testing: </strong> Cypress (End-to-End Testing), Jest
            <br />
            ✅ <strong>Tools: </strong> Git, GitHub, Bitbucket, Jira, Notion
            <br /> <br />
            I take pride in writing clean, maintainable code, solving complex technical challenges, and collaborating with teams to deliver high-quality solutions. I&apos;m currently seeking Full Stack Web Developer roles where I can contribute my skills, grow professionally, and work on innovative projects.
            <br />
            Let&apos;s connect and create something extraordinary! 🚀
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMeSection;
