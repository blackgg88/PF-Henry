import React from 'react';
import {
  Button,
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
} from '@mui/material';

interface Payer {
  addres: { street_name: string; street_number: string; zip_code: string };
  date_created: string;
  email: string;
  identification: { number: number; type: string };
  name: string;
  surname: string;
}

const Form: React.FC<{}> = () => {
  return (
    <Container maxWidth='xl'>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{ minHeight: '100vh' }}
      >
        <Grid>
          <Paper sx={{ padding: '1.2em', borderRadius: '0.5em' }}>
            <Typography variant='h4'>Form aqui va la info</Typography>
            <Box component='form'>
              <TextField label='firstname' />
              <TextField label='lastname' />
              <TextField label='email' />
              <Button fullWidth type='submit'>
                El boton de submit
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Form;
