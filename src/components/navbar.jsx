import React, { Component } from "react";

// stateless functional component- shortcut= sfc
// cant use lifecycle hooks

const NavBar = ({ totalCounters }) => {
  console.log("NAVBAR RENDERED");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
