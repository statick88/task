"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import LoadPage from "../components/LoadPage";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }

    getUser();
  }, []);

  const handleClose = () => {
    setShow(false);
    setError("");
  };

  const handleSignUp = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        throw error;
      }
      setUser(user);
      router.refresh();
    } catch (error) {
      console.log("Error signing up:", error.message);
      setError(error.message);
      setShow(true);
    }
  };

  if (loading) {
    return <LoadPage />;
  }

  return (
    <>
      {show && (
        <div className="fixed inset-x-0 top-0 flex items-center justify-center">
          <div className="bg-red-500 text-white p-4 rounded-md shadow-lg">
            <p>{error}</p>
            <button
              onClick={handleClose}
              className="mt-2 px-4 py-2 bg-red-700 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <main className="h-screen flex items-center justify-center bg-gray-800 p-6">
        <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
            <h1 className="mb-4 text-xl font-bold text-gray-700 dark:text-gray-300">
                Sign Up
            </h1>
            <label htmlFor="email" className="text-gray-400">
               Create Email
            </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
            <label htmlFor="password" className="text-gray-400">
                Create Password
            </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSignUp}
            className="w-full mb-2 p-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
          >
            Sign Up
          </button>
          <p className="text-center text-gray-400">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-500">
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
