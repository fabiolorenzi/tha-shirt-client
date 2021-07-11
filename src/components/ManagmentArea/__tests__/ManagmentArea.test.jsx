import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import ManagmentArea from "../ManagmentArea.jsx";

afterEach(cleanup);

let container, body, title, undertitle, createDiv, modDiv;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <ManagmentArea />
            </Router>
        </Provider>
    );

    container = getByTestId("manAreaContainer");
    body = getByTestId("manAreaBody");
    title = getByTestId("manAreaTitle");
    undertitle = getByTestId("manAreaUndertitle");
    createDiv = getByTestId("createProdDiv");
    modDiv = getByTestId("modifyProdDiv");
});

test("Container renders correctly", () => {
    expect(container.className).toContain("manAreaContainer");
});

test("Body renders correctly", () => {
    expect(body.className).toContain("manAreaBody");
});

test("Title renders correctly", () => {
    expect(title.textContent).toBe("Managment Area");
});

test("Undertitle renders correctly", () => {
    expect(undertitle.textContent).toBe("This area is reserved");
});

test("CreateProduct div renders correctly", () => {
    expect(createDiv.className).toContain("createProdDiv");
});

test("ModifyProduct div renders correctly", () => {
    expect(modDiv.className).toContain("modifyProdDiv");
});