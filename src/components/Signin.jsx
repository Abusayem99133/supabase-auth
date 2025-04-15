import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const { session, signInUser } = UserAuth();
  console.log(session);
  console.log(email, password);
  const handleSingIn = async (e) => {
    e.preventDefault();
    setLoading();
    try {
      const result = await signInUser(email, password);
      if (result?.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError("an error occurred");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSingIn} className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2 ">Sign in</h2>
        <p>
          Don't have an account ? <Link to={"/signup"}> SignUp</Link>
        </p>
        <div className="flex flex-col py-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 mt-4 bg-[#191919]"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 mt-4 bg-[#191919] "
            type="password"
            placeholder="password"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-4 border px-4 py-3 hover:bg-blue-400 hover:border-blue-400 hover:text-white hover:font-semibold"
          >
            Sign In
          </button>
          {error && <p className="text-red-600 text-center pt-4">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Signin;
