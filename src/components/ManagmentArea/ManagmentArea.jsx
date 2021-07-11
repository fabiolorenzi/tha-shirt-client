import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import "./stylesheets/ManagmentArea.css";

import Logo from "../../img/managment-logo.png";

import CreateProduct from "./CreateProduct.jsx";

function ManagmentArea() {
    const burgerState = useSelector(state => state.burgerButtonState);

    const openBurger = burgerState ? "openManArea" : "";

    return(
        <div className="manAreaContainer" data-testid="manAreaContainer" id={openBurger}>
            <Helmet htmlAttribute={{lang: localStorage.getItem("lang") || "en"}}>
                <title>THA SHIRT | MANAGMENT AREA</title>
            </Helmet>
            <div className="manAreaBody" data-testid="manAreaBody">
                <h1 data-testid="manAreaTitle">Managment Area</h1>
                <h2 data-testid="manAreaUndertitle">This area is reserved</h2>
                <div className="manAreaImg">
                    <img src={Logo} alt="managment logo" />
                </div>
                <div>
                    <div data-testid="createProdDiv" className="createProdDiv">
                        <CreateProduct />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagmentArea;