import React, { useEffect, useState } from "react";
import axios from "axios";

import "./stylesheets/Type.css";

function Type({typeKey}) {
    const [image, setImage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8082/api/products/")
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].type === typeKey) {
                        setImage(res.data[i].image);
                        break;
                    }
                };
            })
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="typeContainer" data-testid="typeContainer">
            <img src={"data:image/png;base64," + image} alt="type" />
            <h2>{typeKey.slice(-1) === "s" ? typeKey : typeKey + "s"}</h2>
        </div>
    );
};

export default Type;