import React from "react";
import {NavLink} from "react-router-dom";
import {Nav} from "react-bootstrap";
import {buttonActive} from "../lib/button.js";

const {Item,Link} = Nav;

const NavBar = ()=>{
    return <Nav as={"ul"}>
        <Item as={"li"}>
            <NavLink style={buttonActive} to="/">Home</NavLink>
        </Item>
        <Item as={"li"}>
            <NavLink style={buttonActive} to="/categorys">Categorias</NavLink>
        </Item>
        <Item as={"li"}>
            <NavLink style={buttonActive} to="/topsells">Top sellers</NavLink>
        </Item > 
        <Item as={"li"}>
            <NavLink style={buttonActive} to="/auth/login">Log in</NavLink>
        </Item>
        <Item as={"li"}>
            <NavLink style={buttonActive} to="/auth/signin">Sign in</NavLink>
        </Item>
        <Item as={"li"}>
            <NavLink style={buttonActive} to="/auth/profile">Profile</NavLink>
        </Item>
    </Nav>
};

export default NavBar;