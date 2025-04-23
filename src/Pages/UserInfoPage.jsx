import React, { useState } from 'react';
import { FaPlay, FaDumbbell, FaRunning, FaShoppingBag } from 'react-icons/fa';

const UserInfoPage = () => {
  const [gender, setGender] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-10">
        
        {/* Left Side - Header & Form */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Fitness Profile</h1>
            <p className="text-gray-600 text-base">
              Fill in your details to personalize your fitness experience.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-5 text-sm lg:text-base">
            {/* Name */}
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block font-medium mb-1">Age</label>
              <input
                type="number"
                placeholder="Enter your age"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block font-medium mb-1">Gender</label>
              <div className="flex gap-6 mt-1">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>Male</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span>Female</span>
                </label>
              </div>
            </div>

            {/* Height */}
            <div>
              <label className="block font-medium mb-1">Height (cm)</label>
              <input
                type="number"
                placeholder="Enter your height"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Weight */}
            <div>
              <label className="block font-medium mb-1">Weight (kg)</label>
              <input
                type="number"
                placeholder="Enter your weight"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Buttons */}
        <div className="flex-1 flex flex-col justify-center space-y-5">
          <button className="w-full bg-green-300 hover:bg-green-400 text-black py-3 rounded-xl font-semibold flex justify-between items-center px-6 shadow-md transition-all">
            Calculate Calories
            <FaPlay className="text-lg" />
          </button>

          <button className="w-full bg-green-300 hover:bg-green-400 text-black py-3 rounded-xl font-semibold flex justify-between items-center px-6 shadow-md transition-all">
            Check How Fit You Are
            <FaDumbbell className="text-lg" />
          </button>

          <button className="w-full bg-green-300 hover:bg-green-400 text-black py-3 rounded-xl font-semibold flex justify-between items-center px-6 shadow-md transition-all">
            Daily Workout
            <FaRunning className="text-lg" />
          </button>

          <button className="w-full bg-green-300 hover:bg-green-400 text-black py-3 rounded-xl font-semibold flex justify-between items-center px-6 shadow-md transition-all">
            Our Products
            <FaShoppingBag className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage;
