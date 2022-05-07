import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = ()=>{
    return <nav className="navbar navbar-expand navbar-dark bg-primary">
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