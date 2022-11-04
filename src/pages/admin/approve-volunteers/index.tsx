import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IUser } from "../../../interfaces/models/IUser.interface";
import Button from "@mui/material/Button";
import style from "./ApproveVolunteers.module.scss";

export default function ApproveVolunteers() {
  const columns: GridColDef[] = [
    { field: "name", headerName: "Nome", width: 200 },
    { field: "birthDay", headerName: "Nascimento", width: 90 },
    { field: "city", headerName: "Cidade", width: 100 },
    { field: "uf", headerName: "Estado", width: 70 },
    { field: "email", headerName: "E-mail", width: 200 },
    { field: "telephone", headerName: "Telefone", width: 150 },
  ];

  const rows: IUser[] = [
    {
      id: "1",
      name: "Danilo da Silva Fernandes",
      birthDay: "25/02/1994",
      city: "São Paulo",
      email: "danilo.silfer@gmail.com",
      status: "active",
      telephone: "(11)99882-7329",
      type: "admin",
      uf: "SP",
    },
  ];
  return (
    <section>
      <DataGrid
        sx={{ height: 400 }}
        columns={columns}
        rows={rows}
        pageSize={10}
      ></DataGrid>
      <div className={style.approveVolunteers__buttons}>
        <Button sx={{ height: "100%" }} color="success">
          APROVAR SELECIONADOS
        </Button>
        <Button sx={{ height: "100%" }} color="error">
          REPROVAR SELECIONADOS
        </Button>
      </div>
    </section>
  );
}
