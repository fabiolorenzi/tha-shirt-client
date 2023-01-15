import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./stylesheets/SingleProduct.css";

function SingleProduct(props) {

    //--------------------STATES--------------------

    const history = useHistory();
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
        image: "",
        id: ""
    });
    const [price, setPrice] = useState("");
    const [counter, setCounter] = useState(1);

    const burgerState = useSelector(state => state.burgerButtonState);

    const openBurger = burgerState ? "openSingleProduct" : "";

    const passMan = localStorage.getItem("pass") ? "" : "passMan";

    const [newProd, setNewProd] = useState({
        name: product.name,
        type: product.type,
        category: product.category,
        underCategory: product.underCategory,
        colour: product.colour,
        description: product.description,
        price: product.price
    });

    //--------------------FUNCTIONS--------------------

    useEffect(() => {
        axios.get("http://thashirtbackend.hopto.org/api/products/" + props.match.params.id)
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
                image: res.data.image,
                id: res.data._id
            }))
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (localStorage.getItem("currency") === "£") {
            setPrice(product.price + "£");
        } else if (localStorage.getItem("currency") === "$") {
            setPrice((parseInt(product.price) * 1.38) + "$");
        } else if (localStorage.getItem("currency") === "€") {
            setPrice((parseInt(product.price) * 1.16) + "€");
        } else {
            setPrice(product.price + "£");
        };
        setNewProd({
            name: product.name,
            type: product.type,
            category: product.category,
            underCategory: product.underCategory,
            colour: product.colour,
            description: product.description,
            price: product.price
        });
    }, [product]);

    function handleChange(e) {
        e.preventDefault();
        setCounter(e.target.value);
    };

    function insertProduct(e) {
        e.preventDefault();
        if (localStorage.getItem("logged")) {
            let couple = [product.id, counter, product.name, product.price, product.image];
            let basket = JSON.parse(localStorage.getItem("basket")) || [];
            let temp = 0;
            for (let i = 0; i < basket.length; i++) {
                if (basket[i][0] === product.id) {
                    basket[i][1] = counter;
                    temp++;
                    break;
                }
            };
            if (temp === 0) {
                basket.push(couple);
            };
            localStorage.setItem("basket", JSON.stringify(basket));
            alert("Item added to the basket!");
            history.push(`/shop/${props.match.params.type}/${props.match.params.category}/${props.match.params.underCategory}`);
        } else {
            history.push("/login");
        };
    };

    function reloader(e) {
        insertProduct(e)
        window.location.reload();
    };

    function removeItem(e) {
        e.preventDefault();
        axios.delete("http://thashirtbackend.hopto.org/api/products/" + props.match.params.id)
            .then(res => {
                alert("Item removed successfully.");
                history.push(`/shop/${props.match.params.type}/${props.match.params.category}/${props.match.params.underCategory}`);
                window.location.reload();
            })
            .catch(err => console.log(err));
    };

    const newProdChange = e => {
        e.preventDefault();
        setNewProd({...newProd, [e.target.name]: e.target.value});
    };

    const modifyItem = e => {
        e.preventDefault();
        const data = {
            name: newProd.name,
            type: newProd.type,
            category: newProd.category,
            underCategory: newProd.underCategory,
            colour: newProd.colour,
            description: newProd.description,
            price: newProd.price,
            published_date: product.published_date,
            update_date: new Date(),
            image: product.image,
        };
        axios.put("http://thashirtbackend.hopto.org/api/products/" + props.match.params.id, data)
            .then(res => {
                alert("Data updated successfully!");
                window.location.reload();
            })
            .catch(err => alert("Not possible to update the data. Please try again."));
    };

    //--------------------RETURN--------------------

    return(
        <div className="singleProdContainer" id={openBurger}>
            <Link to={`/shop/${props.match.params.type}/${props.match.params.category}/${props.match.params.underCategory}`}><button data-testid="buttonReturn">Back</button></Link>
            <div className="singleProdBody">
                <h1>{product.name}</h1>
                <div className="singleProdFirstPart">
                    <div className="singleProdImage">
                        <img src={`data:image/png;base64,` + product.image} alt="product" />
                    </div>
                    <div className="singleProdBuy">
                        <div>
                            <h2>Price: {price}</h2>
                            <label htmlFor="counter">Number Items:</label>
                            <input type="number" name="counter" min="1" max="100" value={counter} onChange={handleChange} />
                            <button className="insertButton" onClick={reloader}>Add to basket</button>
                        </div>
                    </div>
                </div>
                <div className="singleProdSecondPart">
                    <div className="singleProdDescription">
                        <p>{product.description}</p>
                    </div>
                    <div className="singleProdInfo">
                        <h3>Name: {product.name}</h3>
                        <h3>Type: {product.type}</h3>
                        <h3>Category: {product.underCategory} {product.category}</h3>
                        <h3>Colour: {product.colour}</h3>
                    </div>
                    <div className={passMan} id="spReservedArea">
                        <div>
                            <form onSubmit={modifyItem}>
                                <div>
                                    <label htmlFor="name" data-testid="createProdLabelName">Name</label>
                                    <input type="text" name="name" value={newProd.name} onChange={newProdChange} />
                                </div>
                                <div>
                                    <label htmlFor="type">Type</label>
                                    <input type="text" name="type" value={newProd.type} onChange={newProdChange} />
                                </div>
                                <div>
                                    <label htmlFor="category">Category</label>
                                    <input type="text" name="category" value={newProd.category} onChange={newProdChange} />
                                </div>
                                <div>
                                    <label htmlFor="underCategory">UnderCategory</label>
                                    <input type="text" name="underCategory" value={newProd.underCategory} onChange={newProdChange} />
                                </div>
                                <div>
                                    <label htmlFor="colour">Colour</label>
                                    <input type="text" name="colour" value={newProd.colour} onChange={newProdChange} />
                                </div>
                                <div className="descriptionDiv">
                                    <label htmlFor="descrition">Description</label>
                                    <textarea name="description" value={newProd.description} className="descriptionArea" onChange={newProdChange} />
                                </div>
                                <div>
                                    <label htmlFor="price">Price</label>
                                    <input type="text" name="price" value={newProd.price} onChange={newProdChange} />
                                </div>
                                <button id="modifyBtn" type="submit">Modify</button>
                                <button id="removeBtn" onClick={removeItem}>Remove</button>  
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;