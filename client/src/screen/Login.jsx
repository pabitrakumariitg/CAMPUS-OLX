import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

// Add toast options
const toastOptions = {
  position: "bottom-right",
  autoClose: 5000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // useEffect(() => {
  //   const localStorageKey = process.env.REACT_APP_LOCALHOST_KEY;
  //   if (localStorageKey && localStorage.getItem(localStorageKey)) {
  //     navigate("/home");
  //   }
  // }, [navigate]);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        toast.success("Login successful!", toastOptions);
        navigate("/home");
      } else {
        const data = await response.json();
        toast.error(data.msg, toastOptions);
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed. Please try again later.", toastOptions);
    }
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          className="login-input"
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className="login-input"
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <div className="not-member">
          <h3>Not a member?</h3>
          <button className="signup-button" onClick={handleSignup}>
            Signup now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
