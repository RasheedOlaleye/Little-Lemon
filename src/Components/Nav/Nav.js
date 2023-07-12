import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../Images/Logo.png';

const NavLink = ({ to, className,
   activeClassName,
    inactiveClassName,
     ...rest }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const AllclassName = `${className} ${isActive ? activeClassName : inactiveClassName}`;


  return <Link to={to} {...rest} className={AllclassName} />;
};

const Nav = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="fixed w-full bg-[#EDEFEE] z-50">
      <div className="flex flex-row justify-between md:max-w-7xl mx-auto items-center h-20 px-4">
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} 
            className="mr-2 mx-5 mt-2 h-14 w-100" alt="Little Lemon Restaurant Logo" />

          </NavLink>
        </div>
        <ul className="hidden md:flex">
        <NavLink to="/"
             className="px-4 cursor-pointer  capitalize font-medium hover:scale-105 duration-200"
             activeClassName ="outline-1  outline-yellow-500"
             inactiveClassname= "  border-indigo-500 text-gray-400"
            exact={true}>
              Home
            </NavLink>
          
          
            <NavLink to="/About"
             className="px-4 cursor-pointer  capitalize font-medium hover:scale-105 duration-200"
             activeClassName ="outline-1  outline-yellow-500"
             inactiveClassname= "  border-indigo-500 text-gray-400"
            exact={true}>
              About
            </NavLink>
          
            <NavLink to="/BookingPage"
             className="px-4 cursor-pointer  capitalize font-medium hover:scale-105 duration-200"
             activeClassName ="outline-1  outline-yellow-500"
             inactiveClassname= "  border-indigo-500 text-gray-400"
            exact={true}>
              Booking
            </NavLink>

          <NavLink to="/Reservation"
             className="px-4 cursor-pointer  capitalize font-medium hover:scale-105 duration-200"
             activeClassName ="outline-1  outline-yellow-500"
             inactiveClassname= "  border-indigo-500 text-gray-400"
            exact={true}>
             Reservation
            </NavLink>
        </ul>
        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center md:hidden bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <li className="px-5 cursor-pointer capitalize py-7 text-4xl">
            <NavLink onClick={() => setNav(!nav)} to="/" exact={true}>
              Home
            </NavLink>
          </li>
          <li className="px-5 cursor-pointer capitalize py-7 text-4xl">
            <NavLink onClick={() => setNav(!nav)} to="/About" exact={true}>
              About
            </NavLink>
          </li>
          <li className="px-5 cursor-pointer capitalize py-7 text-4xl">
            <NavLink onClick={() => setNav(!nav)} to="/Booking" exact={true}>
              Booking
            </NavLink>
          </li>
          <li className="px-5 cursor-pointer capitalize py-7 text-4xl">
            <NavLink onClick={() => setNav(!nav)} to="/Reservation" exact={true}>
              Reservation
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
