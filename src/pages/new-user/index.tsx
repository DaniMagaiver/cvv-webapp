import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

import style from "./New-user.module.scss";

import { IUser } from "../../interfaces/models/IUser.interface";
import useUser from "../../shared/hooks/users.hook";

export default function NewUser() {
  const { createUser } = useUser();
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      birthDay: "",
      uf: "",
      city: "",
      telephone: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("O campo é obrigatório."),
      email: yup.string().email().required("O campo é obrigatório."),
      birthDay: yup.string().required("O campo é obrigatório."),
      uf: yup.string().required("O campo é obrigatório."),
      city: yup.string().required("O campo é obrigatório."),
      telephone: yup.string().required("O campo é obrigatório."),
    }),
    onSubmit: (
      values: Omit<IUser, "_id" | "status" | "type" | "isApproved">
    ) => {
      createUser(values)
        .then(() => alert("Novo usuário criado com sucesso!"))
        .catch((error) => alert(error.messsage));
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
              id="name"
              fullWidth
              label="Nome:"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.name && form.errors.name && (
              <Alert severity="error" className={style.error}>
                {form.errors.name}
              </Alert>
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="birthDay"
              fullWidth
              label="Data de nascimento:"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.birthDay && form.errors.birthDay && (
              <Alert severity="error" className={style.error}>
                {form.errors.birthDay}
              </Alert>
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="email"
              label="Email:"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.email && form.errors.email && (
              <Alert severity="error" className={style.error}>
                {form.errors.email}
              </Alert>
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="uf"
              label="Estado:"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.uf && form.errors.uf && (
              <Alert severity="error" className={style.error}>
                {form.errors.uf}
              </Alert>
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="city"
              label="Cidade:"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.city && form.errors.city && (
              <Alert severity="error" className={style.error}>
                {form.errors.city}
              </Alert>
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              id="telephone"
              label="Telefone:"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.telephone && form.errors.telephone && (
              <Alert severity="error" className={style.error}>
                {form.errors.telephone}
              </Alert>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              sx={{ height: 50 }}
              variant="text"
              color="primary"
              type="submit"
            >
              ENVIAR
            </Button>
          </Grid>
        </Grid>
      </form>
    </section>
  );
}
