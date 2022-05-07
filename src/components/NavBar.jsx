import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = ()=>{
    return <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-sm-4 navbar-brand">
                    <h2 className="text-center">SuperMarket</h2>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <form method="GET" action="#" className="d-flex">
                                  <input type="text" className="form-control me-2" placeholder="Buscar"/>
                                  <button type="submit" className="btn mx-2 btn-primary btn-outline-light d-none d-sm-inline-block">Buscar</button>
                            </form>
                        </div>
                        <div className="">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item"><NavLink className={"nav-link"} aria-current="page" to={"/"}>Home</NavLink></li>
                                    <li className="nav-item"><NavLink className={"nav-link"} aria-current="page" to={"/categorys"}>Categorias</NavLink></li>
                                    <li className="nav-item"><NavLink className={"nav-link"} aria-current="page" to={"/profile/historial"}>Mis compras</NavLink></li>
                                    <li className="nav-item"><NavLink className={"nav-link"} aria-current="page" to={"/auth/login"}>Log In</NavLink></li>
                                    <li className="nav-item"><NavLink className={"nav-link"} aria-current="page" to={"/auth/signin"}>Sign In</NavLink></li>
                                    <li className="nav-item"><NavLink className={"nav-link"} aria-current="page" to={"/profile"}>Perfil</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </nav>
};

export default NavBar;