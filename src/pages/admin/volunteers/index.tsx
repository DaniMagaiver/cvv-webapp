import { DataGrid, GridActionsCellItem, GridColumns } from "@mui/x-data-grid";
import { IUser } from "../../../interfaces/models/IUser.interface";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SaveIcon from "@mui/icons-material/Save";
import { useLayoutEffect, useState } from "react";
import VolunteerData from "./volunteer-data";
import CvvModal from "../../../shared/components/cvvModal";
import useUser from "../../../shared/hooks/users.hook";

export default function Volunteers() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser>();
  const [showUserData, setShowUserData] = useState<boolean>(false);
  const { listUsers, updateType, updateStatus } = useUser();

  useLayoutEffect(() => {
    listUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  const columns: GridColumns<IUser> = [
    { field: "name", headerName: "Nome", width: 200 },
    { field: "email", headerName: "E-mail", width: 200 },
    { field: "telephone", headerName: "Telefone", width: 150 },
    {
      field: "type",
      type: "singleSelect",
      editable: true,
      valueOptions: [
        { label: "Administrador", value: "admin" },
        { label: "Voluntário", value: "volunteer" },
      ],
      valueGetter: ({ row: { type } }) =>
        type === "admin" ? "Administrador" : "Voluntário",
      headerName: "Função",
      width: 150,
    },
    {
      field: "active",
      type: "boolean",
      sortable: false,
      disableColumnMenu: true,
      editable: true,
      valueGetter: ({ row: { status } }) => status === "active",
      valueSetter: ({ row }) => {
        row.status = row.status === "active" ? "inactive" : "active";
        return row;
      },
    },
    {
      field: "actions",
      type: "actions",
      sortable: false,
      disableColumnMenu: true,
      flex: 1,
      getActions: ({ row }) => [
        <GridActionsCellItem
          icon={<VisibilityIcon color="primary" />}
          label="Detalhes"
          onClick={() => openModal(row)}
        />,
        <GridActionsCellItem
          icon={<SaveIcon color="primary" />}
          label="Salvar"
          sx={{ marginLeft: "1rem" }}
          onClick={() => save(row)}
        />,
      ],
    },
  ];

  const closeModal = () => {
    setShowUserData(false);
  };

  const openModal = (user: IUser) => {
    setSelectedUser(user);
    setShowUserData(true);
  };

  const save = ({ _id, type, status }: IUser) => {
    const saveValues = [updateStatus(_id, status), updateType(_id, type)];

    Promise.all(saveValues)
      .then(() => alert("Alterações salvas com sucesso"))
      .catch((error) => alert(error.message));
  };

  return (
    <section>
      <DataGrid
        getRowId={({ _id }) => _id}
        sx={{ height: 400 }}
        columns={columns}
        rows={users}
        pageSize={10}
        disableColumnFilter
        disableColumnMenu
        disableSelectionOnClick
        isRowSelectable={({ row }) => false}
      />
      <CvvModal open={showUserData} onClose={closeModal}>
        <VolunteerData user={selectedUser} />
      </CvvModal>
    </section>
  );
}
