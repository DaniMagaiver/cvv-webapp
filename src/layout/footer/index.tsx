import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import YouTube from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "75%",
        marginTop: "4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "40%",
          marginTop: "1rem",
        }}
      >
        <Twitter style={{ height: "4rem", width: "auto", color: "#1DA1F2" }} />
        <Instagram
          style={{ height: "4rem", width: "auto", color: "#833AB4" }}
        />
        <Facebook style={{ height: "4rem", width: "auto", color: "#4267B2" }} />
        <YouTube style={{ height: "4rem", width: "auto", color: "#FF0000" }} />
      </div>
      <p>
        Copyright 2022 CVV - Centro de Valorização da Vida. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
