import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import notLogged from "../../img/unlogged-icon.png";
import logged from "../../img/logged-icon.png";
import "./stylesheets/LoginButton.css";

function LoginButton() {
    const [login, setLogin] = useState({
        logged: localStorage.getItem("logged") || false,
        username: localStorage.getItem("username") || ""
    });
    const pathname = window.location.pathname;
    const [currentUrl, setCurrentUrl] = useState(pathname);

    useEffect(() => {
        setCurrentUrl(pathname);
    }, [pathname]);

    useEffect(() => {
        setLogin({
            logged: localStorage.getItem("logged") || false,
            username: localStorage.getItem("username") || ""
        });
    }, [currentUrl]);

    return(
        <div className="loginButtonContainer" data-testid="loginButtonContainer">
            <Link to={login.logged ? "/account" : "/login"}>
                {!login.logged
                    ?
                        <div className="login_button" data-testid="button">
                            <h3 data-testid="username">Not Logged</h3>
                            <img src={notLogged} alt="not logged icon" />
                        </div>
                    :
                        <div className="login_button" data-testid="button">
                            <h3 data-testid="username">{login.username}</h3>
                            <img src={logged} alt="logged icon" />
                        </div>
                }
            </Link>
        </div>
    );
};

export default LoginButton;