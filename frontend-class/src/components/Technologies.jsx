import { Outlet } from "react-router";
import { NavLink } from "react-router";

function Technologies() {
  return (
    <div>
      <nav className="p-5">
        <ul className="flex justify-center gap-5 text-3xl">
          <li>
            <NavLink to="java" className={({ isActive }) => isActive ? 'text-amber-800' : 'text-gray-800'}>Java</NavLink>
          </li>
          <li>
            <NavLink to="node" className={({ isActive }) => isActive ? 'text-amber-800' : 'text-gray-800'}>Node</NavLink>
          </li>
          <li>
            <NavLink to="vue" className={({ isActive }) => isActive ? 'text-amber-800' : 'text-gray-800'}>Vue</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Technologies;
