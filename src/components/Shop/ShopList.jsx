import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./stylesheets/ShopList.css";
import Type from "./Type.jsx";

function ShopList() {
    const [typesRendered, setTypesRendered] = useState();
    let types = [];

    function compiler() {
        const html = types.map(type => {
            return <div><Link to={`/shop/${type.toLowerCase()}`}><Type typeKey={type} /></Link></div>
        });
        setTypesRendered(html);
    };

    useEffect(() => {
        axios.get("https://tha-shirt-server.herokuapp.com/api/products/")
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    if (!types.includes(res.data[i].type)) {
                        types.push(res.data[i].type);
                    }
                }
                compiler();
            })
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="slContainer" data-testid="slContainer">
            <h1 data-testid="slTitle">Clothes types</h1>
            <div className="slBody" data-testid="slBody">
                {typesRendered}
            </div>
        </div>
    );
};

export default ShopList