import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import ShopList from "../ShopList.jsx";

afterEach(cleanup);

let container, title, body;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <ShopList />
            </Router>
        </Provider>
    );

    container = getByTestId("slContainer");
    title = getByTestId("slTitle");
    body = getByTestId("slBody");
});

test("Container renders properly", () => {
    expect(container.className).toContain("slContainer");
});

test("Title renders properly", () => {
    expect(title.textContent).toBe("Clothes types");
});

test("Body renders properly", () => {
    expect(body.className).toContain("slBody");
});