"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./SignUpPage.module.css";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Reset error message

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    // Additional validations can be added here

    const userData = {
      username,
      password,
      role: "user",
    };

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/admin-users/signup`;

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Signup successful", data);
        router.push("/login"); // Redirect to login page or another route
      } else {
        setError(data.error || "Failed to sign up.");
      }
    } catch (error) {
      console.error("An error occurred during signup", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.signupPage}>
      <h2>Sign Up</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
