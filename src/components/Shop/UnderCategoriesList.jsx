import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

import "./stylesheets/UnderCategoriesList.css";
import UnderCategory from "./UnderCategory.jsx";

function UnderCategoriesList(props) {
    const [undCatRendered, setUndCatRendered] = useState();
    let undCatType = "";
    let undCatCat = "";
    const [titleType, setTitleType] = useState("");
    let undCats = [];

    const burgerState = useSelector(state => state.burgerButtonState);

    const openBurger = burgerState ? "openUCL" : "";

    function compiler() {
        const html = undCats.map(underCategory => {
            return(
                <div>
                    <Link to={`/shop/${props.match.params.type}/${props.match.params.category}/${underCategory.toLowerCase()}`}>
                        <UnderCategory typeKey={undCatType} catKey={undCatCat} undCatKey={underCategory} />
                    </Link>
                </div>
            );
        });
        setUndCatRendered(html);
    };

    useEffect(() => {      
        axios.get("https://thashirtbackend.hopto.org/api/products/")
            .then((res) => {
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].type.toLowerCase() === props.match.params.type
                        && res.data[i].category.toLowerCase() === props.match.params.category
                        && !undCats.includes(res.data[i].underCategory))
                    {
                        undCats.push(res.data[i].underCategory);
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        undCatType = res.data[i].type;
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        undCatCat = res.data[i].category;
                    }
                }
                compiler();
                setTitleType(undCatCat);
            })
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="uclContainer" data-testid="uclContainer" id={openBurger}>
            <Link to={`/shop/${props.match.params.type}`}><button data-testid="buttonReturn">Back</button></Link>
            <h1 data-testid="uclTitle">Our {titleType.slice(-1) === "s" || titleType === "Music" ? titleType : titleType + "s"}</h1>
            <div className="uclBody" data-testid="uclBody">
                {undCatRendered}
            </div>
        </div>
    );
};

export default UnderCategoriesList;