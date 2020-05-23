import React from "react";
import ReactDOM from "react-dom";
import HomePortfolio from "./HomePortfolio.component";

it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HomePortfolio />, div);
    ReactDOM.unmountComponentAtNode(div);
});