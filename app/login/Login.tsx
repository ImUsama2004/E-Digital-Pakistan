"use client"; // Required if you add interactivity like onClick or useState

import React, { FormEvent } from 'react';
import { Eye, Zap } from 'lucide-react';

// Use React.FC (Functional Component) or simple function definition
const SignIn: React.FC = () => {
  
  // Example of a typed handler
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f1117] px-4 font-sans text-white">
      <div className="w-full max-w-md space-y-8 text-center">
        
        {/* Logo & Header */}
        <div className="flex flex-col items-center">
          {/* Custom Zap icon color to match image exactly */}
          <Zap className="h-10 w-10 text-[#00f28f] fill-[#00f28f]" />
          <h1 className="mt-6 text-4xl font-bold tracking-tight">Sign In</h1>
          <p className="mt-2 text-gray-400">Access your account</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          
          {/* Email Input with Gradient Border Overlay */}
          <div className="relative rounded-lg p-[1.5px] bg-linear-to-r from-[#00f28f] via-[#00d4ff] to-[#0081ff]">
            <div className="bg-[#0f1117] rounded-lg px-4 py-3">
              <label className="absolute -top-2.5 left-4 bg-[#0f1117] px-1 text-xs font-medium text-[#00f28f]">
                Email
              </label>
              <input 
                type="email" 
                required
                className="w-full bg-transparent outline-none text-white placeholder-gray-600"
                placeholder="example@mail.com"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative flex items-center rounded-lg border border-gray-800 bg-[#161922] px-4 py-4 transition-all focus-within:border-gray-600">
            <input 
              type="password" 
              placeholder="Password" 
              required
              className="w-full bg-transparent text-gray-300 outline-none placeholder:text-gray-500"
            />
            <Eye className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-300 transition-colors" />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400 cursor-pointer select-none">
              <input 
                type="checkbox" 
                className="h-4 w-4 rounded border-gray-700 bg-transparent accent-[#00f28f]" 
              />
              Keep me signed in
            </label>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Main Sign In Button */}
          <button 
            type="submit"
            className="w-full rounded-lg bg-linear-to-r from-[#00f28f] to-[#00d4ff] py-4 font-bold text-black transition-transform active:scale-[0.98] hover:opacity-90"
          >
            SIGN IN
          </button>
        </form>

        {/* Divider */}
        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-800"></span>
          </div>
          <span className="relative bg-[#0f1117] px-4 text-xs font-semibold text-gray-500 uppercase tracking-widest">
            OR
          </span>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button type="button" className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-800 bg-[#161922] py-3 text-sm font-medium hover:bg-[#1c202b] transition-colors">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-5 w-5" alt="Google" />
            Continue with Google
          </button>
          <button type="button" className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-800 bg-[#161922] py-3 text-sm font-medium hover:bg-[#1c202b] transition-colors">
            <img src="https://www.svgrepo.com/show/303108/apple-black-logo.svg" className="h-5 w-5 invert" alt="Apple" />
            Continue with Apple
          </button>
        </div>

        <p className="text-sm text-gray-400 pt-4">
          New here?{" "}
          <a href="#" className="text-[#00f28f] font-semibold hover:underline">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;