import { useState } from 'react';

import {
    ArrowLeft,
    ArrowRight,
    Flame,
    Drumstick,
    Calendar,
    UtensilsCrossed,
  } from "lucide-react";

export default function MealPlanner() {
  const meals = ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"];
  
  const [mealData, setMealData] = useState(
    meals.map(meal => ({
      name: meal,
      items: [{ img: '', foodName: '', gram: false, cal: false, pro: false }]
    }))
  );

  const [calorieGoal, setCalorieGoal] = useState(2000);
  const [proteinGoal, setProteinGoal] = useState(120);

  const addFoodItem = (mealIndex) => {
    const updatedMeals = [...mealData];
    updatedMeals[mealIndex].items.push({ img: '', foodName: '', gram: false, cal: false, pro: false });
    setMealData(updatedMeals);
  };

  const updateFoodItem = (mealIndex, itemIndex, field, value) => {
    const updatedMeals = [...mealData];
    updatedMeals[mealIndex].items[itemIndex][field] = value;
    setMealData(updatedMeals);
  };

  const toggleCheckbox = (mealIndex, itemIndex, field) => {
    const updatedMeals = [...mealData];
    updatedMeals[mealIndex].items[itemIndex][field] = !updatedMeals[mealIndex].items[itemIndex][field];
    setMealData(updatedMeals);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-gray-50 rounded-lg shadow">
      <div className="flex justify-between mb-6">
        <h1 className="text-xl font-bold">Meal Planning Tracker</h1>
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Calorie Goal:</span>
            <input
              type="number"
              value={calorieGoal}
              onChange={(e) => setCalorieGoal(e.target.value)}
              className="w-20 p-1 border border-gray-300 rounded"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Protein Goal:</span>
            <input
              type="number"
              value={proteinGoal}
              onChange={(e) => setProteinGoal(e.target.value)}
              className="w-20 p-1 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 bg-blue-100 font-bold border-b border-gray-300">
          <div className="p-3 border-r border-gray-300 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Intake
          </div>
          <div className="p-3 border-r border-gray-300 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Diet Plan
          </div>
          <div className="p-3 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Budget Plan
          </div>
        </div>

        {mealData.map((meal, mealIndex) => (
          <div key={mealIndex} className="grid grid-cols-3 border-b border-gray-300">
            <div className="p-3 border-r border-gray-300">
              {meal.name}
            </div>
            <div className="p-3 border-r border-gray-300">
              {meal.items.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-3 last:mb-0">
                  <div className="flex mb-2">
                    <div className="w-20 h-20 bg-gray-200 rounded flex justify-center items-center mr-2">
                      {item.img ? (
                        <img src={item.img} alt="Food" className="w-full h-full object-cover rounded" />
                      ) : (
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="text"
                      placeholder="Food name"
                      value={item.foodName}
                      onChange={(e) => updateFoodItem(mealIndex, itemIndex, 'foodName', e.target.value)}
                      className="flex-grow p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={item.gram}
                        onChange={() => toggleCheckbox(mealIndex, itemIndex, 'gram')}
                        className="mr-1"
                      />
                      gram
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={item.cal}
                        onChange={() => toggleCheckbox(mealIndex, itemIndex, 'cal')}
                        className="mr-1"
                      />
                      cal
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={item.pro}
                        onChange={() => toggleCheckbox(mealIndex, itemIndex, 'pro')}
                        className="mr-1"
                      />
                      pro
                    </label>
                  </div>
                </div>
              ))}
              <button
                onClick={() => addFoodItem(mealIndex)}
                className="mt-2 py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
              >
                + Add Food
              </button>
            </div>
            <div className="p-3">
              {meal.items.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-3 last:mb-0">
                  <div className="flex mb-2">
                    <div className="w-20 h-20 bg-gray-200 rounded flex justify-center items-center mr-2">
                      {item.img ? (
                        <img src={item.img} alt="Food" className="w-full h-full object-cover rounded" />
                      ) : (
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="text"
                      placeholder="Food name"
                      value={item.foodName}
                      onChange={(e) => updateFoodItem(mealIndex, itemIndex, 'foodName', e.target.value)}
                      className="flex-grow p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={item.gram}
                        onChange={() => toggleCheckbox(mealIndex, itemIndex, 'gram')}
                        className="mr-1"
                      />
                      gram
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={item.cal}
                        onChange={() => toggleCheckbox(mealIndex, itemIndex, 'cal')}
                        className="mr-1"
                      />
                      cal
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={item.pro}
                        onChange={() => toggleCheckbox(mealIndex, itemIndex, 'pro')}
                        className="mr-1"
                      />
                      pro
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* <div className="grid grid-cols-3 p-3">
          <div className="col-span-1"></div>
          <div className="col-span-2 flex space-x-4">
            <div className="flex items-center space-x-2">
              <span className="font-bold">Calories:</span>
              <div className="w-24 h-6 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-green-500 h-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold">Protein:</span>
              <div className="w-24 h-6 bg-gray-200 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div> */}




          {/* Nutritional Stats */}
      <div className="grid grid-cols-2 gap-6">
        {/* Calories */}
        <div className="p-4 bg-white rounded-xl shadow-md">
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
            <Flame className="text-red-500" />
            Calories Consumed
          </div>
          <div className="w-full bg-red-100 rounded-full h-2">
            <div className="bg-red-500 h-2 rounded-full w-[70%]" />
          </div>
          <p className="text-xs text-right mt-1 text-gray-500">1400 / 2000 cal</p>
        </div>

        {/* Protein */}
        <div className="p-4 bg-white rounded-xl shadow-md">
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
            <Drumstick className="text-yellow-500" />
            Protein Intake
          </div>
          <div className="w-full bg-yellow-100 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full w-[50%]" />
          </div>
          <p className="text-xs text-right mt-1 text-gray-500">50g / 100g protein</p>
        </div>
      </div>
      </div>
    </div>
  );
}