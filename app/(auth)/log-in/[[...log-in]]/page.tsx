"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Head from "next/head";
import styles from "./LoginPage.module.css"; // Update path as necessary

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Next.js router

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const apiUrl = `/api/admin-users/log-in`; // Update API URL as necessary
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to login");
      }

      const { token } = await response.json();
      localStorage.setItem("authToken", token);
      router.push("/root"); // Use Next.js router to navigate
    } catch (error) {
      console.error("Login error:", error);
      alert((error as Error).message);
    }
  };

  return (
    <div className={styles.loginPage}>
      <Head>
        <title>Login</title>
      </Head>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>
          Don&apos;t have an account? <Link href="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
