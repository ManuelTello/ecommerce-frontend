import React from "react";
import {NavLink, Link} from "react-router-dom";
import {Nav} from "react-bootstrap";
import {buttonActive} from "../lib/button.js";

const {Item} = Nav;

const NavBar = ()=>{
    return <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className={"nav-link"} aria-current="page" to={"/"}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={"nav-link"} to={"/categorys"}>Categorys</NavLink>
                    </li>
                </ul>
            </div>
        </div>
  </nav>
};

export default NavBar;