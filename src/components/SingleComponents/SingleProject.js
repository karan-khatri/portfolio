import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import './singleProject.css';

const SingleProject = (props) => {
  const { link, projectName, relevantTo, img } = props;

  let { color } = props;

  if (!color) {
    color = '';
  }

  return (
    <Button href={link} sx={{ position: 'relative', p: 0, width: '100%', maxHeight: 260, height: '100%', overflow: 'hidden' }}>
      <Card component='article' className='singleProject' sx={{ width: '100%', maxWidth: '100%', maxHeight: 260, height: '100%', overflow: 'hidden' }}>
        <CardMedia
          loading='lazy'
          component='img'
          image={img}
          alt={projectName}
          sx={{ minHeight: 230, width: '101%', height: '100%', maxHeight: 260, objectPosition: 'top center' }}
        />

        <Paper elevation={0} className='showOverlay' sx={{ p: 2, pt: 9 }}>
          <Typography variant='h6' color='white'>
            {projectName}
          </Typography>
          <Typography variant='caption' color='white'>
            {relevantTo}
          </Typography>
        </Paper>
      </Card>
    </Button>
  );
};

export default SingleProject;
