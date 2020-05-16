import React from "react";
import ReactDOM from "react-dom";
import MenuMobile from "./MenuMobile.component";

it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<MenuMobile />, div);
    ReactDOM.unmountComponentAtNode(div);
});