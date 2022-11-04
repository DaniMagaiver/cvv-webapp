import style from "./CvvMenu.module.scss";
import { NavLink } from "react-router-dom";

export default function CvvMenu() {
  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? style.menu__active : style.menu__link;
  return (
    <div className={style.menu}>
      <NavLink className={active} to="/">
        HOME
      </NavLink>
      <NavLink className={active} to="quero-conversar">
        QUERO CONVERSAR
      </NavLink>
      <NavLink className={active} to="seja-voluntario">
        SEJA VOLUNTÁRIO
      </NavLink>
      <NavLink className={active} to="fale-conosco">
        FALE CONOSCO
      </NavLink>
    </div>
  );
}
