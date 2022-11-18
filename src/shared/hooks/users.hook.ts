import axios from "axios";
import { IUser } from "../../interfaces/models/IUser.interface";

export default function useUser() {
  const url = `${process.env.REACT_APP_USERS_URL}usuarios`;

  const listUsers = (): Promise<IUser[]> => {
    return axios.get(url).then(({ data }) => data);
  };

  const updateType = (id: string, type: "admin" | "volunteer") => {
    return axios.patch(`${url}/${id}/alterarTipo`, {}, { params: { type } });
  };

  const updateStatus = (id: string, status: "active" | "inactive") => {
    return axios.patch(
      `${url}/${id}/alterarStatus`,
      {},
      { params: { status } }
    );
  };

  const createUser = (
    user: Omit<IUser, "_id" | "status" | "type" | "isApproved">
  ) => {
    return axios.post(`${url}`, user);
  };

  const listApprovals = () => {
    return axios.get(`${url}/aprovacoes`).then(({ data }) => data);
  };

  const approve = (id: string) => {
    return axios.patch(`${url}/${id}/aprovar`);
  };

  return {
    listUsers,
    updateType,
    updateStatus,
    createUser,
    listApprovals,
    approve,
  };
}
