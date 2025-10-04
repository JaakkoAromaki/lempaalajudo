"use client";

import React, { useState, useEffect } from "react";
import AdminPanel from "./Adminpanel";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ weight: ["600", "700"], subsets: ["latin"] });

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:5000/protected", {
          credentials: "include",
        });
        if (res.ok) setLoggedIn(true);
      } catch (err) {
        console.error(err);
      }
    };
    checkAuth();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Sähköposti tai salasana on väärä");
        return;
      }
      setLoggedIn(true);
    } catch (err) {
      console.error(err);
      setError("Jokin meni pieleen. Yritä uudelleen.");
    }
  };

  if (loggedIn) return <AdminPanel />;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-lg w-80 md:w-96"
      >
        <h1
          className={`${fredoka.className} text-2xl md:text-3xl mb-6 text-center`}
        >
          Kirjaudu sisään
        </h1>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <label className="block mb-2 font-semibold">
          Sähköposti/Käyttäjänimi
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block mb-2 font-semibold">Salasana</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-gray-500 text-sm"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Piilota" : "Näytä"}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Kirjaudu
        </button>
      </form>
    </div>
  );
};

export default Login;
