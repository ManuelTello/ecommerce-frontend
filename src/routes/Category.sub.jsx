import React from "react";
import {useParams} from "react-router-dom";

const CategorySubCat = ()=>{
    const {cat, subcat} = useParams();

    return <React.Fragment>
        <h1>{cat}</h1>
        <h4>{subcat}</h4>
    </React.Fragment>
};

export default CategorySubCat;