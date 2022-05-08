import NavBarLink from "../parts/navbar/NavBarLinks.jsx";
import NavBarLogo from "../parts/navbar/NavBarLogo.jsx";
import NavBarSearch from "../parts/navbar/NavBarSeach.jsx";

const NavBar = ()=>{
    return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
        <div className="container">
            <div className="row align-items-center">
                <NavBarLogo/>
                <div className="col">
                    <div className="row">
                        <NavBarSearch/>     
                        <NavBarLink/>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default NavBar;