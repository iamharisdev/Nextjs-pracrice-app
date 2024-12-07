"use client";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

import styles from "../../styles/Login.module.css";
import { useRouter } from "next/navigation";
import { Button, InputField } from "@/components";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = async (
    values: LoginFormValues,
    { setSubmitting, setErrors }: any
  ) => {
    try {
      const response = await axios.post("/api/login", values);
      console.log("Login successful:", response.data);
      alert("Login Successful!");
    } catch (error: any) {
      setErrors({
        apiError:
          error.response?.data?.message || "Login failed. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // Image URL
  const imageUrl ='https://i.redd.it/4k-wallpaper-sports-cars-on-track-v0-tuocu8x929sa1.jpg?width=3840&format=pjpg&auto=webp&s=b3ad66edc1c93c19172ef3c7fbe08261708b35e6'

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <img
          src={imageUrl} // Use the image URL here
          alt="Login Image"
          className={styles.loginImage}
        />
      </div>
      <div className={styles.subContainer}>
        <h1 className={styles.title}>Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ values, handleChange, handleBlur, errors, isSubmitting }) => (
            <Form className={styles.form}>
              {errors.apiError && (
                <div className={styles.error}>{errors.apiError}</div>
              )}
              <InputField
                label="Email"
                type="email"
                name="email"
                inputProps={{
                  name: "email",
                  placeholder: "Enter your email",
                  onChange: handleChange,
                  onBlur: handleBlur,
                  value: values.email,
                }}
                error={errors.email}
              />
              <InputField
                label="Password"
                type="password"
                name="password"
                inputProps={{
                  name: "email",
                  placeholder: "Enter your password",
                  onChange: handleChange,
                  onBlur: handleBlur,
                  value: values.password,
                }}
                error={errors.password}
              />
              <h1
                onClick={() => router.push("signup")}
                style={{
                  textAlign: "right",
                  marginTop: "-10px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                Forgot Password
              </h1>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>

              <h1
                onClick={() => router.push("signup")}
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                Create new account?
              </h1>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
