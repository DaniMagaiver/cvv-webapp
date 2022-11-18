import style from "./Chat.module.scss";
import TextField from "@mui/material/TextField";
import { IMessage } from "../../../interfaces/models/IMessage.interface";
import { useState } from "react";

interface Props {
  messages: IMessage[];
  sendMessage: (message: string) => void;
  userType: "patient" | "volunteer";
}

export default function Chat({ messages, sendMessage, userType }: Props) {
  const [newMessage, setNewMessage] = useState<string>("");
  const containerStyle: { [key: string]: string } = {
    you: style.chat__messages__requester,
    other: style.chat__messages__voluntary,
  };

  const backGroundStyle: { [key: string]: string } = {
    you: style.chat__messages__requester__message,
    other: style.chat__messages__voluntary__message,
  };

  const chatName: { [key: string]: string } = {
    patient: "Usuário",
    volunteer: "Voluntário",
  };

  const type = (from: string) => {
    return from === userType ? "you" : "other";
  };

  return (
    <section className={style.chat}>
      <div className={style.chat__messages}>
        {messages.map(({ content, from, _id }) => (
          <div
            key={_id + "container" + Date.now()}
            className={containerStyle[type(from)]}
          >
            <div
              key={_id + "background" + Date.now()}
              className={backGroundStyle[type(from)]}
            >
              <span key={_id + "name"} className={style.chat__messages__name}>
                {type(from) === "you" ? "Você" : chatName[from]}
              </span>
              <p key={_id + "message" + Date.now()}>{content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={style.chat__messagebox}>
        <TextField
          fullWidth
          id=""
          sx={{ backgroundColor: "white" }}
          value={newMessage}
          onChange={($event) => setNewMessage($event.target.value)}
          onKeyDown={($event) => {
            if ($event.key === "Enter") {
              sendMessage(($event.target as any).value);
              setNewMessage("");
            }
          }}
        />
      </div>
    </section>
  );
}
