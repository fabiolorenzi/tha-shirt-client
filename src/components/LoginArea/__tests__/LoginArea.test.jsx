import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import LoginArea from "../LoginArea.jsx";

afterEach(cleanup);

let container, title, loginDiv, createAccountDiv;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <LoginArea />
            </Router>
        </Provider>
    );
    container = getByTestId("loginAreaContainer");
    title = getByTestId("loginAreaTitle");
    loginDiv = getByTestId("loginAreaLoginDiv")
    createAccountDiv = getByTestId("loginAreaCreateAccountDiv");
});

test("The container renders correctly", () => {
    expect(container.className).toContain("loginAreaContainer");
});

test("The title renders properly", () => {
    expect(title.textContent).toBe("Login Area");
});

test("The login div renders successfully", () => {
    expect(loginDiv.className).toContain("login");
});

test("The create account div renders successfully", () => {
    expect(createAccountDiv.className).toContain("createAccount");
});