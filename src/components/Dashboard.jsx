import React from "react";
import { useNavigate } from "react-router";
import { UserAuth } from "../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { session, signOut } = UserAuth();
  console.log(session);
  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      navigate("/signin");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Welcome {session?.user?.email}</h2>
        <p
          onClick={handleSignOut}
          className="hover:cursor-pointer border inline-block px-4 py-3 mt-4"
        >
          Sign Out
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
