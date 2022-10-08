import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';
import Button from '@mui/material/Button';

import Instagram from '@mui/icons-material/Instagram';
import Linkedin from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import iconStyles from './icons.module.css';

const LargeIconButton = styled(Button)({
  fontSize: '2.5rem',
  borderRadius: '50%',
  width: 60,
  height: 60,
  '& > :not(style)': {
    color: '#222',
    fill: '#222',
    fontSize: 'inherit',
    transition: 'fill 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 0.4s',
  },
});

const ProfileCard = () => {
  return (
    <Card elevation={0} sx={{ position: 'relative', overflow: 'visible', px: 0, maxWidth: 720, mx: 'auto' }}>
      <Box sx={{ overflow: 'hidden', position: 'absolute', borderRadius: '50%', width: 200, height: 200, left: 0, right: 0, mx: 'auto', top: -90 }}>
        <CardMedia loading='lazy' component='img' image='https://karan-khatri.github.io/portfolio/assets/images/Profile-Picture.png' alt='Karan Kumar' />
      </Box>
      <CardContent sx={{ pt: 15 }}>
        <Typography variant='h4' align='center' sx={{ fontWeight: 500, mb: 1.5 }}>
          Karan Kumar Khatri
        </Typography>
        <Typography variant='h6' align='center' sx={{ mb: 1.5 }}>
          MERN Stack Develoer
        </Typography>

        <Typography variant='body1' align='center' sx={{ mb: 2.5 }}>
          <Typography variant='span' sx={{ fontWeight: 'bold' }}>
            {'Email : '}
          </Typography>
          khatrikamlesh23@gmail
        </Typography>

        <Stack direction='row' spacing={1} justifyContent='center'>
          <LargeIconButton href='https://www.linkedin.com/in/karan-kumar-khatri/'>
            <Linkedin className={iconStyles.linkedin} />
          </LargeIconButton>
          <LargeIconButton href='https://github.com/karan-khatri/'>
            <GitHub className={iconStyles.github} />
          </LargeIconButton>
          <LargeIconButton href='https://www.instagram.com/karankk79/'>
            <Instagram className={iconStyles.instagram} />
          </LargeIconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
