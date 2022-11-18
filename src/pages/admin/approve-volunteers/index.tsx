import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IUser } from "../../../interfaces/models/IUser.interface";
import Button from "@mui/material/Button";
import style from "./ApproveVolunteers.module.scss";
import { useLayoutEffect, useState } from "react";
import useUser from "../../../shared/hooks/users.hook";

export default function ApproveVolunteers() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [selection, setSelection] = useState<any[]>([]);
  const { listApprovals, approve } = useUser();

  useLayoutEffect(() => {
    listUsers();
  }, []);
  const columns: GridColDef[] = [
    { field: "name", headerName: "Nome", width: 200 },
    { field: "birthDay", headerName: "Nascimento", width: 90 },
    { field: "city", headerName: "Cidade", width: 100 },
    { field: "uf", headerName: "Estado", width: 70 },
    { field: "email", headerName: "E-mail", width: 200 },
    { field: "telephone", headerName: "Telefone", width: 150 },
  ];

  const listUsers = () => {
    listApprovals().then((users) => {
      setUsers(users);
    });
  };

  const save = () => {
    const saveUsers = selection.map((_id) => approve(_id));

    Promise.all(saveUsers)
      .then(() => {
        listUsers();
        alert("Usuários aprovados com sucesso!");
      })
      .catch(() => alert("Não foi possível aprovar os usuários"));
  };

  return (
    <section>
      <DataGrid
        getRowId={({ _id }) => _id}
        sx={{ height: 400 }}
        columns={columns}
        rows={users}
        pageSize={10}
        checkboxSelection
        selectionModel={selection}
        onSelectionModelChange={(newSelection) => setSelection(newSelection)}
      />
      <div className={style.approveVolunteers__buttons}>
        <Button
          disabled={!selection.length}
          sx={{ height: "100%" }}
          color="success"
          onClick={save}
        >
          APROVAR SELECIONADOS
        </Button>
      </div>
    </section>
  );
}
