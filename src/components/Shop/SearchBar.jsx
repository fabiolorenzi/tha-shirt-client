import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { searcher } from "../../redux/actions/searcherAction.js";
import { searchWord } from "../../redux/actions/searchWordAction.js";
import "./stylesheets/SearchBar.css";

function SearchBar() {
    const dispatch = useDispatch();

    const [search, setSearch] = useState("");
    const [prods, setProds] = useState([]);

    useEffect(() => {
        axios.get("https://tha-shirt-server.herokuapp.com/api/products/")
            .then(res => setProds(res.data))
            .catch(err => alert("Not possible to search now. Please retry later."));
    }, []);

    function handleChange(e) {
        e.preventDefault();
        setSearch(e.target.value);
    };

    let searchedProd = [];

    function searchItems(e) {
        e.preventDefault();
        dispatch(searcher(true));
        dispatch(searchWord(search));
        searchedProd = [];
        prods.forEach(prod => {
            if (prod.name.toLowerCase().includes(search.toLowerCase())) {
                searchedProd.push(prod);
            }
        });
    };

    const emptySearch = e => {
        e.preventDefault();
        dispatch(searcher(false));
        dispatch(searchWord(""));
        setSearch("");
    };

    return(
        <div className="SBContainer" data-testid="SBContainer">
            <div>
                <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    value={search}
                    onChange={handleChange}
                />
                <button onClick={searchItems} id="sbSearch" data-testid="SBSearch">Search</button>
                <button onClick={emptySearch} id="sbCancel" data-testid="SBCancel">Cancel</button>
            </div>
        </div>
    );
};

export default SearchBar;