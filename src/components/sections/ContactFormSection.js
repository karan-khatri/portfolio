import { useEffect, useState } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import SendIcon from '@mui/icons-material/Send';

import bg from '../../assets/imgs/bg.jpg';

const ContactFormSection = () => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const formResponse = await axios.post('https://validate-contact-form.herokuapp.com/v1/sendMail/', {
        name,
        email,
        message,
      });

      setResponse(formResponse.data);
    } catch (error) {
      setResponse(error.response.data);
    }
    setLoading(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setResponse({}), 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [loading]);

  return (
    <Container component='section' maxWidth={false} sx={{ py: 5, backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ maxWidth: { xs: '100%', md: '75%' }, mx: 'auto', py: 3, px: { xs: 1.5, sm: 3, md: 5 }, background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(3px)', border: 'solid 1px rgba(255, 167, 38, 0.8)', borderRadius: '0.5rem 3rem 0.5rem 3rem ' }}>
            <Typography variant='h4' gutterBottom align='center' sx={{ mb: 4, '&::after': { content: '""', display: 'block', borderRadius: 2, mt: 1.5, mb: 1, mx: 'auto', height: 10, width: 75, backgroundColor: 'orange' } }}>
              Get In Touch
            </Typography>
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextField required id='name' label='Name' color='portfolioBlack' variant='outlined' margin='normal' fullWidth onChange={handleNameChange} />

              <TextField required type='email' id='email' label='Email' color='portfolioBlack' variant='outlined' margin='normal' fullWidth onChange={handleEmailChange} />

              <TextField required id='message' label='Message' color='portfolioBlack' variant='outlined' sx={{ mb: 3 }} rows={5} margin='normal' placeholder='Message' fullWidth multiline onChange={handleMessageChange} />

              <LoadingButton variant='contained' color='portfolioYellow' type='submit' size='large' endIcon={<SendIcon />} loading={loading} loadingPosition='end' onClick={(e) => handleSubmit(e)}>
                Submit
              </LoadingButton>

              <Typography variant='span' color={response.success === 'true' ? 'green' : 'red'} sx={{ ml: 6, lineHeight: 2, fontSize: 20 }}>
                {response.msg}
              </Typography>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactFormSection;
