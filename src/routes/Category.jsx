import React from "react";
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

const Categorys = ()=>{
    const lista = useFetch("https://honeysuckle-giant-ambert.glitch.me/category/all");
    const lista_categoria = lista && <div className="container py-1 my-5 bg-secondary bg-opacity-25 rounded">
        {lista.map((cat)=>{
            const {name,subcat} = cat;
            return <div key={name} className="m-4"> 
                <div className="row">
                    <div className="col-12 text-center text-sm-start">
                        <h4>
                            <Link key={name} to={`/categorys/${name}`} style={{textDecoration:"none"}}>{name}</Link>
                        </h4>
                    </div>
                    {subcat.map(e =><div className={"col-12 col-sm-4 col-md-3 col-xl-2 text-center text-sm-start"}>
                        <Link key={e} to={`/categorys/${name}/${e}`} style={{textDecoration:"none"}}>
                            <h7 className="text-secondary">{e}</h7>
                        </Link>
                    </div>)}
                </div>
            </div>
        })}
    </div>

    return <React.Fragment>
        {lista ? lista_categoria : <div class="d-flex justify-content-center align-items-center" style={{height:"90vh"}}>
            <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
      </div>}
    </React.Fragment>
};

export default Categorys;