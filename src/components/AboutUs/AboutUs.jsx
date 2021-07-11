import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import "./stylesheets/AboutUs.css";

import Logo from "../../img/tha-shirt-logo.png";
import ShopImage from "../../img/shop_image_01.jpg";

function AboutUs() {
    const burgerState = useSelector(state => state.burgerButtonState);

    const openBurger = burgerState ? "openAboutUs" : "closedAboutUs";

    return(
        <div className="aboutUsContainer" id={openBurger} data-testid="aboutUsContainer">
            <Helmet htmlAttributes={{lang: localStorage.getItem("lang") || "en"}}>
                <title>THA SHIRT | ABOUT US</title>
            </Helmet>
            <div className="aboutUsBody" data-testid="aboutUsBody">
                <h1 data-testid="aboutUsTitle">About Us</h1>
                <div className="aboutUsLeft" data-testid="aboutUsLeft">
                    <img src={Logo} alt="logo of tha shirt" />
                </div>
                <div className="aboutUsRight" data-testid="aboutUsRight">
                    <p data-testid="aboutUsRightText">
                        Tha Shirt was born in 2021 in Brighton, UK. The dream was simple. Give everyone the possibility to buy 
                        clothes to support any cartoon, band or brand. Our mission is to give alternative music fans the opportunity 
                        to get all of their merchandise from one extensive catalogue. We want to be the top provider of alternative 
                        clothing and music, TV, film and video game merchandise, with thousand of products available online and create 
                        our group of loyal customers! Are you looking for the t-shirt of that Metal band? Or the one of the last 
                        anime available on Netflix? Tha Shirt is the best website to go!
                    </p>
                </div>
            </div>
            <div className="aboutUsUnderBody" data-testid="aboutUsUnderBody">
                <img src={ShopImage} alt="shop" />
            </div>
        </div>
    );
};

export default AboutUs;