import { useAppSelector } from '../../Redux/hook';
import { TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { fetchMP, Values, Payer } from '../../../helpers/index';

const FormComponent: React.FC<{}> = () => {
  const productsInCart = useAppSelector((state) => state.cartReducer.Products);

  const handleSubmit = async (values: Values) => {
    const payer: Payer = {
      address: {
        street_name: values.street_name,
        street_number: Number(values.street_number),
        zip_code: values.zip_code,
      },
      email: values.email,
      identification: { number: values.DNI, type: 'DNI' },
      name: values.name,
      surname: values.surname,
    };

    const preference = { payer, products: productsInCart };

    const data = await fetchMP(preference);

    window.location.href = data.sandbox_init_point;
  };
  return (
    <div className='form_container'>
      <div className='form_wrapper'>
        <Formik
          onSubmit={async (values, { resetForm }) => {
            console.log(values);
            console.log('NO FUNCIONO POR ALGUNA RAZON');
          }}
          initialValues={{
            email: '',
            name: '',
            surname: '',
            date_created: '',
            street_name: '',
            street_number: '',
            zip_code: '',
            DNI: '',
          }}
          validate={(values) => {
            let errors = {
              email: '',
              name: '',
              surname: '',
              date_created: '',
              street_name: '',
              street_number: '',
              zip_code: '',
              DNI: '',
            };
            if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email))
              errors.email = 'El Correo Electronico debe ser valido';

            if (!values.name) errors.name = 'El campo Nombre Completo es obligatorio';

            if (!values.surname)
              errors.surname = 'El campo Nombre Completo es obligatorio';

            if (!values.street_name)
              errors.street_name = 'El campo street name es obligatorio';

            if (!values.street_number)
              errors.street_number = 'El campo street number es obligatorio';

            if (!values.zip_code) errors.zip_code = 'El campo zip code es obligatorio';

            if (!values.DNI) errors.DNI = 'EL campo DNI es obligatorio';

            return errors;
          }}
        >
          {({ errors, touched, values, resetForm }) => (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(values as Values);
              }}
            >
              <div className='form_email-DNI'>
                <div className='form_email'>
                  <Field name='email'>
                    {({ field }: any) => (
                      <TextField
                        {...field}
                        type='email'
                        label='email'
                        variant='standard'
                        name='email'
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    )}
                  </Field>
                </div>
                <div className='form_DNI'>
                  <Field name='DNI'>
                    {({ field }: any) => (
                      <TextField
                        {...field}
                        type='text'
                        label='DNI'
                        variant='standard'
                        name='DNI'
                        error={Boolean(touched.DNI && errors.DNI)}
                        helperText={touched.DNI && errors.DNI}
                      />
                    )}
                  </Field>
                </div>
              </div>
              <div className='form_name'>
                <div className='form_firstname'>
                  <Field name='name'>
                    {({ field }: any) => (
                      <TextField
                        {...field}
                        type='text'
                        label='firstname'
                        variant='standard'
                        name='name'
                        error={Boolean(touched.name && errors.name)}
                        helperText={touched.name && errors.name}
                      />
                    )}
                  </Field>
                </div>
                <div className='form_lastname'>
                  <Field name='surname'>
                    {({ field }: any) => (
                      <TextField
                        {...field}
                        type='text'
                        label='lastname'
                        variant='standard'
                        name='surname'
                        error={Boolean(touched.surname && errors.surname)}
                        helperText={touched.surname && errors.surname}
                      />
                    )}
                  </Field>
                </div>
              </div>
              <div>
                <div className='form_street-name'>
                  <Field name='street_name'>
                    {({ field }: any) => (
                      <TextField
                        {...field}
                        fullWidth
                        type='text'
                        label='street name'
                        variant='standard'
                        name='street_name'
                        error={Boolean(touched.street_name && errors.street_name)}
                        helperText={touched.street_name && errors.street_name}
                      />
                    )}
                  </Field>
                </div>
                <div className='form_street-zip'>
                  <div className='form_street-number'>
                    <Field name='street_number'>
                      {({ field }: any) => (
                        <TextField
                          {...field}
                          type='text'
                          label='street number'
                          variant='standard'
                          name='street_number'
                          error={Boolean(touched.street_number && errors.street_number)}
                          helperText={touched.street_number && errors.street_number}
                        />
                      )}
                    </Field>
                  </div>
                  <div className='form_street-zip-code'>
                    <Field name='zip_code'>
                      {({ field }: any) => (
                        <TextField
                          {...field}
                          type='text'
                          label='zip code'
                          variant='standard'
                          name='zip_code'
                          error={Boolean(touched.zip_code && errors.zip_code)}
                          helperText={touched.zip_code && errors.zip_code}
                        />
                      )}
                    </Field>
                  </div>
                </div>
              </div>
              <button type='submit'>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormComponent;
