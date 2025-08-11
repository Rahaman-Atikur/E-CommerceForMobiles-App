import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router";
import { IoCart } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="mr-2">
        <IoMdMenu />
      </div>
      <div className="navbar-start">
        <Link to='/' className="  text-xl font-bold">Flagship Face Off</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className={({ isActive }) => isActive ? 'text-blue-500' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'text-blue-700' : ''} to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'text-blue-600' : ''} to='/cart'><IoCart  /></NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'text-blue-600' : ''} to='/favorites'><FaBookmark /></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
