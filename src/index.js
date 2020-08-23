import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TODOList from "./TODOList";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <TODOList />
  </React.StrictMode>,
  document.getElementById("root")
);

// const div = React.createElement("div", { id: "1" }, "react");
// ReactDOM.render(div, document.getElementById("root"));
// ReactDOM.render(<App/>,document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
