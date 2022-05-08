import {Link} from "react-router-dom";

const NavBarLink = ()=>{
    return  (
    <div className="col-12 p-0">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className={"nav-link"} aria-current="page" to={"/"}>Home</Link></li>
                <li className="nav-item"><Link className={"nav-link"} aria-current="page" to={"/categorys"}>Categorias</Link></li>
                <li className="nav-item"><Link className={"nav-link"} aria-current="page" to={"/profile/historial"}>Mis compras</Link></li>
                <li className="nav-item"><Link className={"nav-link"} aria-current="page" to={"/auth/login"}>Log In</Link></li>
                <li className="nav-item"><Link className={"nav-link"} aria-current="page" to={"/auth/signin"}>Sign In</Link></li>
                <li className="nav-item"><Link className={"nav-link"} aria-current="page" to={"/profile"}>Perfil</Link></li>
            </ul>
        </div>
    </div>
    );
};

export default NavBarLink;