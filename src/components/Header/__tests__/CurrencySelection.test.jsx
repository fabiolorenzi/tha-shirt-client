import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import CurrencySelection from "../CurrencySelection.jsx";

afterEach(cleanup);

let container, selector, option1, option2, option3;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <CurrencySelection />
            </Router>
        </Provider>
    );

    container = getByTestId("currencySelectionContainer");
    selector = getByTestId("selector");
    option1 = getByTestId("option1");
    option2 = getByTestId("option2");
    option3 = getByTestId("option3");
});

test("Container renders properly", () => {
    expect(container.className).toContain("currencySelectionContainer");
});

test("Selector renders properly", () => {
    expect(selector.className).toContain("currencySelector");
});

test("Option1 renders properly", () => {
    expect(option1.textContent).toBe("£");
});

test("Option2 renders properly", () => {
    expect(option2.textContent).toBe("€");
});

test("Option3 renders properly", () => {
    expect(option3.textContent).toBe("$");
});

test("The selector works correctly", () => {
    expect(selector.value).toBe("£");

    fireEvent.change(selector, {
        target: {
            value: "€"
        }
    });

    expect(selector.value).toBe("€");

    fireEvent.change(selector, {
        target: {
            value: "$"
        }
    });

    expect(selector.value).toBe("$");

    fireEvent.change(selector, {
        target: {
            value: "£"
        }
    });

    expect(selector.value).toBe("£");
});