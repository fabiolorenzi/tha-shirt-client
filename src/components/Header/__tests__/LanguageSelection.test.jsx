import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import LanguageSelection from "../LanguageSelection.jsx";

let container, selector, option1, option2;

afterEach(cleanup);

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <LanguageSelection />
            </Router>
        </Provider>
    );
    container = getByTestId("languageSelectionContainer");
    selector = getByTestId("selector");
    option1 = getByTestId("option1");
    option2 = getByTestId("option2");
});

test("Container renders properly", () => {
    expect(container.className).toContain("languageSelectionContainer");
});

test("Selector renders properly", () => {
    expect(selector.className).toContain("languageSelector");
});

test("Option1 renders properly", () => {
    expect(option1.textContent).toBe("English");
});

test("Option2 renders properly", () => {
    expect(option2.textContent).toBe("Italiano");
});

test("Selector works properly", () => {
    expect(selector.value).toBe("en");

    fireEvent.change(selector, {
        target: {
            value: "it"
        }
    });

    expect(selector.value).toBe("it");

    fireEvent.change(selector, {
        target: {
            value: "en"
        }
    });

    expect(selector.value).toBe("en");
});