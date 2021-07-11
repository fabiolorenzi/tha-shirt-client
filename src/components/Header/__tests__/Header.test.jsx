import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Header.jsx";

afterEach(cleanup);

test("The components renders successfully", () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <Header />
            </Router>
        </Provider>
    );

    const container = getByTestId("headerContainer");

    expect(container.className).toContain("header");
});