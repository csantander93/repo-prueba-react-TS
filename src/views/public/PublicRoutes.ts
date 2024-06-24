import DoctorList from '../../components/medicalRecord/DoctorList';
import Turnos from '../../components/Turnos/TurnosComponent';
import MenuAppBar from '../../components/AppBar/MenuAppBar';

export const protectedRoutes = [
  { path: "/home", component: MenuAppBar, name: "Home" },
  { path: "/cartilla-medica", component: DoctorList, name: "CartillaMedica" },
  { path: "/turnos", component: Turnos, name: "Turnos" }
];
