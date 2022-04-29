import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./NavBar.jsx";

const Global = ()=>{
    return <React.Fragment>
        <NavBar/>
        <Outlet/>
    </React.Fragment>
};

export default Global;