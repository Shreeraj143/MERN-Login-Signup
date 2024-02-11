import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const nameChangeHandler = (event) => {
    setData({ ...data, name: event.target.value });
  };

  const emailChangeHandler = (event) => {
    setData({ ...data, email: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    setData({ ...data, password: event.target.value });
  };

  const loginUser = async (event) => {
    event.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", { email, password });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/dashboard");
      }
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name=""
          id="email"
          placeholder="Enter Email"
          onChange={emailChangeHandler}
          value={data.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name=""
          id="password"
          placeholder="Enter Password"
          onChange={passwordChangeHandler}
          value={data.password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
