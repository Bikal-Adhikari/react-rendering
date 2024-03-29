import React from "react";
import Input from "./Input";

const Login = () => {
  return (
    <form className="form">
      <Input />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
