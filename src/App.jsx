import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthProvider>
        <Navbar />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-Header">
          <Outlet />
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
