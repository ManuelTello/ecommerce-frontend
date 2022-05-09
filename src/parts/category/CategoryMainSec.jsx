import {Link} from "react-router-dom";

const  CategoryMainSec = (props)=>{
    const {name} = props;
    return <div className="col-12 text-center text-sm-start">
        <h4>
            <Link key={name} to={`/categorys/${name}`} style={{textDecoration:"none"}}>{name}</Link>
        </h4>
    </div>
};

export default CategoryMainSec;