import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWeight, FaRunning, FaBalanceScale } from 'react-icons/fa';

const plans = [
  {
    id: 1,
    title: 'Weight Loss',
    calories: 1200,
    description: 'Balanced low-calorie diet for effective fat loss.',
    icon: <FaRunning className="text-3xl text-green-500 mb-3" />,
    tag: 'Beginner',
    tagColor: 'bg-green-500',
    route: '/weight-loss',
  },
  {
    id: 2,
    title: 'Weight Gain',
    calories: 2500,
    description: 'High protein and calorie-dense meal plan.',
    icon: <FaWeight className="text-3xl text-blue-500 mb-3" />,
    tag: 'Popular',
    tagColor: 'bg-blue-500',
    route: '/weight-gain',
  },
  {
    id: 3,
    title: 'Maintain Weight',
    calories: 2000,
    description: 'Standard diet to maintain current body weight.',
    icon: <FaBalanceScale className="text-3xl text-yellow-500 mb-3" />,
    tag: 'Standard',
    tagColor: 'bg-yellow-500',
    route: '/maintain-weight',
  },
];

const DietPage = () => {
  const navigate = useNavigate();
  const [modalData, setModalData] = useState(null);
  const [weight, setWeight] = useState('');
  const [caloriesNeeded, setCaloriesNeeded] = useState(null);

  const calculateCalories = () => {
    if (weight) {
      const calories = Math.round(22 * weight);
      setCaloriesNeeded(calories);
    }
  };

  return (
    <section className="py-12 px-4 md:px-12 bg-gradient-to-br from-white to-gray-100 min-h-screen">
    {/* Back Button */}
        <button
        onClick={() => navigate(-1)}
        className="text-sm text-green-600 mb-6 bg-green-200 hover:bg-green-300 hover:text-green-800 rounded-lg px-4 py-2 flex items-center border-2 border-transparent hover:border-green-500 transition-all duration-300 ease-in-out transform hover:scale-105 font-medium"
        >
        ← Back
        </button>



      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Your Diet is Being Prepared
      </h2>

      {/* Diet Plan Cards */}
      {/* Diet Plan Cards */}
      <div className="grid gap-6  grid-cols-1 w-full max-w-[800px] mx-auto">


        {plans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => navigate(plan.route)}

            className="p-6 rounded-xl shadow-md bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer flex justify-between items-start gap-4 border border-gray-200 hover:border-black"
          >
            {/* Left Column */}
            <div className="flex flex-col items-start">
              <span className={`text-xs text-white px-2 py-0.5 rounded-full mb-2 ${plan.tagColor}`}>
                {plan.tag}
              </span>
              
              <h3 className="text-xl font-bold text-gray-800 mt-1">{plan.title}</h3>
              {plan.icon}
            </div>

            {/* Right Column */}
            <div className="text-right">
              <p className="text-lg text-gray-600 mb-1">{plan.calories} Calories</p>
              <p className="text-sm text-gray-500">{plan.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Plan Details */}
      {modalData && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md shadow-lg relative text-center">
            <button
              className="absolute top-2 right-3 text-xl text-gray-600 hover:text-red-500"
              onClick={() => setModalData(null)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-2 text-gray-800">{modalData.title}</h2>
            <p className="text-gray-600 mb-2">Calories: {modalData.calories}</p>
            <p className="text-gray-500">{modalData.description}</p>
          </div>
        </div>
      )}

      {/* Calorie Calculator */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Calorie Calculator</h3>
        <div className="flex flex-col items-center gap-4">
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight (kg)"
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={calculateCalories}
            className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300"
          >
            Calculate
          </button>
          {caloriesNeeded && (
            <p className="text-lg text-green-600 mt-2">
              You need approximately <strong>{caloriesNeeded}</strong> calories/day.
            </p>
          )}
        </div>
      </div>



     
    </section>




  );
};

export default DietPage;
