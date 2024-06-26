import React from "react";
import Login from "./Login.jsx";

function App() {
  let isLoggedIn = false;
  const currentTime = new Date().getHours();

  return (
    <div className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
      {/*AND Operator*/}
      {/* {currentTime > 12 && <h1>Why are you still working?</h1>} */}
    </div>
  );
}

export default App;
