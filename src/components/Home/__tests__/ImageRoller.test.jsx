import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import ImageRoller from "../ImageRoller.jsx";

afterEach(cleanup);

let container;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <ImageRoller />
            </Router>
        </Provider>
    );

    container = getByTestId("imageRollerContainer");
});

test("Container renders correctly", () => {
    expect(container.className).toContain("imageRollerContainer");
});