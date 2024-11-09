import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [message, setMessage] = useState("");
  const {loginUser,signInWithGoogle} = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      alert("User logged in successfully");
      navigate("/");

    } catch (error) {
      setMessage("Provide a valid email and password");
      console.error(error);
    }
  };


  const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            alert("Login successful!");
            navigate("/")
        } catch (error) {
            alert("Google sign in failed!") 
            console.error(error)
        }
      }

  return (
    <div className="h-[calc(100vh-120px)] border">
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            Login to Bookify
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                id="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
                required
              />
            </div>
            {message && <div className="text-red-500 mb-3  ">{message}</div>}

            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 text-white bg-primary rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 "
            >
              Login
            </button>
          </form>

          <div>
            <span className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/register" className="text-indigo-600 hover:underline">
                Register
              </Link>
            </span>
          </div>

          <div className="flex items-center justify-between mt-6">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            <span className="text-xs text-center text-gray-500 uppercase">
              OR
            </span>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>

          <button className="flex items-center justify-center w-full px-4 py-2 mt-4 text-gray-700 border rounded-md hover:bg-gray-300"
          onClick={handleGoogleLogin}>
          
            <FcGoogle className="mr-2 text-lg" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
