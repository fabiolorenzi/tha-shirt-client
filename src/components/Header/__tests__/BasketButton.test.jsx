import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import BasketButton from "../BasketButton.jsx";

afterEach(cleanup);

let container, button, counter;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <BasketButton />
            </Router>
        </Provider>
    );

    container = getByTestId("basketButtonContainer");
    button = getByTestId("basket_button");
    counter = getByTestId("itemCounter");
});

test("Container renders correctly", () => {
    expect(container.className).toContain("basketButtonContainer");
});

test("Button renders properly", () => {
    expect(button.className).toContain("basket_button");
});

test("Items counter renders correctly", () => {
    expect(counter.textContent).toBe("0");
});