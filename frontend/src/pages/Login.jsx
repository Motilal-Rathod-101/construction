import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");

    // check empty fields
    if (!email.trim() || !password.trim()) {
      setError("Email and password required");
      return;
    }

    // mock authentication
    if (email === "test@test.com" && password === "123456") {
      localStorage.setItem("isLoggedIn", "true");

      toast.success("Login successful");
      navigate("/projects"); // redirect to project list
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black px-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-8">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Welcome back
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Login to continue
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20 px-4 py-2 text-sm text-red-600 dark:text-red-400">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Email
          </label>
          <input
            type="email"
            placeholder="test@test.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Password
          </label>
          <input
            type="password"
            placeholder="123456"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 transition"
        >
          Login
        </button>

        <div className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} Construction. All rights reserved.
        </div>
      </div>
    </div>
  );
}