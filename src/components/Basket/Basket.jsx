import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./stylesheets/Basket.css";

function Basket() {
    const burgerState = useSelector(state => state.burgerButtonState);
    const history = useHistory();

    const [products, setProducts] = useState([]);
    const [bill, setBill] = useState("");
    const [basketList, setBasketList] = useState([]);

    function compiler() {
        const html = products.map(product => {
            return(
                <div className="basketLine">
                    <div className="basketImg">
                        <img src={"data:image/png;base64," + product[4]} alt="product" />
                    </div>
                    <div>
                        <h3>{product[2]}</h3>
                    </div>
                    <div>
                        <h3>{product[3]}{localStorage.getItem("currency")} * {product[1]}</h3>
                    </div>
                    <div className="basketBtn">
                        <button onClick={e => cancelItem(e, product[0])}>Remove</button>
                    </div>
                </div>
            );
        });
        setBasketList(html);
    };

    let temp = useRef();

    useEffect(() => {
        temp.current = (JSON.parse(localStorage.getItem("basket")));
        if (localStorage.getItem("currency") === "€") {
            for (let i = 0; i < temp.current.length; i++) {
                temp.current[i][3] = (temp.current[i][3] * 1.16).toFixed(2);
            };
        } else if (localStorage.getItem("currency") === "$") {
            for (let i = 0; i < temp.current.length; i++) {
                temp.current[i][3] = (temp.current[i][3] * 1.38).toFixed(2);
            };       
        };
        setProducts(temp.current);
    }, []);

    useEffect(() => {
        compiler();
        let tot = 0;
        for (let i = 0; i < products.length; i++) {
            tot += (parseFloat(products[i][3]) * parseInt(products[i][1]));
        };
        setBill(tot.toFixed(2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);
    
    const cancelItem = (e, id) => {
        e.preventDefault();
        let temp = products;
        for (let i = 0; i < temp.length; i++) {
            if (temp[i][0] === id) {
                temp.splice(i, 1);
                setProducts(temp);
            };
        };
        alert("Item removed from basket.");
        localStorage.setItem("basket", JSON.stringify(temp));
        window.location.reload();
    };

    const pay = e => {
        e.preventDefault();
        alert("Thank you for have chosen us!");
        history.push("/");
        localStorage.removeItem("basket");
        window.location.reload();
    };

    const openBurger = burgerState ? "openBasket" : "";

    return(
        <div className="basketContainer" id={openBurger}>
            <h1>Checkout</h1>
            <div className="basketList">
                {basketList}
            </div>
            <div className="lastPartBasket">
                <h1>Total: {bill}{localStorage.getItem("currency")}</h1>
                <button onClick={pay}>Pay</button>
            </div>
        </div>
    );
};

export default Basket;