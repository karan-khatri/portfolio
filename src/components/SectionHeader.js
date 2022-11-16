import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SectionHeader = (props) => {
  const { heading, subHeading } = props;
  let { color, align } = props;

  if (!color) {
    color = '';
  }

  if (!align) {
    align = 'left';
  }

  return (
    <Box className='section-header' sx={{ mb: 4 }}>
      <Typography variant='h5' color={color} align={align} sx={{ fontWeight: 600, '&::before': { content: '""', display: 'block', borderRadius: 2, marginBottom: 1, height: 10, width: 50, backgroundColor: 'orange' } }}>
        {heading}
      </Typography>
      {subHeading && (
        <Typography variant='body1' color={color}>
          {subHeading}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
