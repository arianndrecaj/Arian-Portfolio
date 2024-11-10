import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const SignUp = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5003/api/auth/register", {
        name,
        email,
        password,
      });
      alert(response.data.message);
      onClose(); // Close form after successful sign-up
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="signup-form-container p-3">
      <form onSubmit={handleSubmit} className="p-4 border rounded">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-control mb-3"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-control mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-success w-100 mb-2">
          Sign Up
        </button>
        <button onClick={onClose} className="btn btn-secondary w-100">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default SignUp;
