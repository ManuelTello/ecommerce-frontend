const NavBarSearch =()=>{
    return (
    <div className="col px-2">
        <form method="GET" action="#" className="d-flex">
          <input type="text" className="form-control me-2" placeholder="Buscar"/>
          <button type="submit" className="btn mx-2 btn-primary btn-outline-light d-none d-md-inline-block">Buscar</button>
        </form>
    </div>
    );
};

export default NavBarSearch;