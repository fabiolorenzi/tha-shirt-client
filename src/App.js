import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import MenuBar from "./components/MenuBar/MenuBar.jsx";
import Home from "./components/Home/Home.jsx";
import LoginArea from "./components/LoginArea/LoginArea.jsx";
import Account from "./components/Account/Account.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import ManagmentArea from "./components/ManagmentArea/ManagmentArea.jsx";
import Shop from "./components/Shop/Shop.jsx";
import CategoriesList from "./components/Shop/CategoriesList.jsx";
import UnderCategoriesList from "./components/Shop/UnderCategoriesList.jsx";
import ProductsList from "./components/Shop/ProductsList.jsx";
import SingleProduct from "./components/Shop/SingleProduct.jsx";
import Basket from "./components/Basket/Basket.jsx";
import Error from "./components/Error/Error.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return(
        <div className="app">
            <Header />
            <MenuBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={LoginArea} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/shop/:type" component={CategoriesList} />
                <Route exact path="/shop/:type/:category" component={UnderCategoriesList} />
                <Route exact path="/shop/:type/:category/:underCategory" component={ProductsList} />
                <Route exact path="/shop/:type/:category/:underCategory/:id" component={SingleProduct} />
                <Route path="/account" component={Account} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/checkout" component={Basket} />
                <Route path="/managment-area" component={ManagmentArea} />
                <Route component={Error} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;