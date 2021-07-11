import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import Account from "../Account.jsx";

afterEach(cleanup);

let container;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <Account />
            </Router>
        </Provider>
    );

    container = getByTestId("accountContainer");
});

test("Container renders correctly", () => {
    expect(container.className).toContain("accountContainer");
});