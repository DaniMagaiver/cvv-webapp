import style from "./Chat.module.scss";
import TextField from "@mui/material/TextField";

export default function Chat() {
  return (
    <section className={style.chat}>
      <div className={style.chat__messages}>
        <div className={style.chat__messages__voluntary}>
        <div className={style.chat__messages__voluntary__message}>
          <span className={style.chat__messages__name}>Voluntário</span>
          <p>Olá, eu sou o Igor e irei te ouvir.</p>
        </div>
      </div>
      <div className={style.chat__messages__voluntary}>
        <div className={style.chat__messages__voluntary__message}>
          <span className={style.chat__messages__name}>Voluntário</span>
          <p>Como você está se sentindo hoje?</p>
        </div>
      </div>
      <div className={style.chat__messages__requester}>
        <div className={style.chat__messages__requester__message}>
          <span className={style.chat__messages__name}>Pedro</span>
          <p>Não estou bem, minha namorada acabou de terminar comigo.</p>
        </div>
      </div>
      <div className={style.chat__messages__voluntary}>
        <div className={style.chat__messages__voluntary__message}>
          <span className={style.chat__messages__name}>Voluntário</span>
          <p>E como você está se sentindo em relação a isso?</p>
        </div>
      </div>
      <div className={style.chat__messages__requester}>
        <div className={style.chat__messages__requester__message}>
          <span className={style.chat__messages__name}>Pedro</span>
          <p>
            Estou confuso, parecia tudo tão bem entre a gente. Não consigo
            entender porque ela fez isso.
          </p>
        </div>
      </div>
      </div>
      <div className={style.chat__messagebox}>
        <TextField fullWidth id="" sx={{ backgroundColor: "white" }} />
      </div>
    </section>
  );
}
