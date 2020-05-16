import React from "react";
import ReactDOM from "react-dom";
import BaseLayout from "./BaseLayout.component";

it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BaseLayout />, div);
    ReactDOM.unmountComponentAtNode(div);
});