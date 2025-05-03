import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/auth_context";
import { useLocation } from "react-router-dom";



const Home: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const fromSignup = location.state?.fromSignup;

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">
        {fromSignup
          ? `Thank you for joining, ${user.username}! 🎉`
          : `Welcome back, ${user.username}! 👋`}
      </h1>
      <p className="mb-6 text-gray-700">
        {fromSignup
          ? "You have signed up successfully."
          : "You are logged in successfully."}
      </p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;