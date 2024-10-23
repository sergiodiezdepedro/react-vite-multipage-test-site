import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-zinc-800 px-3 py-8 md:px-10 lg:px-16 md:py-10 shadow-xl">
      <div className="flex justify-between items-center gap-x-3">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <h1 className="text-orange-600 font-black text-2xl text-center md:text-4xl">
          Guerrero de Troquel
        </h1>
        <nav className="flex flex-col lg:flex-row space-y-3 lg:space-x-3 lg:space-y-0 md:uppercase text-sm md:text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-300 font-bold" : "text-white font-bold"
            }>
            Home
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? "text-orange-300 font-bold" : "text-white font-bold"
            }>
            Categorías
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
