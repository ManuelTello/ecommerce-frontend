import React from "react";
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

const Categorys = ()=>{
    const lista = useFetch("https://honeysuckle-giant-ambert.glitch.me/category/all");

    return <div className="container py-1 my-5 bg-secondary bg-opacity-25 rounded">
        {lista && lista.map((cat)=>{
            const {name,subcat} = cat;
            return <div key={name} className="m-4"> 
                <div className="row">
                    <div className="col-12 text-center text-sm-start">
                        <h4>
                            <Link key={name} to={`/categorys/${name}`} style={{textDecoration:"none"}}>{name}</Link>
                        </h4>
                    </div>
                    {subcat.map(e =><div className={"col-12 col-sm-4 col-md-3 text-center text-sm-start"}>
                        <Link key={e} to={`/categorys/${name}/${e}`} style={{textDecoration:"none"}}>
                            <h7 className="text-secondary">{e}</h7>
                        </Link>
                    </div>)}
                </div>
            </div>
        })}
    </div>
};

export default Categorys;