import React from "react";
import ReactDOM from "react-dom";
import TextTranslate from "./TextTranslate.component";

it("render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TextTranslate />, div);
    ReactDOM.unmountComponentAtNode(div);
});