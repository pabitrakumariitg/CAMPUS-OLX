import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Add toast options
const toastOptions = {
  position: "bottom-right",
  autoClose: 5000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

const SignIn = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = newUser;
    if (password !== confirmPassword) {
      toast.error("Password and confirm password should be the same.", toastOptions);
      return false;
    } else if (username.length < 3) {
      toast.error("Username should be greater than 3 characters.", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error("Password should be equal to or greater than 8 characters.", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    if (!handleValidation()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem(
          "chat-app-user",
          JSON.stringify(data.user)
        );
        toast.success("Sign up successful!", toastOptions);
        navigate("/login");
      } else {
        const data = await response.json();
        toast.error(data.msg, toastOptions);
      }
    } catch (error) {
      console.error("Error during sign up:", error);
      toast.error("Sign up failed. Please try again later.", toastOptions);
    }
  };

  return (
    <div className="sign-up0">
      <div className="sign-up-container0">
        <h2>Sign Up</h2>
        
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          className="sign-up-input0"
         
        />
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={newUser.username}
          onChange={handleChange}
          className="sign-up-input0"
          autoComplete="off"
        />
        <label>Set Password</label>
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
          className="sign-up-input0"
          autoComplete="new-password"
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={newUser.confirmPassword}
          onChange={handleChange}
          className="sign-up-input0"
          autoComplete="new-password"
        />
        <button className="sign-up-button0" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
      <div className="existing-account0">
        Already have an account?
        <button className="login-button0" onClick={handleLoginClick}>
          Login Here
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
