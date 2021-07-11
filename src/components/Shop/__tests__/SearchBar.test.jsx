import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "../SearchBar.jsx";

afterEach(cleanup);

let container, search, cancel;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <SearchBar />
            </Router>
        </Provider>
    );

    container = getByTestId("SBContainer");
    search = getByTestId("SBSearch");
    cancel = getByTestId("SBCancel");
});

test("Container renders properly", () => {
    expect(container.className).toContain("SBContainer");
});

test("Search button renders properly", () => {
    expect(search.textContent).toBe("Search");
});

test("Cancel button renders properly", () => {
    expect(cancel.textContent).toBe("Cancel");
});