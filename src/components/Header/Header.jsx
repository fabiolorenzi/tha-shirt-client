import React from "react";
import "./stylesheets/Header.css";

import LoginButton from "./LoginButton.jsx";
import LanguageSelection from "./LanguageSelection.jsx";
import CurrencySelection from "./CurrencySelection.jsx";
import BasketButton from "./BasketButton.jsx";

function Header() {
    return(
        <div className="header" data-testid="headerContainer">
            <LoginButton />
            <LanguageSelection />
            <CurrencySelection />
            <BasketButton />
        </div>
    );
};

export default Header;