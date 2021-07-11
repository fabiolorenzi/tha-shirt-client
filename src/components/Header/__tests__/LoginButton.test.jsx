import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LoginButton from "../LoginButton.jsx";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

let container, button, username;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <LoginButton />
            </Router>
        </Provider>
    );
    container = getByTestId("loginButtonContainer");
    button = getByTestId("button");
    username = getByTestId("username");
});

test("Container renders successfully", () => {
    expect(container.className).toBe("loginButtonContainer");
});

test("Button will render properly", () => {
    expect(button.className).toContain("login_button");
});

test("Username renders correctly", () => {
    expect(username.textContent).toBe("Not Logged");
});