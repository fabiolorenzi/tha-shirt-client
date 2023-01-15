import React, { useEffect, useState } from "react";
import axios from "axios";

import "./stylesheets/Category.css";

function Category({typeKey, catKey}) {
    const [image, setImage] = useState("");

    useEffect(() => {
        axios.get("https://thashirtbackend.hopto.org/api/products/")
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].type === typeKey && res.data[i].category === catKey) {
                        setImage(res.data[i].image);
                        break;
                    }
                };
            })
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="catContainer" data-testid="catContainer">
            <img src={"data:image/png;base64," + image} alt="category" />
            <h2>{catKey.slice(-1) === "s" || catKey === "Music" ? catKey : catKey + "s"}</h2>
        </div>
    );
};

export default Category;