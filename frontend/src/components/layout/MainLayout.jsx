import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
}
