import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import basketIcon from "../../img/basket-icon.png";
import "./stylesheets/BasketButton.css";

function BasketButton() {
    const [itemCounter, setItemCounter] = useState(0);
    const position = JSON.parse(localStorage.getItem("basket"));

    useEffect(() => {
        if (localStorage.getItem("basket")) {
            let tot = 0;
            for (let i = 0; i < position.length; i++) {
                tot += parseInt(position[i][1]);
            };
            setItemCounter(tot);
        };
    }, [position]);

    return(
        <div className="basketButtonContainer" data-testid="basketButtonContainer">
            {localStorage.getItem("basket")
                ?
                    <Link to="/checkout">
                        <div className="basket_button" data-testid="basket_button">
                            <h3 data-testid="itemCounter">{itemCounter}</h3>
                            <img src={basketIcon} alt="basket icon" />
                        </div>
                    </Link>
                :   
                    <Link onClick={() => alert("The basket is still empty. Please add some items to it.")}>
                        <div className="basket_button" data-testid="basket_button">
                            <h3 data-testid="itemCounter">{itemCounter}</h3>
                            <img src={basketIcon} alt="basket icon" />
                        </div>
                    </Link>
            }
        </div>
    );
};

export default BasketButton;