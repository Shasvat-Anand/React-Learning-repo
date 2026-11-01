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

        <div className="flex items-center gap-2">


        <span>     

            
          <svg
            className="h-6 w-6 text-purple-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 8l-9-5-9 5v8l9 5 9-5V8z" />
            <path d="M3 8l9 5 9-5" />
            <path d="M12 13v8" />
          </svg>
           </span>
        <span className="text-lg font-bold tracking-tight text-slate-100">
          Paste<span className="text-purple-400">Box</span>
          
          
        </span>

        </div>
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