import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";
import { useNavigation } from "react-router-dom";
const HomeLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  return (
    <div>
      <Header />
      <Navbar />
      <section className="align-content py-20">
        {
          isLoading ?
            <div className="grid place-items-center">
              <span className="loading loading-ball loading-lg"></span>
            </div>
            :
            <Outlet />
        }
      </section>
    </div>
  );
};

export default HomeLayout;
