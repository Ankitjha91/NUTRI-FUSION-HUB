import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Flame,
  Drumstick,
  Calendar,
  UtensilsCrossed,
} from "lucide-react";

const meals = ["Breakfast", "Morning Snack", "Lunch", "Evening Snack", "Dinner"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function FoodItem() {
  return (
    <div className="flex flex-col items-center gap-2 p-3 border rounded-lg shadow-sm bg-white hover:shadow-md transition">
      <div className="w-14 h-14 bg-gray-200 rounded-md" />
      <span className="text-sm font-medium text-gray-700">Food Name</span>
      <div className="text-xs text-gray-500 text-center">100g | 250 cal | 10g protein</div>
    </div>
  );
}

function MealRow({ meal }) {
  return (
    <div className="grid grid-cols-5 gap-4 py-2 items-center ">
      <div className="text-sm font-semibold col-span-1 text-green-800">{meal}</div>
      <div className="col-span-4 flex gap-3">
        {[...Array(5)].map((_, idx) => (
          <FoodItem key={idx} />
        ))}
      </div>
    </div>
  );
}

export default function WeightGain() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(0);
  const [dietType, setDietType] = useState("veg");

  return (
    <div className="p-4 my-2 max-w-6xl mx-auto bg-green-50 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-green-700 mb-4 bg-green-200 hover:bg-green-300 hover:text-green-900 rounded-lg px-4 py-2 flex items-center gap-1 font-medium transition-all"
      >
        ← Back
      </button>

      {/* Page Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-green-700 flex items-center justify-center gap-2">
        Weight Gain <Calendar className="w-6 h-6" />
        </h1>
        <p className="text-sm text-gray-600 mt-1">Note: 1 Week Plan</p>
      </div>

      {/* Diet Type Toggle */}
      <div className="flex justify-center gap-6 mb-6">
        {["veg", "non-veg"].map((type) => (
          <button
            key={type}
            onClick={() => setDietType(type)}
            className={`px-4 py-2 rounded-full border ${
              dietType === type
                ? "bg-green-600 text-white border-green-700"
                : "bg-white text-gray-700 border-gray-300"
            } shadow-sm hover:shadow-md transition-all`}
          >
            {type === "veg" ? "🥦 Veg" : "🍗 Non-Veg"}
          </button>
        ))}
      </div>

      {/* Day Navigation */}
      <div className="flex justify-center items-center gap-3 mb-6">
        <ArrowLeft
          onClick={() => setSelectedDay((prev) => Math.max(0, prev - 1))}
          className="cursor-pointer text-green-700"
        />
        <div className="flex gap-2">
          {days.map((day, idx) => (
            <button
              key={day}
              onClick={() => setSelectedDay(idx)}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                selectedDay === idx
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700"
              } border border-green-200`}
            >
              {day}
            </button>
          ))}
        </div>
        <ArrowRight
          onClick={() => setSelectedDay((prev) => Math.min(days.length - 1, prev + 1))}
          className="cursor-pointer text-green-700"
        />
      </div>

      {/* Meal Plan Section */}
      <div className="space-y-5 bg-white p-6 rounded-xl shadow-md mb-10">
        <h2 className="text-xl font-semibold text-green-700 flex items-center gap-2">
          <UtensilsCrossed className="w-5 h-5" /> Diet Plan for {days[selectedDay]}
        </h2>
        {meals.map((meal, idx) => (
          <MealRow key={idx} meal={meal} />
        ))}
      </div>

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
  );
}
