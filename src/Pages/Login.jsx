  import React, { useState } from 'react';
  import { auth } from "../Config/firebase";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { useNavigate } from 'react-router-dom';
  import { Link } from 'react-router-dom';

  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const goHome = () =>{
      navigate("/");
    }

    const signIn = async (e) => {
      e.preventDefault(); // Prevent default form submission
      setError(""); // Clear any previous errors

    

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Logged in user email:", user.email);
      navigate("/"); 
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8 relative">
        <button onClick={goHome} className="absolute top-2 right-2 px-2 text-gray-400 hover:text-white focus:outline-none text-2xl">
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-400">Login</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={signIn} className="space-y-6">
            <div>
            <label className="block text-sm font-medium text-blue-400">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-blue-400">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-300"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account? <Link to="/Register" className="text-blue-400 hover:underline">Register</Link>
          </p>
        </div>
      </div>
    );
  };

  export default Login;