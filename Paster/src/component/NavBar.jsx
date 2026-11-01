import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-medium transition ${
      isActive
        ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20"
        : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
    }`;

  return (
    <nav className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <span className="text-lg font-bold tracking-tight text-slate-100">
          Paste<span className="text-purple-400">Box</span>
        </span>

        <div className="flex gap-2">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/paste" className={linkClass}>
            All Pastes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;