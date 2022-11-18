import axios from "axios";
import { io } from "socket.io-client";
import { IChat } from "../../interfaces/models/IChat.interface";
import { IMessage } from "../../interfaces/models/IMessage.interface";

export default function useChat() {
  const chatUrl = `${process.env.REACT_APP_CHAT_API}chat`;

  const createRoom = () => {
    return axios.post<IChat>(`${chatUrl}/create`).then(({ data }) => data);
  };

  const firstPatientQueue = () => {
    return axios.post<IChat>(`${chatUrl}/queue`).then(({ data }) => data);
  };

  return {
    createRoom,
    firstPatientQueue
  };
}
