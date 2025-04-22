import React from 'react';
import { Link } from 'react-router-dom';
import { IoSettingsSharp } from 'react-icons/io5';

const Header = () => {
  return (
    <header className="w-full bg-green-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between">
       {/* Logo / Brand */}
      <Link to="/" className="text-2xl font-bold text-black hover:text-dark-green-900">
        <h1>NUTRI FUSION HUB</h1>
      </Link>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center space-x-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-blue-600">SHOPPING</a>
          <a href="#" className="hover:text-blue-600">BASIC WORKOUTS</a>
          <a href="#" className="hover:text-blue-600">PERSONAL CUSTOMIZATION OF DIET</a>
          <a href="#" className="hover:text-blue-600">FOR PROFESSIONALS</a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
  <button className="bg-black text-white px-4 py-2 rounded text-sm">SIGN UP</button>
  <a href="#" className="text-black hover:text-blue-600 hover:underline text-sm">
    Already a member? Sign in
  </a>
  
  {/* Settings Button */}
  
   <Link to="/setting" className="text-black hover:text-green-600 transition-colors">
   <IoSettingsSharp className="text-2xl" />
  </Link>
</div>
      </div>
    </header>
  );
};

export default Header;
