import React from "react";
import { useSelector } from "react-redux";
import "./stylesheets/Footer.css";

function Footer() {
    const burgerState = useSelector(state => state.burgerButtonState);

    const openBurger = burgerState ? "openFooter" : "";

    return(
        <div className="footerContainer" data-testid="footerContainer" id={openBurger}>
            <div>
                <a href="https://github.com/fabiolorenzi" target="_blank" rel="noreferrer"><p data-testid="footerText">Developed by F. Lorenzi</p></a>
                <p id="footerRights" data-testid="footerRights">All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;