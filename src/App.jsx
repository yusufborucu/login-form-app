import React from "react"
import { Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  )
}

export default App
