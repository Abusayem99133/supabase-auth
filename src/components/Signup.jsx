import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const { session, signUpNewUser } = UserAuth();
  console.log(session);
  console.log(email, password);
  const handleSingUp = async (e) => {
    e.preventDefault();
    setLoading();
    try {
      const result = await signUpNewUser(email, password);
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
      <form onSubmit={handleSingUp} className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2 ">Sign up today</h2>
        <p>
          Already have an account ? <Link to={"/signin"}> Signin</Link>
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
            Sign Up
          </button>
          {error && <p className="text-red-600 text-center pt-4">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Signup;
