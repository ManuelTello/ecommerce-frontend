import React from "react";
import {useParams} from "react-router-dom";

const CategoryMain = ()=>{
    const {cat} = useParams();

    return <h1>{cat}</h1> 
};

export default CategoryMain;