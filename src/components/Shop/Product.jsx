import React, { useEffect, useState } from "react";
import axios from "axios";

import "./stylesheets/Product.css";

function Product({typeKey, catKey, undCatKey, id}) {
    const [product, setProduct] = useState({
        name: "",
        type: "",
        category: "",
        underCategory: "",
        colour: "",
        description: "",
        price: "",
        published_date: "",
        update_date: "",
        image: ""
    });
    const [price, setPrice] = useState("");

    useEffect(() => {
        axios.get("https://tha-shirt-server.herokuapp.com/api/products/" + id)
            .then(res => setProduct({
                name: res.data.name,
                type: res.data.type,
                category: res.data.category,
                underCategory: res.data.underCategory,
                colour: res.data.colour,
                description: res.data.description,
                price: res.data.price,
                published_date: res.data.published_date,
                update_date: res.data.update_date,
                image: res.data.image
            }))
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (localStorage.getItem("currency" === "£")) {
            setPrice(product.price + "£");
        } else if (localStorage.getItem("currency") === "$") {
            setPrice(((parseInt(product.price) * 1.38).toFixed(2)) + "$");
        } else if (localStorage.getItem("currency") === "€") {
            setPrice(((parseInt(product.price) * 1.16).toFixed(2)) + "€");
        } else {
            setPrice(product.price + "£");
        };
    }, [product]);

    return(
        <div className="productContainer">
            <div>
                <div className="productLeft">
                    <img src={"data:image/png;base64," + product.image} alt="category" />
                </div>
                <div className="productRight">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h3>Price: {price}</h3>
                </div>
            </div>
        </div>
    );
};

export default Product;