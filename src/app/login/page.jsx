"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Part 3.1: Hardcoded valid credentials
const VALID_USERNAME = "Katherine Margaret Roble";
const VALID_PASSWORD = "Roble@123";

export default function LoginPage() {
  const router = useRouter();

  // Part 2.2: Username and password states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Part 3.2: Error state
  const [error, setError] = useState("");

  // Part 5.1: Show password state
  const [showPassword, setShowPassword] = useState(false);

  // Part 3.3 & Part 4: Validation and navigation
  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError("Please fill in both username and password.");
      return;
    }

    if (username !== VALID_USERNAME) {
      setError("Wrong username.");
      return;
    }

    if (password !== VALID_PASSWORD) {
      setError("Wrong password.");
      return;
    }

    setError("");
    router.push("/profile");
  };

  return (
    <div style={{ maxWidth: "350px", margin: "80px auto", fontFamily: "sans-serif" }}>
      <h2>Login</h2>

      {/* Username Input */}
      <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
      </div>

      {/* Password Input */}
      <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>Password</label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
        />
      </div>

      {/* Part 5.3: Show Password Checkbox */}
      <div style={{ marginBottom: "16px" }}>
        <label style={{ cursor: "pointer", fontSize: "14px" }}>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={(e) => setShowPassword(e.target.checked)}
            style={{ marginRight: "6px" }}
          />
          Show Password
        </label>
      </div>

      {/* Part 3.5: Display error only when it exists */}
      {error && <p style={{ color: "red", marginBottom: "12px" }}>{error}</p>}

      {/* Login Button */}
      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
}