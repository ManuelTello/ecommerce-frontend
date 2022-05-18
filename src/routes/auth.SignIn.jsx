import React from "react";

const AuthSignin = ()=>{
    return <div className="container-md my-5 p-5 rounded-1 bg-opacity-25 bg-secondary" >
        <form action="#" method="POST">
            <div className="row justify-content-center">
                <div class="mb-3 col-12">
                    <label for="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3 col-6">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password"/>
                </div>
                <div class="mb-3 col-6">
                    <label for="password-rep" className="form-label">Repeat password</label>
                    <input type="password" className="form-control" id="password-rep"/>
                </div>


                <div className="col-5 mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control"></input>
                </div>
                <div className="col-5 mb-3">
                    <label for="" className="form-label">Last name</label>
                    <input type="text" className="form-control"></input>
                </div>
                <div className="col-2 mb-3">
                    <label for="" className="form-label">Age</label>
                    <input type="number" className="form-control"></input>
                </div>

                <div className="col">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
       </form>
    </div>
};

export default AuthSignin;