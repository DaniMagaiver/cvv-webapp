import style from "./Login.module.scss";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginForm } from "../../interfaces/forms/IloginForm.interface";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Utilize um email válido.")
      .required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
  });

  const login = ({ email, password }: ILoginForm) => {
    if (email.includes("admin")) {
      navigate("/admin");
    } else {
      navigate("/voluntary");
    }
  };

  return (
    <form action="submit" onSubmit={handleSubmit(login)}>
      <div className={style.login__container}>
        <section className={style.login__container__box}>
          <h1>ACESSAR MEU PAINEL</h1>
          <TextField
            label="Email: "
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email")}
          />
          <TextField
            label="Senha: "
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register("password")}
            type="password"
          />
          <Button color="primary" type="submit">
            ENTRAR
          </Button>
        </section>
      </div>
    </form>
  );
}
