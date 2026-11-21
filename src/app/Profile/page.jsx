"use client";

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "80px auto",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Profile Page</h2>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOo_4SFZwpj9ifChnHD9kvAkQlZzxev1gRUqHmyhCyXA&s"
        alt="Profile"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          margin: "16px auto",
          border: "2px solid #0070f3",
        }}
      />

      <p>Welcome, <strong>admin</strong>!</p>

      <button
        onClick={() => router.back()}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Back to Login
      </button>
    </div>
  );
}