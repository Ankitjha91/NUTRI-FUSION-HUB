import React, { useState } from 'react';
import { FaPlay, FaDumbbell, FaRunning, FaShoppingBag } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';

const UserInfoPage = () => {
  const [gender, setGender] = useState('');

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-6 relative">
      {/* Header */}
      <div className="w-full bg-green-200 flex justify-between items-center px-6 py-4 rounded-md mb-6">
        <div />
        <div className="flex items-center gap-2">
          <IoSettingsSharp className="text-xl text-gray-700" />
          <span className="text-sm font-medium">Settings</span>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md space-y-4 text-left">
        <div className="flex justify-between">
          <label className="font-medium">Name:</label>
          <input type="text" placeholder="Enter name" className="border-b focus:outline-none w-2/3" />
        </div>

        <div className="flex justify-between">
          <label className="font-medium">Age:</label>
          <input type="number" placeholder="Enter age" className="border-b focus:outline-none w-2/3" />
        </div>

        <div className="flex justify-between items-center">
          <label className="font-medium">Gender:</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-1">
              <input type="radio" name="gender" value="male" onChange={() => setGender('male')} />
              Male
            </label>
            <label className="flex items-center gap-1">
              <input type="radio" name="gender" value="female" onChange={() => setGender('female')} />
              Female
            </label>
          </div>
        </div>

        <div className="flex justify-between">
          <label className="font-medium">Height (cm):</label>
          <input type="number" placeholder="e.g. 170" className="border-b focus:outline-none w-2/3" />
        </div>

        <div className="flex justify-between">
          <label className="font-medium">Weight (kg):</label>
          <input type="number" placeholder="e.g. 65" className="border-b focus:outline-none w-2/3" />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 w-full max-w-md space-y-4">
        <button className="w-full bg-green-200 hover:bg-green-300 text-black py-3 rounded-lg font-semibold flex justify-between items-center px-4">
          Calculate Calories
          <FaPlay className="text-xl" />
        </button>

        <button className="w-full bg-green-200 hover:bg-green-300 text-black py-3 rounded-lg font-semibold flex justify-between items-center px-4">
          Check How Fit You Are
          <FaDumbbell className="text-xl" />
        </button>

        <button className="w-full bg-green-200 hover:bg-green-300 text-black py-3 rounded-lg font-semibold flex justify-between items-center px-4">
          Daily Workout
          <FaRunning className="text-xl" />
        </button>

        <button className="w-full bg-green-200 hover:bg-green-300 text-black py-3 rounded-lg font-semibold flex justify-between items-center px-4">
          Our Products
          <FaShoppingBag className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default UserInfoPage;
