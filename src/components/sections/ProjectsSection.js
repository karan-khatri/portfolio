import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import SingleProject from '../SingleComponents/SingleProject';

import data from '../../data';

const tags = [];

data.map((project) => {
  return project.technologies.map((tag) => {
    tags.push(tag);
  });
});

const uniqueTags = ['all', ...new Set(tags)];

const ProjectsSection = () => {
  const [projects, setProjects] = useState(data);
  const [selectedTag, setSelectedTag] = useState('all');

  useEffect(() => {
    if (selectedTag.toLowerCase() === 'all') {
      setProjects(data);
      return;
    }
    const newProjects = data.filter((item) => {
      return item.technologies.find((tech) => tech.toLowerCase() === selectedTag.toLowerCase());
    });
    setProjects(newProjects);
  }, [selectedTag]);

  return (
    <Container component='section' id='projects-section' disableGutters maxWidth={false} sx={{ pt: 7, pb: 7, backgroundColor: '#5a4493' }}>
      <Container maxWidth='xl'>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant='h4'
              gutterBottom
              align='center'
              color='white'
              sx={{
                mb: 5,
                '&::after': {
                  content: '""',
                  display: 'block',
                  borderRadius: 2,
                  mt: 1.5,
                  mb: 1,
                  mx: 'auto',
                  height: 10,
                  width: 75,
                  backgroundColor: 'orange',
                },
              }}
            >
              Projects
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3.5}>
              <Grid item xs={12}>
                {uniqueTags.map((tag, index) => {
                  return (
                    <Button
                      key={index}
                      variant={tag.toLowerCase() === selectedTag.toLowerCase() ? 'contained' : 'outlined'}
                      color='portfolioYellow'
                      onClick={() => {
                        setSelectedTag(tag);
                      }}
                      sx={{ mr: 2 }}
                    >
                      {tag}
                    </Button>
                  );
                })}
              </Grid>
              {projects.map((project) => {
                const { link, projectName, relevantTo, technologies, img } = project;

                return (
                  <Grid item xs={12} cb={6} md={4} lg={4}>
                    <SingleProject projectName={projectName} link={link} relevantTo={relevantTo} technologies={technologies} img={img} color='white' />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default ProjectsSection;
