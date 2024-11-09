import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import getBaseURL from "../utils/baseURL";
import { useNavigate } from "react-router-dom";

const AdminLoginForm = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // Check token expiration on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenExpiry = localStorage.getItem("tokenExpiry");

    if (token && tokenExpiry && new Date().getTime() > tokenExpiry) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiry");
      alert("Session expired! Please log in again.");
      navigate("/");
    }
  }, [navigate]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${getBaseURL()}/api/auth/admin`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const auth = response.data;

      if (auth.token) {
        const tokenExpiryTime = new Date().getTime() + 3600000; // 1 hour from now
        localStorage.setItem("token", auth.token);
        localStorage.setItem("tokenExpiry", tokenExpiryTime);

        alert("Admin login successful");
        navigate("/Dashboard");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Provide valid credentials");
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-lg">
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>
        {message && (
          <p className="text-center text-red-500 font-semibold">{message}</p>
        )}
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: true })}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.username && (
              <p className="text-red-500">Username is required</p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: true })}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.password && (
              <p className="text-red-500">Password is required</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-primary rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Login
          </button>
          <p className="text-sm text-center text-gray-600">
            Copyright reserved @Bookify 2024
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginForm;
