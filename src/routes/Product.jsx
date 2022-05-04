import React from "react";
import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

const Product = ()=>{
    const data = useFetch("https://honeysuckle-giant-ambert.glitch.me/products/list");
    const pid = useParams();
    return <React.Fragment>
        <h1>Product page</h1>
        <h4>{pid.pid}</h4>
    </React.Fragment>
};

export default Product;