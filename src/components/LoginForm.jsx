import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  const navigate = useNavigate()

  const loginMutation = useMutation({
    mutationFn: (data) => axios.post("https://reqres.in/api/login", data),
    onSuccess: () => navigate("/profile"),
    onError: () => alert("Invalid login credentials!"),
  })

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      loginMutation.mutate(values)
    },
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h1>Login</h1>
      <div style={{ position: "relative" }}>
        <label htmlFor="email" style={{ fontWeight: "bold" }}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{
            width: "100%",
            padding: "0.5rem",
            border: formik.touched.email && formik.errors.email ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: "red", fontSize: "0.9rem", marginTop: "0.2rem" }}>
            {formik.errors.email}
          </div>
        )}
      </div>

      <div style={{ position: "relative" }}>
        <label htmlFor="password" style={{ fontWeight: "bold" }}>
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          style={{
            width: "100%",
            padding: "0.5rem",
            border: formik.touched.password && formik.errors.password ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: "red", fontSize: "0.9rem", marginTop: "0.2rem" }}>
            {formik.errors.password}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={loginMutation.isLoading}
        style={{
          padding: "0.7rem",
          backgroundColor: loginMutation.isLoading ? "#ddd" : "#4CAF50",
          color: "#fff",
          fontWeight: "bold",
          border: "none",
          borderRadius: "4px",
          cursor: loginMutation.isLoading ? "not-allowed" : "pointer",
        }}
      >
        {loginMutation.isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  )
}

export default LoginForm
