import React from 'react';
import { TextField } from '@mui/material';
import { Formik } from 'formik';

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
    <div className='form_container'>
      <Formik initialValues={{ email: '', password: '' }} onSubmit={() => {}}>
        {() => (
          <form>
            <div className='form_wrapper'>
              <p>form</p>
              <div className='form_email-DNI'>
                <div className='form_email'>
                  <TextField label='email' variant='standard' />
                </div>
                <div className='form_DNI'>
                  <TextField label='DNI' variant='standard' />
                </div>
              </div>
              <div className='form_name'>
                <div className='form_firstname'>
                  <TextField label='firstname' variant='standard' />
                </div>
                <div className='form_lastname'>
                  <TextField label='lastname' variant='standard' />
                </div>
              </div>
              <div>
                <div className='form_street-name'>
                  <TextField fullWidth label='street name' variant='standard' />
                </div>
                <div className='form_street-zip'>
                  <div className='form_street-number'>
                    <TextField label='street number' variant='standard' />
                  </div>
                  <div className='form_street-zip-code'>
                    <TextField label='zip code' variant='standard' />
                  </div>
                </div>
              </div>
              <button>Confirm</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
