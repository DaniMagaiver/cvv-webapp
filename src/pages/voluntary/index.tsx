import { NavLink, Outlet } from "react-router-dom";
import style from "./Voluntary.module.scss";
import menuStyle from "../../layout/menu/CvvMenu.module.scss";

export default function Voluntary() {
  return (
    <>
      <div className={menuStyle.menu}>
        <NavLink className={menuStyle.menu__active} to="chat">
          CHAT
        </NavLink>
      </div>
      <div className={style.voluntary}>
        <Outlet />
      </div>
    </>
  );
}
