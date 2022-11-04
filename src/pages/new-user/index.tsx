import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function NewUser() {
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
      <Grid container sx={{ marginTop: 2 }} spacing={2} component="form">
        <Grid item xs={12}>
          <TextField fullWidth label="Nome:" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Data de nascimento:" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Email:" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Estado:" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Cidade:" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Telefone:" />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth sx={{ height: 50 }} variant="text" color="primary">
            ENVIAR
          </Button>
        </Grid>
      </Grid>
    </section>
  );
}
