import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CalorieSelector from "../components/CalorieSelector";
import { motion, AnimatePresence } from "framer-motion";
import MealPlanner from "../components/MealPlanner";





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

function FoodItemInput() {
  return (
    <div className="flex flex-col text-xs col-span-2">
      <input type="text" placeholder="Img" className="w-16 border-gray-300 rounded-md text-center" />
      <input type="text" placeholder="Name" className="w-full border-gray-300 rounded-md" />
      <div className="flex gap-1">
        <input type="text" placeholder="g" className="w-10 border-gray-300 rounded-md text-right" />
        <input type="text" placeholder="Cal" className="w-10 border-gray-300 rounded-md text-right" />
        <input type="text" placeholder="Pro" className="w-10 border-gray-300 rounded-md text-right" />
      </div>
      <input type="checkbox" className="self-center" />
    </div>
  );
}

function BudgetItemInput() {
  return (
    <div className="flex flex-col text-xs ">
      <input type="text" placeholder="Img" className="w-16 border-gray-300 rounded-md text-center" />
      <input type="text" placeholder="Name" className="w-full border-gray-300 rounded-md" />
      <input type="text" placeholder="Cost" className="w-full border-gray-300 rounded-md text-right" />
    </div>
  );
}

function MealRow({ meal }) {
  return (
    
    <div className="grid grid-cols-6 gap-2 py-2 items-center outline outline-1 outline-gray-200 rounded-md p-2 text-sm col-span-2">
      <div className="font-semibold text-green-800">{meal}</div> {/* Intake (Meal Time) */}
      <div className="flex flex-col"> {/* Diet Plan - Image */}
        <div className="bg-gray-200 rounded-md h-8 w-12 outline outline-1 outline-gray-300" />
      </div>
      <div className="flex flex-col"> {/* Diet Plan - Food Name */}
        <span className="outline outline-1 outline-gray-300 px-1">Food Name</span>
      </div>
      <div className="flex flex-col items-center"> {/* Diet Plan - Grams/Cal/Protein */}
        <span className="outline outline-1 outline-gray-300 px-1">g/Cal/Pro</span>
      </div>
      <div className="flex flex-col"> {/* Budget Plan - Image */}
        <div className="bg-gray-200 rounded-md h-8 w-12 outline outline-1 outline-gray-300" />
      </div>
      <div className="flex flex-col"> {/* Budget Plan - Food Name/Cost */}
        <span className="outline outline-1 outline-gray-300 px-1">Food/Cost</span>
      </div>
    </div>
  );
}

function MealRowWithInputs({ meal }) {
  return (
    <div className="grid grid-cols-6 gap-2 py-2 items-center outline outline-1 outline-gray-200 rounded-md p-2 text-xs col-span-2">
      <div className="font-semibold text-green-800">{meal}</div> {/* Intake (Meal Time) */}
      <FoodItemInput /> {/* Diet Plan Inputs */}
      <BudgetItemInput /> {/* Budget Plan Inputs */}
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="grid grid-cols-6 gap-2 py-2 font-semibold text-gray-700 outline outline-1 outline-gray-300 rounded-md p-2 bg-gray-100 ">
      <div className="col-span-2 ">Intake</div>
      <div className="col-span-2 text-center">Diet Plan</div>
      <div className="col-span-2 text-center">Budget Plan</div>
    </div>
  );
}

