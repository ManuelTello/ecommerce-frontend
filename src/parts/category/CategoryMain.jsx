import CategoryMainSec from "./CategoryMainSec.jsx";
import CategorySub from "./CategorySub.jsx";

const CategoryMain = ({lista})=>{
    return <>
        <div className="container py-1 my-5 bg-secondary bg-opacity-25 rounded">
            {lista.map((e)=>{
                const {name,subcat} = e;
                return <div key={name} className="m-4"> 
                    <div className="row">
                        <CategoryMainSec name={name}/>
                        <CategorySub sub_category={subcat} name={name}/>
                    </div>
                </div>
            })}
        </div>
    </>
};

export default CategoryMain;