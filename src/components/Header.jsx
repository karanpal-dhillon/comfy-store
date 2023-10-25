import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral text-neutral-content py-2">
      <div className="align-content flex justify-center sm:justify-end">
        <div className="flex gap-x-6 justify-center items-center">
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Sign in / guest
          </Link>
          <Link to="/signup" className="link link-hover text-xs sm:text-sm">
            Create an account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
