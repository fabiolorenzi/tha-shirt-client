import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import Shop from "../Shop.jsx";

afterEach(cleanup);

let container, body, title, logo, searchBar, shopList;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <Shop />
            </Router>
        </Provider>
    );

    container = getByTestId("shopContainer");
    body = getByTestId("shopBody");
    title = getByTestId("shopTitle");
    logo = getByTestId("shopLogo");
    searchBar = getByTestId("searchBar");
    shopList = getByTestId("shopList");
});

test("Container renders correctly", () => {
    expect(container.className).toContain("shopContainer");
});

test("Body renders correctly", () => {
    expect(body.className).toContain("shopBody");
});

test("Title renders correctly", () => {
    expect(title.textContent).toBe("Shop");
});

test("Logo div renders correctly", () => {
    expect(logo.className).toContain("shopLogo");
});

test("Search bar renders correctly", () => {
    expect(searchBar.className).toContain("searchBar");
});

test("Shop list renders correctly", () => {
    expect(shopList.className).toContain("shopList");
});