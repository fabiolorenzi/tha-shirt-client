import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../../redux/store.js";
import HiddenMenu from "../HiddenMenu.jsx";

afterEach(cleanup);

let container, link1, link2, link3, link4, link5;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <HiddenMenu />
            </Router>
        </Provider>
    );

    container = getByTestId("hiddenMenuContainer");
    link1 = getByTestId("link1");
    link2 = getByTestId("link2");
    link3 = getByTestId("link3");
    link4 = getByTestId("link4");
    link5 = getByTestId("link5");
});

test("Container renders correctly", () => {
    expect(container.className).toContain("hiddenMenuContainer");
});

test("Link 1 renders correctly", () => {
    expect(link1.textContent).toBe("HOME");
});

test("Link 2 renders correctly", () => {
    expect(link2.textContent).toBe("SHOP");
});

test("Link 3 renders correctly", () => {
    expect(link3.textContent).toBe("ABOUT US");
});

test("Link 4 renders correctly", () => {
    expect(link4.textContent).toBe("CONTACTS");
});

test("Link 5 renders correctly", () => {
    expect(link5.textContent).toBe("MANAGMENT");
});