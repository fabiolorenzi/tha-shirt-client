import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import CategoriesList from "../CategoriesList.jsx";

afterEach(cleanup);

let container, body;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <CategoriesList />
            </Router>
        </Provider>
    );

    container = getByTestId("clContainer");
    body = getByTestId("clBody");
});

test("Container renders properly", () => {
    expect(container.className).toContain("clContainer");
});

test("Body renders properly", () => {
    expect(body.className).toContain("clBody");
});