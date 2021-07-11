import React from "react";
import "./stylesheets/LanguageSelection.css";

function LanguageSelection() {
    const langSel = e => {
        e.preventDefault();
        localStorage.setItem("lang", e.target.value);
        window.location.reload();
    };

    return(
        <div className="languageSelectionContainer" data-testid="languageSelectionContainer">
            <select
                onChange={langSel}
                className="languageSelector"
                data-testid="selector"
                defaultValue={localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"}
            >
                <option data-testid="option1" value="en">English</option>
                <option data-testid="option2" value="it">Italiano</option>
            </select>
        </div>
    );
};

export default LanguageSelection;