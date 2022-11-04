import { Outlet } from "react-router-dom";
import Footer from "./footer";
import CvvMenu from "./menu";

export default function Layout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <CvvMenu />
      <Outlet />
      <Footer />
    </div>
  );
}
