import useFetch from "../hooks/useFetch.js";
import CategoryLoad from "../parts/category/CategoryLoad.jsx";
import CategoryMain from "../parts/category/CategoryMain.jsx";

const Categorys = ()=>{
    const lista = useFetch("https://honeysuckle-giant-ambert.glitch.me/category/all");

    return <>
        {lista ? <CategoryMain lista={lista}/> : <CategoryLoad/>}
    </>
};

export default Categorys;