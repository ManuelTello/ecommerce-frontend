import React from "react";
import {useParams} from "react-router-dom";

const Product = ()=>{
    const pid = useParams();
    return <React.Fragment>
        <h1>Product page</h1>
        <h4>{pid.pid}</h4>
    </React.Fragment>
};

export default Product;