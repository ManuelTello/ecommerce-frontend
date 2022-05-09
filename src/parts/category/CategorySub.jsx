import React from "react";
import {Link} from "react-router-dom";

const  CategorySub = ({sub_category, name})=>{
    return <React.Fragment>
        {
            sub_category.map((e)=>{
                return <div key={e} className="col-12 col-sm-4 col-md-3 col-xl-2 text-center text-sm-start">
                    <Link key={e} to={`/categorys/${name}/${e}`} style={{textDecoration:"none"}}>
                        <h6 className="text-secondary">{e}</h6>
                    </Link>
                </div> 
            } 
        )}
    </React.Fragment>
};

export default CategorySub;