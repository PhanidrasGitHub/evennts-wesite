import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const jwtToken = JSON.parse(localStorage.getItem("jwtToken"));
  console.log(jwtToken);
  useEffect(() => {
    if (jwtToken) {
      navigate("/");
    }
  }, [jwtToken, navigate]);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const onchangeusername = (e) => {
    setFormData({ ...formData, username: e.target.value });
  };
  const onchangeemail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const onchangepassoword = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };
  const signup = (e) => {
    e.preventDefault();
    localStorage.setItem(formData.username, JSON.stringify(formData));
    navigate("/login");
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="container">
      <h2>Create your acccount here</h2>
      <form className="form" onSubmit={signup}>
        <h1>Signup</h1>
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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={onchangeemail}
            value={formData.email}
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

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
