import React from "react"
import { useNavigate } from "react-router-dom"

const ProfilePage = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/")
  }

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h1>Profile</h1>
      <p>Welcome! You are logged in.</p>
      <button 
        onClick={handleLogout}
        style={{
          padding: "0.7rem",
          fontWeight: "bold",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >Logout</button>
    </div>
  )
}

export default ProfilePage
