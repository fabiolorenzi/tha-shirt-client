import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../Login.jsx";

afterEach(cleanup);

let container, title, labelEmail, labelPassword, buttonShow, buttonLogin;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <Login />
            </Router>
        </Provider>
    );

    container = getByTestId("loginContainer");
    title = getByTestId("loginTitle");
    labelEmail = getByTestId("loginLabelEmail");
    labelPassword = getByTestId("loginLabelPassword");
    buttonShow = getByTestId("loginButtonShow");
    buttonLogin = getByTestId("loginButtonLogin");
});

test("The container renders correctly", () => {
    expect(container.className).toContain("loginContainer");
});

test("The title renders correctly", () => {
    expect(title.textContent).toBe("Login");
});

test("The label of the email renders properly", () => {
    expect(labelEmail.textContent).toBe("Email");
});

test("The label of the password renders properly", () => {
    expect(labelPassword.textContent).toBe("Password");
});

test("The button to show the password renders correctly", () => {
    expect(buttonShow.textContent).toBe("Show");
});

test("The button to log in renders correctly", () => {
    expect(buttonLogin.textContent).toBe("Login");
});