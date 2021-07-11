import React from "react";
import "./stylesheets/CurrencySelection.css";

function CurrencySelection() {
    const currencySel = e => {
        e.preventDefault();
        localStorage.setItem("currency", e.target.value);
        window.location.reload();
    };

    return(
        <div className="currencySelectionContainer" data-testid="currencySelectionContainer">
            <select
                className="currencySelector"
                data-testid="selector"
                defaultValue={localStorage.getItem("currency") ? localStorage.getItem("currency") : "£"}
                onChange={currencySel}
            >
                <option data-testid="option1" val="£">£</option>
                <option data-testid="option2" val="€">€</option>
                <option data-testid="option3" val="$">$</option>
            </select>
        </div>
    );
};

export default CurrencySelection;