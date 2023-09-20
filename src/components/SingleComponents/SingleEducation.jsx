import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

import { orange } from '@mui/material/colors';

const StyledBox = styled(Box)({
  borderLeft: `solid 1px ${orange[400]}`,
  marginBottom: 50,
  paddingLeft: 40,
  position: 'relative',
  '&::before': { content: '""', display: 'block', position: 'absolute', left: -8, top: -5, boxShadow: '0em 0em 0em 8px rgba(255, 165, 0, 0.4)', borderRadius: '50%', width: 15, height: 15, backgroundColor: orange[400] },
});

const SingleEducation = (props) => {
  const { degree, duration, institute } = props;

  return (
    <StyledBox component='article'>
      <Typography variant='h5' color='white'>
        {degree}
      </Typography>
      <Typography variant='subtitle1' color='white'>
        {duration}
      </Typography>
      <Typography paragraph color='white' sx={{ mt: 2.5 }}>
        {institute}
      </Typography>
    </StyledBox>
  );
};

export default SingleEducation;
