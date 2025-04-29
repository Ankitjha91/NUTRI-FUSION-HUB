import { useState } from 'react';

import {
  ArrowLeft,
  ArrowRight,
  Flame,
  Drumstick,
  Calendar,
  UtensilsCrossed,
  RefreshCw,
  Trash2,
  Plus,
  DollarSign
} from "lucide-react";

export default function MealPlanner() {
  const meals = ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"];
  
  const [mealData, setMealData] = useState(
    meals.map(meal => ({
      name: meal,
      items: [{ 
        img: '', 
        foodName: '', 
        gram: false, 
        cal: false, 
        pro: false,
        price: '0' 
      }]
    }))
  );

  const [calorieGoal, setCalorieGoal] = useState(2000);
  const [proteinGoal, setProteinGoal] = useState(120);
  const [budgetGoal, setBudgetGoal] = useState(50);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Calculate totals for progress bars
  const getTotalCalories = () => {
    return mealData.reduce((total, meal) => {
      return total + meal.items.reduce((mealTotal, item) => {
        return mealTotal + (item.cal ? 100 : 0); // Using checkbox as placeholder
      }, 0);
    }, 0);
  };

  const getTotalProtein = () => {
    return mealData.reduce((total, meal) => {
      return total + meal.items.reduce((mealTotal, item) => {
        return mealTotal + (item.pro ? 10 : 0); // Using checkbox as placeholder
      }, 0);
    }, 0);
  };

  const getTotalBudget = () => {
    return mealData.reduce((total, meal) => {
      return total + meal.items.reduce((mealTotal, item) => {
        return mealTotal + (parseFloat(item.price) || 0);
      }, 0);
    }, 0);
  };

  // Function to add a new food item
  const addFoodItem = (mealIndex) => {
    const updatedMeals = [...mealData];
    updatedMeals[mealIndex].items.push({ 
      img: '', 
      foodName: '', 
      gram: false, 
      cal: false, 
      pro: false,
      price: '0'
    });
    setMealData(updatedMeals);
  };

  // Function to remove a food item
  const removeFoodItem = (mealIndex, itemIndex) => {
    const updatedMeals = [...mealData];
    updatedMeals[mealIndex].items.splice(itemIndex, 1);
    
    // Make sure there's always at least one food item
    if (updatedMeals[mealIndex].items.length === 0) {
      updatedMeals[mealIndex].items.push({ 
        img: '', 
        foodName: '', 
        gram: false, 
        cal: false, 
        pro: false,
        price: '0'
      });
    }
    
    setMealData(updatedMeals);
  };

  // Function to refresh/reset a meal
  const refreshMeal = (mealIndex) => {
    const updatedMeals = [...mealData];
    updatedMeals[mealIndex].items = [{ 
      img: '', 
      foodName: '', 
      gram: false, 
      cal: false, 
      pro: false,
      price: '0'
    }];
    setMealData(updatedMeals);
  };

  // Function to update a food item
  const updateFoodItem = (mealIndex, itemIndex, field, value) => {
    const updatedMeals = [...mealData];
    updatedMeals[mealIndex].items[itemIndex][field] = value;
    setMealData(updatedMeals);
  };

  // Function to toggle a checkbox
  const toggleCheckbox = (mealIndex, itemIndex, field) => {
    const updatedMeals = [...mealData];
    updatedMeals[mealIndex].items[itemIndex][field] = !updatedMeals[mealIndex].items[itemIndex][field];
    setMealData(updatedMeals);
  };

  // Navigate between dates
  const changeDate = (days) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + days);
    setCurrentDate(newDate);
  };

  // Format the current date for display
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Calculate percentages for progress bars
  const caloriePercentage = Math.min(Math.round((getTotalCalories() / calorieGoal) * 100), 100);
  const proteinPercentage = Math.min(Math.round((getTotalProtein() / proteinGoal) * 100), 100);
  const budgetPercentage = Math.min(Math.round((getTotalBudget() / budgetGoal) * 100), 100);

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
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Budget Goal:</span>
            <input
              type="number"
              value={budgetGoal}
              onChange={(e) => setBudgetGoal(e.target.value)}
              className="w-20 p-1 border border-gray-300 rounded"
            />
          </div>
        </div>
      </div>

      {/* Date Navigation */}
      <div className="flex justify-between items-center mb-4 bg-white p-3 rounded-lg shadow-sm">
        <button 
          onClick={() => changeDate(-1)}
          className="p-2 bg-blue-100 rounded-full hover:bg-blue-200"
        >
          <ArrowLeft size={18} />
        </button>
        
        <div className="flex items-center">
          <Calendar className="mr-2 text-blue-500" />
          <span className="font-medium">{formatDate(currentDate)}</span>
        </div>
        
        <button 
          onClick={() => changeDate(1)}
          className="p-2 bg-blue-100 rounded-full hover:bg-blue-200"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 bg-blue-100 font-bold border-b border-gray-300">
          <div className="p-3 border-r border-gray-300 flex items-center">
            <UtensilsCrossed className="w-5 h-5 mr-2" />
            Intake
          </div>
          <div className="p-3 border-r border-gray-300 flex items-center">
            <Flame className="w-5 h-5 mr-2" />
            Diet Plan
          </div>
          <div className="p-3 flex items-center">
            <DollarSign className="w-5 h-5 mr-2" />
            Budget Plan
          </div>
        </div>

        {mealData.map((meal, mealIndex) => (
          <div key={mealIndex} className="grid grid-cols-3 border-b border-gray-300">
            {/* Meal Name Column */}
            <div className="p-3 border-r border-gray-300 flex justify-between items-center">
              <span className="font-medium">{meal.name}</span>
              <button 
                onClick={() => refreshMeal(mealIndex)}
                className="p-1 text-gray-500 hover:text-blue-500"
                title="Refresh meal"
              >
                <RefreshCw size={16} />
              </button>
            </div>
            
            {/* Diet Plan Column */}
            <div className="p-3 border-r border-gray-300">
              {meal.items.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-3 last:mb-0 bg-white p-2 rounded-md shadow-sm">
                  <div className="flex mb-2">
                    <div className="w-16 h-16 bg-gray-200 rounded flex justify-center items-center mr-2">
                      {item.img ? (
                        <img src={item.img} alt="Food" className="w-full h-full object-cover rounded" />
                      ) : (
                        <UtensilsCrossed className="w-8 h-8 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-grow">
                      <input
                        type="text"
                        placeholder="Food name"
                        value={item.foodName}
                        onChange={(e) => updateFoodItem(mealIndex, itemIndex, 'foodName', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mb-1"
                      />
                      <div className="flex space-x-2 text-sm">
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
                    <button 
                      onClick={() => removeFoodItem(mealIndex, itemIndex)}
                      className="ml-2 text-red-500 hover:text-red-700"
                      title="Remove food"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={() => addFoodItem(mealIndex)}
                className="mt-2 py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm flex items-center"
              >
                <Plus size={16} className="mr-1" /> Add Food
              </button>
            </div>
            
            {/* Budget Plan Column */}
            <div className="p-3">
              {meal.items.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-3 last:mb-0 bg-white p-2 rounded-md shadow-sm">
                  <div className="flex mb-2">
                    <div className="w-16 h-16 bg-gray-200 rounded flex justify-center items-center mr-2">
                      {item.img ? (
                        <img src={item.img} alt="Food" className="w-full h-full object-cover rounded" />
                      ) : (
                        <DollarSign className="w-8 h-8 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-grow">
                      <input
                        type="text"
                        placeholder="Food name"
                        value={item.foodName}
                        onChange={(e) => updateFoodItem(mealIndex, itemIndex, 'foodName', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded mb-1"
                      />
                      <div className="flex items-center">
                        <span className="mr-2">Price: $</span>
                        <input
                          type="number"
                          placeholder="0.00"
                          value={item.price}
                          onChange={(e) => updateFoodItem(mealIndex, itemIndex, 'price', e.target.value)}
                          className="w-24 p-1 border border-gray-300 rounded"
                          min="0"
                          step="0.01"
                        />
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFoodItem(mealIndex, itemIndex)}
                      className="ml-2 text-red-500 hover:text-red-700"
                      title="Remove food"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={() => addFoodItem(mealIndex)}
                className="mt-2 py-1 px-3 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm flex items-center"
              >
                <Plus size={16} className="mr-1" /> Add Food
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Nutritional Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {/* Calories */}
        <div className="p-4 bg-white rounded-xl shadow-md">
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
            <Flame className="text-red-500" />
            Calories Consumed
          </div>
          <div className="w-full bg-red-100 rounded-full h-2">
            <div className="bg-red-500 h-2 rounded-full" style={{ width: `${caloriePercentage}%` }} />
          </div>
          <p className="text-xs text-right mt-1 text-gray-500">{getTotalCalories()} / {calorieGoal} cal</p>
        </div>

        {/* Protein */}
        <div className="p-4 bg-white rounded-xl shadow-md">
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
            <Drumstick className="text-yellow-500" />
            Protein Intake
          </div>
          <div className="w-full bg-yellow-100 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${proteinPercentage}%` }} />
          </div>
          <p className="text-xs text-right mt-1 text-gray-500">{getTotalProtein()}g / {proteinGoal}g protein</p>
        </div>

        {/* Budget */}
        <div className="p-4 bg-white rounded-xl shadow-md">
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
            <DollarSign className="text-green-500" />
            Budget Used
          </div>
          <div className="w-full bg-green-100 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${budgetPercentage}%` }} />
          </div>
          <p className="text-xs text-right mt-1 text-gray-500">${getTotalBudget().toFixed(2)} / ${budgetGoal} budget</p>
        </div>
      </div>
    </div>
  );
}