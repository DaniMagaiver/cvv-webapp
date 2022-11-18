import useChat from "../../shared/hooks/chat.hook";
import { useEffect } from "react";
import { useState } from "react";
import { io } from "socket.io-client";
import { IMessage } from "../../interfaces/models/IMessage.interface";
import Chat from "../../shared/components/chat";

export default function PatientChat() {
  const { createRoom } = useChat();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [roomId, setRoomId] = useState<string>();

  useEffect(() => {
    createRoom().then(({ roomId }) => {
      console.log(roomId);
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
    const newMessage = { from: "patient", to: "volunteer", content };
    io(`${process.env.REACT_APP_CHAT_API}rooms?roomId=${roomId}`).emit(
      "message",
      newMessage
    );
  };

  return (
    <Chat messages={messages} sendMessage={sendMessage} userType="patient" />
  );
}
