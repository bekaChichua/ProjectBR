import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { Wrapper } from "../styleFile/navbarButton";
const Navbar = () => {
  return (
    <Wrapper>
      <h1>NavBar</h1>
      <Link className="navButtons" to="/">
        <button className="button">Home</button>
      </Link>
      <Link className="navButtons" to="/about">
        <button className="button"> About</button>
      </Link>
      <Link className="navButtons" to="">
        <button className="button"> Work</button>
      </Link>
      <Link className="navButtons" to="">
        <button className="button"> Finished</button>
      </Link>
    </Wrapper>
  );
};

export default Navbar;
