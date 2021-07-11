import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import MenuBar from "../MenuBar.jsx";

afterEach(cleanup);

test("The component renders properly", () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <MenuBar />
            </Router>
        </Provider>
    );

    const container = getByTestId("menuBarContainer");

    expect(container.className).toContain("menuBarContainer");
});