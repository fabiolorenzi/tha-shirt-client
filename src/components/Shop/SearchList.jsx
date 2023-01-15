import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

import "./stylesheets/SearchList.css";
import SearchedProd from "./SearchedProd.jsx";

function SearchList() {
    const searchWord = useSelector(state => state.searchWord);

    const [listItems, setListItems] = useState([]);
    const [searchProd, setSearchProd] = useState([]);

    function compiler() {
        const html = listItems.map(prod => {
            return(
                <div>
                    <Link to={`/shop/${prod.type}/${prod.category}/${prod.underCategory}/${prod._id}`}>
                        <SearchedProd prod={prod} />
                    </Link>
                </div>
            );
        });
        setSearchProd(html);
    };

    useEffect(() => {
        axios.get("http://thashirtbackend.hopto.org/api/products")
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    if (((res.data[i].name).toLowerCase()).includes(searchWord)) {
                        let temp = listItems;
                        temp.push(res.data[i]);
                        setListItems(temp);
                    };
                };
                compiler();
            })
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className="searchListContainer">
            <h1>You searched: {searchWord}</h1>
            <div>{searchProd}</div>
        </div>
    );
};

export default SearchList;