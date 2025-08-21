// src/pages/LoginPage.jsx
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // TODO: Add authentication logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
     <div className="w-full max-w-md bg-gray-200 p-8 rounded-2xl shadow-xl border border-gray-300">




        {/* Logo / Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Please login to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none
                         transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 rounded-xl bg-gray-50 border border-gray-200 
                         focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none
                         transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white 
                       bg-gradient-to-r from-blue-600 to-blue-500 
                       hover:from-blue-700 hover:to-blue-600 
                       shadow-md hover:shadow-lg transition-all"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>

        {/* Social Login */}
        <div className="flex gap-3">
          <button className="flex-1 py-3 rounded-xl border border-gray-200 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">Google</span>
          </button>
          <button className="flex-1 py-3 rounded-xl border border-gray-200 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
            <img src="https://www.svgrepo.com/show/475647/github-color.svg" alt="GitHub" className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">GitHub</span>
          </button>
        </div>

        {/* Signup link */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
