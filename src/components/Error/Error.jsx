import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import "./stylesheets/Error.css";

import Logo from "../../img/tha-shirt-logo.png";

function Error() {
    const burgerButtonState = useSelector(state => state.burgerButtonState);

    const openBurger = burgerButtonState ? "openError" : "";

    return(
        <div className="errorContainer" id={openBurger} data-testid="errorContainer">
            <Helmet htmlAttributes={{lang: localStorage.getItem("lang") || "en"}}>
                <title>THA SHIRT | ERROR</title>
            </Helmet>
            <div className="errorBody" data-testid="errorBody">
                <h1 data-testid="errorTitle">ERROR</h1>
                <div className="errorLeft" data-testid="errorLeft">
                    <img src={Logo} alt="logo of tha shirt" />
                </div>
                <div className="errorRight" data-testid="errorRight">
                    <h1 data-testid="errorRightTitle">ERROR</h1>
                    <h3 data-testid="errorRightUndertitle">Page not found. Please return to the <a href="/">Homepage</a></h3>
                </div>
            </div>
        </div>
    );
};

export default Error;