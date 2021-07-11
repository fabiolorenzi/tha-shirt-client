import React from "react";
import "./stylesheets/LoginArea.css";

import Login from "./Login.jsx";
import CreateAccount from "./CreateAccount.jsx";

function LoginArea() {
    return(
        <div className="loginAreaContainer" data-testid="loginAreaContainer">
            <h1 data-testid="loginAreaTitle">Login Area</h1>
            <div>
                <div className="login" data-testid="loginAreaLoginDiv">
                    <Login />
                </div>
                <div className="createAccount" data-testid="loginAreaCreateAccountDiv">
                    <CreateAccount />
                </div>
            </div>
        </div>
    );
};

export default LoginArea;