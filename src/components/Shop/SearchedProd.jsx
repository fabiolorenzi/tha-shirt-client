import React, { useEffect, useState } from "react";

import "./stylesheets/SearchedProd.css";

function SearchedProd({prod}) {
    const [product, setProduct] = useState([])

    useEffect(() => {
        setProduct(prod);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="sProdContainer">
            <img src={"data:image/png;base64," + product.image} alt="category" />
            <h2>{product.name}</h2>
        </div>
    );
};

export default SearchedProd;