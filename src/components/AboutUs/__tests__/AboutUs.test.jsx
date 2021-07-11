import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import AboutUs from "../AboutUs.jsx";

afterEach(cleanup);

let container, body, title, leftDiv, rightDiv, text, underDiv;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <AboutUs />
            </Router>
        </Provider>
    );

    container = getByTestId("aboutUsContainer");
    body = getByTestId("aboutUsBody");
    title = getByTestId("aboutUsTitle");
    leftDiv = getByTestId("aboutUsLeft");
    rightDiv = getByTestId("aboutUsRight");
    text = getByTestId("aboutUsRightText");
    underDiv = getByTestId("aboutUsUnderBody");
});

test("Container renders correctly", () => {
    expect(container.className).toContain("aboutUsContainer");
});

test("Body renders correctly", () => {
    expect(body.className).toContain("aboutUsBody");
});

test("Title renders correctly", () => {
    expect(title.textContent).toBe("About Us");
});

test("Left div renders correctly", () => {
    expect(leftDiv.className).toContain("aboutUsLeft");
});

test("Right div renders correctly", () => {
    expect(rightDiv.className).toContain("aboutUsRight");
});

test("Text renders correctly", () => {
    expect(text.textContent).toContain("Tha Shirt was born in 2021");
});

test("Under div renders correctly", () => {
    expect(underDiv.className).toContain("aboutUsUnderBody");
});