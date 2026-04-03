import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="p-5">
      <ul className="flex justify-end gap-5 text-2xl">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-amber-800' : 'text-gray-800'}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({ isActive }) => isActive ? 'text-amber-800' : 'text-gray-800'}>Register</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'text-amber-800' : 'text-gray-800'}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/technologies" className={({ isActive }) => isActive ? 'text-amber-800' : 'text-gray-800'}>Technologies</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
