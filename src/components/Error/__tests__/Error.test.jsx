import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import Error from "../Error.jsx";

afterEach(cleanup);

let container, body, title, leftDiv, rightDiv, rightTitle, rightUnderTitle;

beforeEach(() => {
    const  { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <Error />
            </Router>
        </Provider>
    );

    container = getByTestId("errorContainer");
    body = getByTestId("errorBody");
    title = getByTestId("errorTitle");
    leftDiv = getByTestId("errorLeft");
    rightDiv = getByTestId("errorRight");
    rightTitle = getByTestId("errorRightTitle");
    rightUnderTitle = getByTestId("errorRightUndertitle");
});

test("Container renders correctly", () => {
    expect(container.className).toContain("errorContainer");
});

test("Body renders correctly", () => {
    expect(body.className).toContain("errorBody");
});

test("Title renders correctly", () => {
    expect(title.textContent).toBe("ERROR");
});

test("Left div renders correctly", () => {
    expect(leftDiv.className).toContain("errorLeft");
});

test("Right div renders correctly", () => {
    expect(rightDiv.className).toContain("errorRight");
});

test("Right title renders correctly", () => {
    expect(rightTitle.textContent).toBe("ERROR");
});

test("Right undertitle renders correctly", () => {
    expect(rightUnderTitle.textContent).toContain("Please return");
});