import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const jwtToken = localStorage.getItem("jwtToken");
  console.log(jwtToken, "dkmflk");
  useEffect(() => {
    if (jwtToken) {
      navigate("/");
    }
  }, [jwtToken, navigate]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const onchangeusername = (e) => {
    setFormData({ ...formData, username: e.target.value });
    setError("");
  };
  const onchangepassoword = (e) => {
    setFormData({ ...formData, password: e.target.value });
    setError("");
  };

  const login = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem(formData.username));
    console.log(storedUser.username);
    console.log(
      formData.username,
      formData.password,
      storedUser.username,
      storedUser.password
    );
    if (
      storedUser.username === formData.username &&
      storedUser.password === formData.password
    ) {
      localStorage.setItem(
        "jwtToken",
        JSON.stringify(
          "eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTc1NjUxNDM4OSwiaWF0IjoxNzU2NTE0Mzg5fQ"
        )
      );

      setError("");
      navigate("/");
    } else {
      setError("Invalid username or password. Please try again.");
    }
    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="container">
      <h2>Login Here</h2>
      <form className="form" onSubmit={login}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={onchangeusername}
            value={formData.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={onchangepassoword}
            value={formData.password}
          />
        </div>
        {error && (
          <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
        )}
        <button type="submit">Login</button>
        <Link to="/signup" className="signuplink">
          signup
        </Link>
      </form>
    </div>
  );
};

export default Login;
