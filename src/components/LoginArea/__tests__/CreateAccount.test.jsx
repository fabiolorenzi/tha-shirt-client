import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import CreateAccount from "../CreateAccount.jsx";

afterEach(cleanup);

let container, title, labelName, labelSurname, labelUsername, labelBirthday, labelGender, labelNation, labelCity,
    labelStreet, labelNumber, labelPostalcode, labelTel, labelEmail, labelPassword, buttonShow, buttonSubmit;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <CreateAccount />
            </Router>
        </Provider>
    );

    container = getByTestId("createAccountContainer");
    title = getByTestId("createAccountTitle");
    labelName = getByTestId("createAccountLabelName");
    labelSurname = getByTestId("createAccountLabelSurname");
    labelUsername = getByTestId("createAccountLabelUsername");
    labelBirthday = getByTestId("createAccountLabelBirthday");
    labelGender = getByTestId("createAccountLabelGender");
    labelNation = getByTestId("createAccountLabelNation");
    labelCity = getByTestId("createAccountLabelCity");
    labelStreet = getByTestId("createAccountLabelStreet");
    labelNumber = getByTestId("createAccountLabelNumber");
    labelPostalcode = getByTestId("createAccountLabelPostal_code");
    labelTel = getByTestId("createAccountLabelTel");
    labelEmail = getByTestId("createAccountLabelEmail");
    labelPassword = getByTestId("createAccountLabelPassword");
    buttonShow = getByTestId("createAccountButtonShow");
    buttonSubmit = getByTestId("createAccountButtonSubmit");
});

test("Container renders correctly", () => {
    expect(container.className).toContain("createAccountContainer");
});

test("Title renders correctly", () => {
    expect(title.textContent).toBe("Create account");
});

test("Label name renders correctly", () => {
    expect(labelName.textContent).toBe("Name");
});

test("Label surname renders correctly", () => {
    expect(labelSurname.textContent).toBe("Surname");
});

test("Label username renders correctly", () => {
    expect(labelUsername.textContent).toBe("Username");
});

test("Label birthday renders correctly", () => {
    expect(labelBirthday.textContent).toBe("Birthday");
});

test("Label gender renders correctly", () => {
    expect(labelGender.textContent).toBe("Gender");
});

test("Label nation renders correctly", () => {
    expect(labelNation.textContent).toBe("Nation");
});

test("Label city renders correctly", () => {
    expect(labelCity.textContent).toBe("City");
});

test("Label street renders correctly", () => {
    expect(labelStreet.textContent).toBe("Street");
});

test("Label number renders correctly", () => {
    expect(labelNumber.textContent).toBe("Number");
});

test("Label postal code renders correctly", () => {
    expect(labelPostalcode.textContent).toBe("Postal Code");
});

test("Label telephone renders correctly", () => {
    expect(labelTel.textContent).toBe("Tel");
});

test("Label email renders correctly", () => {
    expect(labelEmail.textContent).toBe("Email");
});

test("Label password renders correctly", () => {
    expect(labelPassword.textContent).toBe("Password");
});

test("Button to show the password renders correctly", () => {
    expect(buttonShow.textContent).toBe("Show");
});

test("Button to submit new account renders correctly", () => {
    expect(buttonSubmit.textContent).toBe("Send");
});