import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from './assets/logo.png';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center font-poppins justify-center bg-white">
      <div className="w-full max-w-md">
        {/* Logo added here */}
        <div className="flex justify-center mb-6">
          <img src={LOGO} alt="Logo" className="h-48" />
        </div>

        <h1 className="text-3xl font-bold text-center mt-8">Log In</h1>
        
        <div className="text-customgray text-lg font-semibold pt-2 text-center">
          <p className="text-base sm:text-lg leading-snug">
            Please enter your registered email and password below to sign in.
          </p>
        </div>
        
        <form className="px-4 mt-8"> 
          <div className="mb-4">
            <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="email">
              Username/Email/ID
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Please enter your username/Email/ID"
            />
          </div>

          <div className="mb-6 mt-6">
            <label className="block text-black text-md font-bold mb-2 text-left" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="*********"
            />
          </div>

          <div className="flex items-center justify-between mb-4 text-sm sm:text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="mr-2 leading-tight"
              />
              <label htmlFor="remember" className="text-customgray">
                Remember me for 30 days
              </label>
            </div>
            <div className="text-xs sm:text-sm">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-customblue text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
            >
              Sign In
            </button>
          </div>

          <div className="flex justify-center text-center mt-4">
            <p className="text-customgray text-sm sm:text-base inline">Don't have an account?</p>
            <Link to="/register" className="text-blue-700 text-sm sm:text-base hover:underline inline ml-1">
              Click here to register
            </Link>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
