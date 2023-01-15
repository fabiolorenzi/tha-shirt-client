import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

import "./stylesheets/ProductsList.css";
import Product from "./Product.jsx";

function ProductsList(props) {
    const [prodRendered, setProdRendered] = useState();
    let prodType = "";
    let prodCat = "";
    let prodUndCat = "";
    const [titleType, setTitleType] = useState("");
    let products = [];

    const burgerState = useSelector(state => state.burgerButtonState);

    const openBurger = burgerState ? "openUCL" : "";

    function compiler() {
        const html = products.map(prod => {
            return(
                <div>
                    <Link to={`/shop/${props.match.params.type}/${props.match.params.category}/${props.match.params.underCategory}/${prod._id}`}>
                        <Product typeKey={prodType} catKey={prodCat} undCatKey={prodUndCat} id={prod._id} />
                    </Link>
                </div>
            );
        });
        setProdRendered(html);
    };

    useEffect(() => {      
        axios.get("http://thashirtbackend.hopto.org/api/products/")
            .then((res) => {
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].type.toLowerCase() === props.match.params.type
                        && res.data[i].category.toLowerCase() === props.match.params.category
                        && res.data[i].underCategory.toLowerCase() === props.match.params.underCategory
                        && !products.includes(res.data[i]._id))
                    {
                        products.push(res.data[i]);
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        prodType = res.data[i].type;
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        prodCat = res.data[i].category;
                        // eslint-disable-next-line react-hooks/exhaustive-deps
                        prodUndCat = res.data[i].underCategory;
                    }
                }
                compiler();
                setTitleType(prodUndCat);
            })
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="plContainer" id={openBurger}>
            <Link to={`/shop/${props.match.params.type}/${props.match.params.category}`}><button data-testid="buttonReturn">Back</button></Link>
            <h1>{titleType}</h1>
            <div className="plBody">
                {prodRendered}
            </div>
        </div>
    );
};

export default ProductsList;