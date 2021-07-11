import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import "./stylesheets/Shop.css";

import Logo from "../../img/tha-shirt-logo.png";

import SearchBar from "./SearchBar.jsx";
import ShopList from "./ShopList.jsx";
import SearchList from "./SearchList.jsx";

function Shop() {
    const burgerState = useSelector(state => state.burgerButtonState);
    const searcher = useSelector(state => state.searcher);

    const openBurger = burgerState ? "openShop" : "closedShop";

    return(
        <div className="shopContainer" id={openBurger} data-testid="shopContainer">
            <Helmet htmlAttributes={{lang: localStorage.getItem("lang") || "en"}}>
                <title>THA SHIRT | SHOP</title>
            </Helmet>
            <div className="shopBody" data-testid="shopBody">
                <h1 data-testid="shopTitle">Shop</h1>
                <div className="shopLogo" data-testid="shopLogo">
                    <img src={Logo} alt="logo of tha shirt" />
                </div>
            </div>
            <div className="searchBar" data-testid="searchBar">
                <SearchBar /> 
            </div>
            {!searcher
                ?
                    <div className="shopList" data-testid="shopList">
                        <ShopList />
                    </div>
                :
                    <div className="searchList">
                        <SearchList />
                    </div>
            }
            
        </div>
    );
};

export default Shop;