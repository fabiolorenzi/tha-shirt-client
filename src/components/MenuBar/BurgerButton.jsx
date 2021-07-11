import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { open_close } from "../../redux/actions/open_closeAction.js";
import "./stylesheets/BurgerButton.css";

function BurgerButton() {
    const buttonState = useSelector(state => state.burgerButtonState);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    function opener(e) {
        e.preventDefault();
        setOpen(!open);
        dispatch(open_close());
    };

    useEffect(() => {
        buttonState ? setOpen(true) : setOpen(false);
    }, [buttonState]);

    return(
        <div className="burgerButton" data-testid="burgerButton" onClick={opener} id={open ? "burgerOpen" : "burgerClosed"}>
            <div className="burgerLine" data-testid="fBurgerLine"></div>
            <div className="burgerLine" data-testid="sBurgerLine"></div>
            <div className="burgerLine" data-testid="tBurgerLine"></div>
        </div>
    );
};

export default BurgerButton;