import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../Home.jsx";

afterEach(cleanup);

let container, body, fTitle, fUndertitle, homeLeft, homeRight, rightTitle, rightUndertitle;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <Home />
            </Router>
        </Provider>
    );

    container = getByTestId("homeContainer");
    body = getByTestId("homeBody");
    fTitle = getByTestId("fTitle");
    fUndertitle = getByTestId("fUndertitle");
    homeLeft = getByTestId("homeLeft");
    homeRight = getByTestId("homeRight");
    rightTitle = getByTestId("rightTitle");
    rightUndertitle = getByTestId("rightUndertitle");
});

test("Container renders correctly", () => {
    expect(container.className).toContain("homeContainer");
});

test("Body renders correctly", () => {
    expect(body.className).toContain("homeBody");
});

test("First title renders correctly", () => {
    expect(fTitle.textContent).toBe("Welcome to THA-SHIRT!")
});

test("First undertitle renders correctly", () => {
    expect(fUndertitle.textContent).toBe("The e-commerce for the right clothes!");
});

test("Left container renders correctly", () => {
    expect(homeLeft.className).toContain("homeLeft");
});

test("Right container renders correctly", () => {
    expect(homeRight.className).toContain("homeRight");
});

test("Title in right container renders properly", () => {
    expect(rightTitle.textContent).toBe("HOME");
});

test("Undertitle in right container renders properly", () => {
    expect(rightUndertitle.textContent).toBe("Welcome");
});