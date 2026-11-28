"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [name, setName] = useState("admin");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div style={styles.card}>
      <h2>Profile Page</h2>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOo_4SFZwpj9ifChnHD9kvAkQlZzxev1gRUqHmyhCyXA&s"
        alt="Profile"
        style={styles.avatar}
      />

      {/* Toggle between viewing and editing the name */}
      {isEditing ? (
        <div style={{ margin: "16px 0" }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <button onClick={() => setIsEditing(false)} style={styles.saveBtn}>
            Save
          </button>
        </div>
      ) : (
        <p style={{ fontSize: "18px" }}>
          Welcome, <strong>{name}</strong>!{" "}
          <button onClick={() => setIsEditing(true)} style={styles.editBtn}>
            Edit
          </button>
        </p>
      )}

      <p style={{ color: "#666", fontSize: "14px" }}>Role: Administrator</p>

      {/* router.push("/login") is safer than router.back() */}
      <button onClick={() => router.push("/login")} style={styles.logoutBtn}>
        Back to Login
      </button>
    </div>
  );
}

// Clean inline styles kept at the bottom so the JSX stays easy to read
const styles = {
  card: {
    maxWidth: "360px",
    margin: "80px auto",
    padding: "32px 24px",
    textAlign: "center",
    fontFamily: "sans-serif",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    border: "1px solid #eee",
  },
  avatar: {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    objectFit: "cover",
    margin: "12px auto",
    border: "3px solid #0070f3",
  },
  input: {
    padding: "6px 10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginRight: "6px",
    width: "140px",
  },
  editBtn: {
    marginLeft: "6px",
    padding: "3px 8px",
    fontSize: "12px",
    backgroundColor: "#eef6ff",
    color: "#0070f3",
    border: "1px solid #0070f3",
    borderRadius: "4px",
    cursor: "pointer",
  },
  saveBtn: {
    padding: "6px 12px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  logoutBtn: {
    marginTop: "24px",
    width: "100%",
    padding: "10px",
    backgroundColor: "#222",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "15px",
    cursor: "pointer",
  },
};