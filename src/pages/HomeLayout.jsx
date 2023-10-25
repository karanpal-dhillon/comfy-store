import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";
const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="align-content py-20">
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;
