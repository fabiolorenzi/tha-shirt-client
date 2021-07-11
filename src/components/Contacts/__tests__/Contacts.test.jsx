import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import Contacts from "../Contacts.jsx";

afterEach(cleanup);

let container, body, title, leftDiv, rightDiv, rightTitle, underDiv;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <Contacts />
            </Router>
        </Provider>
    );

    container = getByTestId("contactsContainer");
    body = getByTestId("contactsBody");
    title = getByTestId("contactsTitle");
    leftDiv = getByTestId("contactsLeft");
    rightDiv = getByTestId("contactsRight");
    rightTitle = getByTestId("contactsRightTitle");
    underDiv = getByTestId("contactsLinks");
});

test("Container renders correctly", () => {
    expect(container.className).toContain("contactsContainer");
});

test("Body renders correctly", () => {
    expect(body.className).toContain("contactsBody");
});

test("Title renders correctly", () => {
    expect(title.textContent).toBe("Contacts");
});

test("Left div renders correctly", () => {
    expect(leftDiv.className).toContain("contactsLeft");
});

test("Right div renders correctly", () => {
    expect(rightDiv.className).toContain("contactsRight");
});

test("Title in the right div renders correctly", () => {
    expect(rightTitle.textContent).toBe("Contact us on:");
});

test("Links div renders correctly", () => {
    expect(underDiv.className).toContain("contactsLinks");
});