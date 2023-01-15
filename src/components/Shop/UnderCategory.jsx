import React, { useEffect, useState } from "react";
import axios from "axios";

import "./stylesheets/UnderCategory.css";

function UnderCategory({typeKey, catKey, undCatKey}) {
    const [image, setImage] = useState("");

    useEffect(() => {
        axios.get("http://thashirtbackend.hopto.org/api/products/")
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].type === typeKey && res.data[i].category === catKey && res.data[i].underCategory === undCatKey) {
                        setImage(res.data[i].image);
                        break;
                    }
                };
            })
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="undCatContainer">
            <img src={"data:image/png;base64," + image} alt="category" />
            <h2>{undCatKey}</h2>
        </div>
    );
};

export default UnderCategory;