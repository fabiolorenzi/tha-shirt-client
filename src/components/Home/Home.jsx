import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import "./stylesheets/Home.css";

import ImageRoller from "./ImageRoller.jsx";
import Logo from "../../img/tha-shirt-logo.png";

function Home() {
    const burgerButtonState = useSelector(state => state.burgerButtonState);
    const [delThr, setDelThr] = useState();
    const currency = localStorage.getItem("currency") || "£";

    useEffect(() => {
        if (currency === "£") {
            setDelThr(50);
        } else if (currency === "€") {
            setDelThr(58);
        } else {
            setDelThr(70);
        };
    }, [currency]);

    const openBurger = burgerButtonState ? "openHome" : "";

    return(
        <div className="homeContainer" id={openBurger} data-testid="homeContainer">
            <Helmet htmlAttributes={{lang: localStorage.getItem("lang") || "en"}}>
                <title>THA SHIRT | HOME</title>
            </Helmet>
            <h3>Free delivery from {currency}{delThr}!</h3>
            <ImageRoller />
            <div className="homeBody" data-testid="homeBody">
                <h1 data-testid="fTitle">Welcome to THA-SHIRT!</h1>
                <h2 data-testid="fUndertitle">The e-commerce for the right clothes!</h2>
                <div className="homeLeft" data-testid="homeLeft">
                    <img src={Logo} alt="logo of tha shirt" />
                </div>
                <div className="homeRight" data-testid="homeRight">
                    <h1 data-testid="rightTitle">HOME</h1>
                    <h3 data-testid="rightUndertitle">Welcome</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;