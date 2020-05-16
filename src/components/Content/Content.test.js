import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content.component";

it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Content />, div);
    ReactDOM.unmountComponentAtNode(div);
});