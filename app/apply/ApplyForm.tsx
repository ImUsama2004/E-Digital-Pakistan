"use client";

import React, { useState } from "react";

export default function ApplyForm() {
  const [form, setForm] = useState({
    role: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* Header / Title */}
      <div className="max-w-md w-full text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Apply to Join the World’s Top Talent Network
        </h1>
        <p className="mt-2 text-gray-600">
          Join an exclusive network of the world’s top talent in business,
          design, marketing, and technology.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white shadow-md rounded-lg px-6 py-8 space-y-6 border-t-4 border-emerald-500"
      >
        {/* Role Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            I'm applying as…
          </label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 p-2.5 outline-none"
          >
            <option value="">Select a role</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="management-consultant">Management Consultant</option>
            <option value="project-manager">Project Manager</option>
            <option value="product-manager">Product Manager</option>
            <option value="marketing-expert">Marketing Expert</option>
            <option value="sales-expert">Sales Expert</option>
            <option value="support-operations">Support & Operations Expert</option>
          </select>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full name
          </label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 p-2.5 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            E‑mail
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="name@company.com"
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 p-2.5 outline-none"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 p-2.5 outline-none"
          />
          <p className="mt-2 text-xs text-gray-500 leading-relaxed">
            Must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character.
          </p>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 p-2.5 outline-none"
          />
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-500 italic">
          By submitting, you acknowledge and agree to the Terms and
          Conditions and Privacy Policy.
        </p>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-emerald-500 text-black font-bold py-3 rounded-lg hover:bg-emerald-600 transition-colors shadow-sm"
        >
          Apply to Join Network
        </button>
      </form>
    </div>
  );
}