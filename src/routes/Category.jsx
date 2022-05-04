import React from "react";
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
//import lista from "../assets/categorys.json";

const Categorys = ()=>{
    const lista = useFetch("https://honeysuckle-giant-ambert.glitch.me/category/all");
    return <div>
        {lista && lista.data.map((cat)=>{
            const {name,subcat} = cat;
            return <div key={name}> 
                <h1><Link to={`/categorys/${name}`}>{name}</Link></h1>
                <ul>{subcat.map(e =><li key={e}><Link to={`/categorys/${name}/${e}`}>{e}</Link></li>)}</ul>
            </div>
        })}
    </div>
};

export default Categorys;