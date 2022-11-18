import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { IUser } from "../../../../interfaces/models/IUser.interface";
import MenuItem from "@mui/material/MenuItem";

interface Props {
  user?: IUser;
}

export default function VolunteerData({ user }: Props) {
  return (
    <Box component="form">
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              InputProps={{ readOnly: true }}
              id="txtName"
              label="Nome:"
              value={user?.name}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              InputProps={{ readOnly: true }}
              id="txtMail"
              label="Email:"
              type="email"
              value={user?.email}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              InputProps={{ readOnly: true }}
              id="txtTelephone"
              label="Telefone:"
              value={user?.telephone}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              InputProps={{ readOnly: true }}
              id="txtBirthDay"
              label="Nacimento:"
              value={user?.birthDay}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              InputProps={{ readOnly: true }}
              id="txtUF"
              label="Estado:"
              value={user?.uf}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              InputProps={{ readOnly: true }}
              id="txtCity"
              label="Cidade:"
              value={user?.city}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              InputProps={{ readOnly: true }}
              id="txtStatus"
              label="Status:"
              value={user?.status}
              select
            >
              <MenuItem value="active">Ativo</MenuItem>
              <MenuItem value="inactive">Inativo</MenuItem>
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <TextField
              InputProps={{ readOnly: true }}
              id="txtStatus"
              label="Status:"
              value={user?.type}
              select
            >
              <MenuItem value="admin">Administrador</MenuItem>
              <MenuItem value="volunteer">Voluntário</MenuItem>
            </TextField>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