export default function MaintainWeight() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(0);
  const [dietType, setDietType] = useState("veg");

  const caloriePoints = [500, 1000, 1500, 2000];
  const [selectedCalories, setSelectedCalories] = useState(1000);

  const moveArrowLeft = () => {
    const currentIndex = caloriePoints.indexOf(selectedCalories);
    if (currentIndex > 0) {
      setSelectedCalories(caloriePoints[currentIndex - 1]);
    }
  };

  const moveArrowRight = () => {
    const currentIndex = caloriePoints.indexOf(selectedCalories);
    if (currentIndex < caloriePoints.length - 1) {
      setSelectedCalories(caloriePoints[currentIndex + 1]);
    }
  };

  const getArrowPosition = () => {
    const index = caloriePoints.indexOf(selectedCalories);
    const angle = 180 * (index / (caloriePoints.length - 1));
    const radius = 100;
    const x = 120 + radius * Math.cos((angle - 180) * (Math.PI / 180));
    const y = 120 + radius * Math.sin((angle - 180) * (Math.PI / 180));
    return { x, y };
  };

  const { x, y } = getArrowPosition();

  return (
    <div className="p-4 my-2 max-w-6xl mx-auto bg-green-50 min-h-screen">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-green-600 mb-6 bg-green-200 hover:bg-green-300 hover:text-green-800 rounded-lg px-4 py-2 flex flex-col items-center border-2 border-transparent hover:border-green-500 transition-all duration-300 ease-in-out transform hover:scale-105 font-medium"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 67" width="100" height="20">
          <path d="M2 35 Q30 10 80 25 Q100 30 115 28 Q114 34 100 38 Q60 55 25 45 Q10 40 2 35 Z" fill="silver" stroke="black" stroke-width="1"/>
          <path d="M80 25 Q85 35 90 40 Q100 50 110 45 Q113 40 115 28 Q105 35 95 30 Q85 28 80 25 Z" fill="#8B4513" stroke="black" stroke-width="1"/>
        </svg>
        <span>Back</span>
      </button>

      {/* Page Header */}
      <div className="flex flex-col items-center justify-center my-10">
        <h1 className="text-3xl font-bold text-green-700 flex items-center gap-2 mb-4">
          Maintain Weight <Calendar className="w-6 h-6" />
        </h1>
        <p className="text-sm text-gray-600 mb-6">Select Calories for 1 Week Plan</p>

        {/* Calorie Curve Selector */}
        <CalorieSelector />
      </div>

      {/* Diet Type Switch */}
      <div className="flex flex-col items-center gap-4 mb-6">
        {/* Diet Type Switch */}
        <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-green-600 shadow-md flex">
          {/* Left Side - Veg */}
          <button
            onClick={() => setDietType("veg")}
            className={`w-1/2 h-full flex items-center justify-center transition-all duration-300 ${
              dietType === "veg" ? "bg-green-600 text-white" : "bg-white text-gray-700"
            }`}
            style={{ borderRight: "1px solid #ccc" }}
          >
            🥦
          </button>

          {/* Right Side - Non-Veg */}
          <button
            onClick={() => setDietType("non-veg")}
            className={`w-1/2 h-full flex items-center justify-center transition-all duration-300 ${
              dietType === "non-veg" ? "bg-red-600 text-white" : "bg-white text-gray-700"
            }`}
          >
            🍗
          </button>
        </div>

        {/* Diet Type Text */}
        {dietType && (
          <p
            className={`text-lg font-semibold ${
              dietType === "veg" ? "text-green-600" : "text-red-600"
            }`}
          >
            {dietType === "veg" ? "Veg" : "Non-Veg"}
          </p>
        )}
      </div>

      {/* Day Navigation */}
      <div className="flex justify-center items-center gap-4 mb-6">
        {/* Previous Day */}
        <motion.span
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="px-3 py-1 rounded-md text-sm font-medium text-white bg-green-600 border border-green-100"
        >
          {days[(selectedDay - 1 + days.length) % days.length]}
        </motion.span>

        {/* Left Arrow */}
        <ArrowLeft
          onClick={() => setSelectedDay((prev) => (prev - 1 + days.length) % days.length)}
          className="cursor-pointer text-green-700 hover:scale-110 transition-transform"
        />

        {/* Selected Day */}
        <motion.span
          initial={{ scale: 0.9 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="px-4 py-2 rounded-md text-base font-semibold bg-green-600 text-white shadow"
        >
          {days[selectedDay]}
        </motion.span>

        {/* Right Arrow */}
        <ArrowRight
          onClick={() => setSelectedDay((prev) => (prev + 1) % days.length)}
          className="cursor-pointer text-green-700 hover:scale-110 transition-transform"
        />

        {/* Next Day */}
        <motion.span
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="px-3 py-1 rounded-md text-sm font-medium text-white bg-green-600 border border-green-100"
        >
          {days[(selectedDay + 1) % days.length]}
        </motion.span>
      </div>

      {/* Meal Plan Section */}
      <MealPlanner/>

    


      
    </div>
  );
}