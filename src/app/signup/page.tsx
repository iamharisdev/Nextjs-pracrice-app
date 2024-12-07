"use client";

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Button, InputField, UserProfile } from "@/components";

const Signup: React.FC = () => {
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [address, setAddress] = useState<string>("");

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contact: "",
    gender: "",
    address: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    contact: Yup.string().required("Contact is required"),
    gender: Yup.string().required("Gender is required"),
    address: Yup.string().required("Address is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form Submitted:", { ...values, profileImage, address });
    alert("Signup Successful!");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Signup</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, handleBlur, handleChange, errors }) => (
          <Form>
            <UserProfile onImageUpload={(file) => setProfileImage(file)} />

            <InputField
              name="firstName"
              label="First Name"
              inputProps={{
                placeholder: "Enter your first name",
              }}
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.firstName}
            />

            <InputField
              name="lastName"
              label="Last Name"
              placeholder="Enter your last name"
            />

            <InputField
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
            />

            <InputField
              name="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
            />

            <InputField
              name="contact"
              label="Contact"
              placeholder="Enter your contact number"
            />

            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="gender"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                Gender
              </label>
              <select
                name="gender"
                value={values.gender}
                onChange={(e) => setFieldValue("gender", e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="address"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                Address
              </label>
              {/* <GooglePlacesAutocomplete
                apiKey="YOUR_GOOGLE_API_KEY"
                selectProps={{
                  value: address,
                  onChange: (val: any) => {
                    setAddress(val?.label || "");
                    setFieldValue("address", val?.label || "");  // Update Formik state
                  },
                }}
              /> */}
            </div>

            <Button type="submit" label="Signup">
              SignUp
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
