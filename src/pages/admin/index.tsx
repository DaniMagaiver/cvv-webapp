import { NavLink, Outlet } from "react-router-dom";
import menuStyle from "../../layout/menu/CvvMenu.module.scss";
import style from "./Admin.module.scss";

export default function Admin() {
  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? menuStyle.menu__active : menuStyle.menu__link;
  return (
    <>
      <div className={menuStyle.menu}>
        <NavLink className={active} to="aprovar-voluntarios">
          APROVAR VOLUNTÁRIOS
        </NavLink>
        <NavLink className={active} to="administrar-voluntarios">
          ADMINISTRAR VOLUNTÁRIOS
        </NavLink>
      </div>
      <div className={style.admin}>
        <Outlet />
      </div>
    </>
  );
}
