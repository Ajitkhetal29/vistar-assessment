import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("user loged in :", { email });
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("user registered registered :", { email });
      }
      navigate("/home");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    < >
      <div className="min-h-screen  w-full flex items-center justify-center bg-gray-900 text-white">
        <div className="bg-gray-800 p-8 w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-white "
            />

            <input
              type="password"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2  bg-gray-700 text-white"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700  py-2 rounded text-white font-semibold"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>

            <p className="text-sm mt-4 text-center">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>

            <p
              className="text-blue-400 cursor-pointer text-center underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register Now" : "Login"}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
