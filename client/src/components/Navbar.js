import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar mb-10 shadow-lg bg-neutral text-neutral-content rounded-b-xl">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">Admin CMS</span>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </Link>
          <Link to="/add" className="btn btn-ghost btn-sm rounded-btn">
            Add Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
