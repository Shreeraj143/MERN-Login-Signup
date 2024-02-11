import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const registerUser = async (event) => {
    event.preventDefault();
    const { name, email, password } = data;

    try {
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Login Successful! Welcome.");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const nameChangeHandler = (event) => {
    setData({ ...data, name: event.target.value });
  };

  const emailChangeHandler = (event) => {
    setData({ ...data, email: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    setData({ ...data, password: event.target.value });
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name=""
          id="name"
          placeholder="Enter Name"
          value={data.name}
          onChange={nameChangeHandler}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name=""
          id="email"
          placeholder="Enter Email"
          value={data.email}
          onChange={emailChangeHandler}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name=""
          id="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={passwordChangeHandler}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
