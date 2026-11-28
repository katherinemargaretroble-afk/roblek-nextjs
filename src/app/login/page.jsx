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
  const handleLogin = (e) => {
    e.preventDefault(); // Prevents page reload on Enter key

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
    <div style={styles.page}>
      <form onSubmit={handleLogin} style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Welcome Back</h2>
          <p style={styles.subtitle}>Sign in to access your profile</p>
        </div>

        {/* Username Input */}
        <div style={styles.field}>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            style={styles.input}
          />
        </div>

        {/* Password Input */}
        <div style={styles.field}>
          <label style={styles.label}>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            style={styles.input}
          />
        </div>

        {/* Part 5.3: Show Password Checkbox */}
        <div style={styles.checkboxRow}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
              style={{ marginRight: "8px", cursor: "pointer" }}
            />
            Show Password
          </label>
        </div>

        {/* Part 3.5: Display error only when it exists */}
        {error && <div style={styles.errorBox}>{error}</div>}

        {/* Login Button */}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

// Clean inline styles matching your Profile Page design
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f6f9",
    fontFamily: "sans-serif",
    padding: "16px",
  },
  card: {
    width: "100%",
    maxWidth: "360px",
    backgroundColor: "#ffffff",
    padding: "32px 28px",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
    border: "1px solid #eaeaea",
  },
  header: {
    textAlign: "center",
    marginBottom: "24px",
  },
  title: {
    margin: "0 0 6px 0",
    fontSize: "24px",
    color: "#111",
  },
  subtitle: {
    margin: 0,
    fontSize: "14px",
    color: "#666",
  },
  field: {
    marginBottom: "16px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    outline: "none",
  },
  checkboxRow: {
    marginBottom: "18px",
  },
  checkboxLabel: {
    cursor: "pointer",
    fontSize: "14px",
    color: "#444",
    display: "flex",
    alignItems: "center",
  },
  errorBox: {
    backgroundColor: "#ffeef0",
    color: "#d93025",
    padding: "10px 12px",
    borderRadius: "6px",
    fontSize: "13px",
    marginBottom: "16px",
    border: "1px solid #f5c2c7",
    textAlign: "center",
  },
  button: {
    width: "100%",
    padding: "11px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  },
};