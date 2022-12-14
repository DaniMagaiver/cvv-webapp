import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import { IMessage } from "../../../interfaces/models/IMessage.interface";
import Chat from "../../../shared/components/chat";
import useChat from "../../../shared/hooks/chat.hook";

export default function VoluntaryChat() {
  const { firstPatientQueue } = useChat();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [roomId, setRoomId] = useState<string>();

  useEffect(() => {
    firstPatientQueue().then(({ roomId }) => {
      setRoomId(roomId);
      io(`${process.env.REACT_APP_CHAT_API}rooms?roomId=${roomId}`).on(
        "message",
        (message: IMessage) => {
          setMessages((messages) => [...messages, message]);
        }
      );
    });
  }, []);

  const sendMessage = (content: string) => {
    const newMessage = { from: "volunteer", to: "patient", content };
    io(`${process.env.REACT_APP_CHAT_API}rooms?roomId=${roomId}`).emit(
      "message",
      newMessage
    );
  };
  return (
    <Chat messages={messages} sendMessage={sendMessage} userType="volunteer" />
  );
}
