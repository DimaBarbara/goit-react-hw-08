import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "../Navigation/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => clsx(s.link, isActive && s.active)}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
