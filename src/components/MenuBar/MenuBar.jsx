import React from "react";
import "./stylesheets/MenuBar.css";
import HorizontalMenu from "./HorizontalMenu.jsx";
import BurgerButton from "./BurgerButton.jsx";
import HiddenMenu from "./HiddenMenu.jsx";

function MenuBar() {
    return(
        <div className="menuBarContainer" data-testid="menuBarContainer">
            <HorizontalMenu />
            <BurgerButton />
            <HiddenMenu />
        </div>
    );
};

export default MenuBar;