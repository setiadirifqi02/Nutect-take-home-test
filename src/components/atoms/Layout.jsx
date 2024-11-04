import { Outlet } from "react-router-dom";
import NavBar from "./Navbar";

const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="mt-16 mb-20 md:mt-20 lg:mt-28 px-3 md:px-20 lg:px-28 font-open_sans">
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
