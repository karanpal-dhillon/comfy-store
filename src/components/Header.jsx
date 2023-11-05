import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser, selectUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const user = useSelector((state) => selectUser(state));
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    queryClient.removeQueries();
    dispatch(clearCart());
    navigate("/");
  };
  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className="align-content flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 justify-center items-center">
            <p className="text-xs sm:text-sm">Welcome {user.username}</p>
            <button onClick={handleLogout} className="btn btn-xs sm:text-sm">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in / guest
            </Link>
            <Link to="/signup" className="link link-hover text-xs sm:text-sm">
              Create an account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
