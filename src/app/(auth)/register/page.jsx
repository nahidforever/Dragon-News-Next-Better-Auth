"use client";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = (data) => {
    console.log(data);
    const { name, email, photo, password } = data;
    console.log(name, photo);
  };

  return (
    <div className="max-w-7xl mx-auto bg-slate-100 min-h-[80vh] flex justify-center items-center">
      <div className="p-4 rounded-lg bg-white">
        <h2 className="font-bold text-2xl text-center mb-3">
          Register Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your Name"
              {...register("name", { required: "Name filled is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your photo url"
              {...register("photo", {
                required: "Photo URL filled is required",
              })}
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Enter your email"
              {...register("email", { required: "Email filled is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password filled is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white rounded-lg">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
