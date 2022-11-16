import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const SingleProjectSimple = (props) => {
  const { link, projectName, relevantTo, technologies } = props;

  let { color } = props;

  if (!color) {
    color = '';
  }

  return (
    <Box width={'100%'} sx={{ p: 3, bgcolor: 'rgba(255, 255, 255, 0.7)', borderRadius: '0.5rem 3rem 0.5rem 3rem' }}>
      <Link
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        underline='none'
        color='black'
        sx={{ display: 'inline-block', mb: 2, textDecoration: 'none', color: 'black', '::after': { transition: '0.4s all ease-in-out', content: '""', width: '0', display: 'block', height: '2px', borderBottom: 'solid 2px #f57c00' }, '&:hover': { '::after': { width: '100%' } } }}
      >
        <Typography variant='h5'>{projectName}</Typography>
      </Link>
      <Typography variant='body1' gutterBottom>
        {relevantTo}
      </Typography>
      <Typography variant='body1'>
        {technologies.map((item) => {
          return (
            <Typography variant='caption' sx={{ mr: 1.5 }}>
              {item}
            </Typography>
          );
        })}
      </Typography>
    </Box>
  );
};

export default SingleProjectSimple;
