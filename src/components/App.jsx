import React from "react";
import Login from "./Login";

let isLoggedIn = false;

const renderConditionally = () => {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    <Login />;
  }
};

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
