import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../Footer.jsx";

afterEach(cleanup);

let container, text, rights;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <Footer />
            </Router>
        </Provider>
    );

    container = getByTestId("footerContainer");
    text = getByTestId("footerText");
    rights = getByTestId("footerRights");
});

test("Container renders correctly", () => {
    expect(container.className).toContain("footerContainer");
});

test("Text renders properly", () => {
    expect(text.textContent).toBe("Developed by F. Lorenzi");
});

test("The rights section renders correctly", () => {
    expect(rights.textContent).toBe("All rights reserved");
});