import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../layout";
import Admin from "../pages/admin";
import ApproveVolunteers from "../pages/admin/approve-volunteers";
import Volunteers from "../pages/admin/volunteers";
import PatientChat from "../pages/patient-chat";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Login from "../pages/login";
import NewUser from "../pages/new-user";
import NotFound from "../pages/not-found";
import Voluntary from "../pages/voluntary";
import VoluntaryChat from "../pages/voluntary/voluntary-chat";

export default function CvvRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="seja-voluntario" element={<NewUser />} />
          <Route path="quero-conversar" element={<PatientChat />} />
          <Route path="fale-conosco" element={<Contact />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin />}>
          <Route index element={<ApproveVolunteers />} />
          <Route path="aprovar-voluntarios" element={<ApproveVolunteers />} />
          <Route path="administrar-voluntarios" element={<Volunteers />} />
        </Route>
        <Route path="voluntary" element={<Voluntary />}>
          <Route index element={<VoluntaryChat />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
