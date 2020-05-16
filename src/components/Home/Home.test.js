import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home.component";

it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
});