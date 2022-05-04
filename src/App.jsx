import React from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
   
import 'bootstrap/dist/css/bootstrap.min.css';

import Global from "./components/Global.jsx";
import Home from "./routes/Home.jsx";
import NoMatch from "./routes/NoMatch.jsx";
import LogIn from "./routes/auth.Login.jsx";
import SignIn from "./routes/auth.SignIn.jsx";
import Profile from "./routes/auth.Profile.jsx";
import Product from "./routes/Product.jsx";
import Categorys from "./routes/Category.jsx";
import CategoryMain from "./routes/Category.main.jsx";
import CategorySubCat from "./routes/Category.sub.jsx";

const App = ()=>{
    return <Routes>
        <Route path={"/"} element={<Global/>}>
            <Route index element={<Home/>}/>
            <Route path="auth">
                <Route index element={<Navigate replace to={"login"}/>}/>
                <Route path={"login"} element={<LogIn/>}/>
                <Route path={"signin"} element={<SignIn/>}/>
                <Route path={"profile"} element={<Profile/>}/>
            </Route>
            <Route path={"categorys"}>
                <Route index element={<Categorys/>}/>
                <Route path={":cat"} element={<CategoryMain/>}/>
                <Route path={":cat/:subcat"} element={<CategorySubCat/>}/>
            </Route>
            <Route path={"topsellers"}/>
            <Route path={"product/:pid"}>
                <Route index element={<Product/>}/>
            </Route>
            <Route path={"*"} element={<NoMatch/>}/>
        </Route>
    </Routes>
};

export default App;