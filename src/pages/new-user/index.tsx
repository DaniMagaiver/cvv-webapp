import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';

import style from './New-user.module.scss';

export default function NewUser() {
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      birthday: '',
      state: '',
      city: '',
      phone: '',
    },
    validationSchema: yup.object({
      name: yup.string().required('O campo é obrigatório.'),
      email: yup.string().email().required('O campo é obrigatório.'),
      birthday: yup.string().required('O campo é obrigatório.'),
      state: yup.string().required('O campo é obrigatório.'),
      city: yup.string().required('O campo é obrigatório.'),
      phone: yup.string().required('O campo é obrigatório.'),
    }),
    onSubmit: (values) => {
      navigate('/voluntary/chat', {state:{...values}});
    },
  });

  return (
    <section>
      <h1>INSCRIÇÃO PARA NOVOS VOLUNTÁRIOS</h1>
      <p>
        Para se tornar voluntário do CVV é necessário ter mais de 18 anos e
        participar de um curso preparatório gratuito para novos voluntários.
      </p>
      <p>
        Preencha os dados solicitados abaixo e aguarde o contato da nossa equipe
        de treinamento, que lhe informará quando haverá um curso para novos
        voluntários mais próximo de você.
      </p>
      <form onSubmit={form.handleSubmit}>
        <Grid container sx={{ marginTop: 2 }} spacing={2}>
          <Grid item xs={12}>
            <TextField
              id='name'
              fullWidth
              label='Nome:'
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.name && form.errors.name && (
              <Alert severity='error' className={style.error}>
                {form.errors.name}
              </Alert>
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='birthday'
              fullWidth
              label='Data de nascimento:'
              onChange={form.handleChange}
              onBlur={form.handleBlur}
           />
            {form.touched.birthday && form.errors.birthday && (
              <Alert severity='error' className={style.error}>
                {form.errors.birthday}
              </Alert>
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id='email'
              label='Email:'
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.email && form.errors.email && (
              <Alert severity='error' className={style.error}>
                {form.errors.email}
              </Alert>
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id='state'
              label='Estado:'
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.state && form.errors.state && (
              <Alert severity='error' className={style.error}>
                {form.errors.state}
              </Alert>
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id='city'
              label='Cidade:'
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.city && form.errors.city && (
              <Alert severity='error' className={style.error}>
                {form.errors.city}
              </Alert>
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id='phone'
              label='Telefone:'
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              type="number"
            />
            {form.touched.phone && form.errors.phone && (
              <Alert severity='error' className={style.error}>
                {form.errors.phone}
              </Alert>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              sx={{ height: 50 }}
              variant='text'
              color='primary'
              type='submit'
            >
              ENVIAR
            </Button>
          </Grid>
        </Grid>
      </form>
    </section>
  );
}
