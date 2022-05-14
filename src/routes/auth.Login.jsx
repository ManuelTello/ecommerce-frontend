import React from "react";

const AuthLogin = ()=>{
    return <div className="container-md my-5 p-5 rounded-1 bg-opacity-25 bg-secondary" >
        <form action="#" method="POST">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
};

export default AuthLogin;