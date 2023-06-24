import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatty</span>
        <span className="title">Login</span>
        <from>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Enter Password" />

          <button className="">Sign In</button>
        </from>
        <p> Dont Have An Account ? Register</p>
      </div>
    </div>
  );
};

export default Login;
