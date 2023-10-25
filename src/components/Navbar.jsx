import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { useEffect } from "react";
const themes = {
  winter: "winter",
  dracula: "dracula",
};

const Navbar = () => {
  const [theme, setTheme] = useState(themes.dracula);
  const handleTheme = () => {
    const { winter, dracula } = themes;
    const newTheme = theme === winter ? dracula : winter;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setTheme(newTheme);
  };
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    console.log(`got theme`, theme);
    if (theme) {
      setTheme(theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, []);
  return (
    <nav className="bg-base-200">
      <div className="navbar align-content">
        <div className="navbar-start">
          <Link
            to="/"
            className="hidden lg:flex text-3xl btn btn-primary items-center"
          >
            C
          </Link>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              className="dropdown-content menu menu-sm mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
              tabIndex={0}
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
