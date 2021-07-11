import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import BurgerButton from "../BurgerButton.jsx";

afterEach(cleanup);

let button, fLine, sLine, tLine;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <BurgerButton />
            </Router>
        </Provider>
    );

    button = getByTestId("burgerButton");
    fLine = getByTestId("fBurgerLine");
    sLine = getByTestId("sBurgerLine");
    tLine = getByTestId("tBurgerLine");
});

test("Button renders properly", () => {
    expect(button.className).toContain("burgerButton");
});

test("First line renders properly", () => {
    expect(fLine.className).toContain("burgerLine")
});

test("Second line renders properly", () => {
    expect(sLine.className).toContain("burgerLine")
});

test("Third line renders properly", () => {
    expect(tLine.className).toContain("burgerLine")
});

test("Button works correctly", () => {
    expect(button.id).toBe("burgerClosed");

    fireEvent.click(button);

    expect(button.id).toBe("burgerOpen");

    fireEvent.click(button);

    expect(button.id).toBe("burgerClosed");
});