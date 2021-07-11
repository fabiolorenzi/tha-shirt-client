import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { open_close } from "../../redux/actions/open_closeAction.js";
import "./stylesheets/HiddenMenu.css";

function HiddenMenu() {
    const dispatch = useDispatch();
    const burgerButtonState = useSelector(state => state.burgerButtonState);

    const pass = localStorage.getItem("pass") ? "" : "reservedHiddenMenu";

    const hiddenMenuState = burgerButtonState ? "openHiddenMenu" : "closedHiddenMenu";

    const clicker = () => {
        dispatch(open_close());
    };

    return(
        <div className="hiddenMenuContainer" id={hiddenMenuState} data-testid="hiddenMenuContainer" onClick={clicker}>
            <NavLink to="/" exact className="hiddenMenu1" activeClassName="activeHiddenMenu" data-testid="link1">HOME</NavLink>
            <NavLink to="/shop" className="hiddenMenu1" activeClassName="activeHiddenMenu" data-testid="link2">SHOP</NavLink>
            <NavLink to="/aboutus" className="hiddenMenu1" activeClassName="activeHiddenMenu" data-testid="link3">ABOUT US</NavLink>
            <NavLink to="/contacts" className="hiddenMenu1" activeClassName="activeHiddenMenu" data-testid="link4">CONTACTS</NavLink>
            <NavLink to="/managment-area" className="hiddenMenu1" activeClassName="activeHiddenMenu" id={pass} data-testid="link5">MANAGMENT</NavLink>
        </div>
    );
};

export default HiddenMenu;