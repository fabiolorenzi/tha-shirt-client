import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../../redux/store.js";
import { BrowserRouter as Router } from "react-router-dom";
import CreateProduct from "../CreateProduct.jsx";

afterEach(cleanup);

let container, title, labelName, labelType, labelCat, labelUndCat, labelCol, labelDesc, labelPrice, labelImage, button;

beforeEach(() => {
    const { getByTestId } = render(
        <Provider store={store}>
            <Router>
                <CreateProduct />
            </Router>
        </Provider>
    );

    container = getByTestId("createProdContainer");
    title = getByTestId("createProdTitle");
    labelName = getByTestId("createProdLabelName");
    labelType = getByTestId("createProdLabelType");
    labelCat = getByTestId("createProdLabelCategory");
    labelUndCat = getByTestId("createProdLabelUnderCategory");
    labelCol = getByTestId("createProdLabelColour");
    labelDesc = getByTestId("createProdLabelDescription");
    labelPrice = getByTestId("createProdLabelPrice");
    labelImage = getByTestId("createProdImageLabel");
    button = getByTestId("createProdButtonSubmit");
});

test("Container renders correctly", () => {
    expect(container.className).toContain("createProdContainer");
});

test("Title renders correctly", () => {
    expect(title.textContent).toBe("Create product");
});

test("Label name renders correctly", () => {
    expect(labelName.textContent).toBe("Name");
});

test("Label type renders correctly", () => {
    expect(labelType.textContent).toBe("Type");
});

test("Label category renders correctly", () => {
    expect(labelCat.textContent).toBe("Category");
});

test("Label under-category renders correctly", () => {
    expect(labelUndCat.textContent).toBe("UnderCategory");
});

test("Label colour renders correctly", () => {
    expect(labelCol.textContent).toBe("Colour");
});

test("Label description renders correctly", () => {
    expect(labelDesc.textContent).toBe("Description");
});

test("Label price renders correctly", () => {
    expect(labelPrice.textContent).toBe("Price");
});

test("Label image renders correctly", () => {
    expect(labelImage.textContent).toBe("Image");
});

test("Submit button renders correctly", () => {
    expect(button.textContent).toBe("Create");
});