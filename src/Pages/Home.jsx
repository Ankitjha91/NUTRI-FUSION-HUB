// src/pages/Home.jsx
import React from 'react';
import nutritionImg from '../assets/nutrition.avif';
import NutritionSection from '../components/NutritionSection';
import DietPage from '../Pages/DietPage';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      <section className="relative text-center mb-12">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0 bg-cover bg-center bg-opacity-10 blur-sm" style={{ backgroundImage: `url(${nutritionImg})` }}></div>

      {/* Overlay Text */}
      <div className="relative z-10 p-8 text-white">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">Welcome to Nutrition World</h1>
        <p className="text-lg mb-6 drop-shadow-md">Explore our expert tips, personalized meal plans, and everything you need for a healthier, happier life.</p>

    {/* Card with Small Image (100x110) */}
    {/* <div className="flex justify-center space-x-6 mt-6">
      <div className="p-4 rounded-lg shadow-xl bg-white">
        <img src="your-image-path.jpg" alt="Nutrition" className="w-24 h-24 object-cover rounded-full border-4 border-indigo-500" />
        <p className="text-center mt-2 text-gray-700 font-semibold">Healthy Tips</p>
      </div>
      <div className="p-4 rounded-lg shadow-xl bg-white">
        <img src="your-image-path.jpg" alt="Nutrition" className="w-24 h-24 object-cover rounded-full border-4 border-indigo-500" />
        <p className="text-center mt-2 text-gray-700 font-semibold">Diet Plans</p>
      </div>
      <div className="p-4 rounded-lg shadow-xl bg-white">
        <img src="your-image-path.jpg" alt="Nutrition" className="w-24 h-24 object-cover rounded-full border-4 border-indigo-500" />
        <p className="text-center mt-2 text-gray-700 font-semibold">Fitness Goals</p>
      </div>
    </div> */}

<section className="py-6 px-4 md:px-12">
  <div className="flex justify-center space-x-6">
    <Link
      to="/dietpage"
      className="px-6 py-3 text-lg font-semibold text-black bg-green-400 rounded-full hover:bg-green-700 transition-all duration-300 hover:shadow-lg"
    >
      Diet Page
    </Link>
  </div>
</section>



    {/* Call to Action Button */}
    <div className="mt-8">
      <a href="/get-started" className="px-6 py-3 text-xl font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all">Get Started</a>
    </div>
  </div>
</section>


      <NutritionSection />
    </div>
  );
};

export default Home;
