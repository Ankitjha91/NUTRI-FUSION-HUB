import { useState } from 'react';
import Bodybuilder from '../assets/Bodybuilder.jpg';

export default function WorkoutPlan() {
  const [activeTab, setActiveTab] = useState('fullBody');
  
  const workoutData = {
    fullBody: [
      {
        name: 'Burpees',
        targetedMuscle: 'Full Body (Chest, Shoulders, Triceps, Abs, Legs)',
        caloriesBurned: 'Approximately 100-150 calories per 10 minutes',
        time: '3 sets of 10-12 reps, 45-60 seconds rest between sets',
        repetitions: '10-12 reps'
      },
      {
        name: 'Mountain Climbers',
        targetedMuscle: 'Full Body (Core, Legs, Shoulders)',
        caloriesBurned: 'Approximately 70-100 calories per 10 minutes',
        time: '3 sets of 30-60 seconds, 30-45 seconds rest between sets',
        repetitions: 'Continuous movement for 30-60 seconds'
      },
      {
        name: 'Jumping Jacks',
        targetedMuscle: 'Full Body (Cardiovascular endurance)',
        caloriesBurned: 'Approximately 80-120 calories per 10 minutes',
        time: '3 sets of 30-60 seconds, 30-45 seconds rest between sets',
        repetitions: 'Continuous movement for 30-60 seconds'
      },
      {
        name: 'Squat Jumps',
        targetedMuscle: 'Full Body (Legs, Glutes, Core)',
        caloriesBurned: 'Approximately 80-120 calories per 10 minutes',
        time: '3 sets of 12-15 reps, 30-45 seconds rest between sets',
        repetitions: '12-15 reps'
      }
    ],
    chest: [
      {
        name: 'Push-ups',
        targetedMuscle: 'Chest (Pectoralis major), Triceps, and Shoulders',
        caloriesBurned: 'Approximately 50-70 calories per 10 minutes',
        time: '3 sets of 10-12 reps, 30-45 seconds rest between sets',
        repetitions: '10-12 reps'
      },
      {
        name: 'Incline Push-ups',
        targetedMuscle: 'Upper Chest',
        caloriesBurned: 'Approximately 50-70 calories per 10 minutes',
        time: '3 sets of 10-12 reps, 30-45 seconds rest between sets',
        repetitions: '10-12 reps'
      },
      {
        name: 'Chest Dips',
        targetedMuscle: 'Chest and Triceps',
        caloriesBurned: 'Approximately 70-100 calories per 10 minutes',
        time: '3 sets of 10-12 reps, 45-60 seconds rest between sets',
        repetitions: '10-12 reps'
      },
      {
        name: 'Chest Fly',
        targetedMuscle: 'Chest',
        caloriesBurned: 'Approximately 50-70 calories per 10 minutes',
        time: '3 sets of 12-15 reps, 30-45 seconds rest between sets',
        repetitions: '12-15 reps'
      }
    ],
    bicep: [
      {
        name: 'Bodyweight Bicep Curls',
        targetedMuscle: 'Biceps',
        caloriesBurned: 'Approximately 30-50 calories per 10 minutes',
        time: '3 sets of 12-15 reps, 30-45 seconds rest between sets',
        repetitions: '12-15 reps'
      },
      {
        name: 'Inverted Rows',
        targetedMuscle: 'Biceps and Back',
        caloriesBurned: 'Approximately 50-70 calories per 10 minutes',
        time: '3 sets of 10-12 reps, 45-60 seconds rest between sets',
        repetitions: '10-12 reps'
      },
      {
        name: 'Wall Push-aways with Bicep Curl',
        targetedMuscle: 'Biceps',
        caloriesBurned: 'Approximately 30-50 calories per 10 minutes',
        time: '3 sets of 12-15 reps, 30-45 seconds rest between sets',
        repetitions: '12-15 reps'
      },
      {
        name: 'Isometric Bicep Curls',
        targetedMuscle: 'Biceps',
        caloriesBurned: 'Approximately 20-30 calories per 10 minutes',
        time: '3 sets of 10-12 reps, 30-45 seconds rest between sets',
        repetitions: '10-12 reps (hold for 5-10 seconds)'
      }
    ],
    tricep: [
      {
        name: 'Tricep Dips',
        targetedMuscle: 'Triceps',
        caloriesBurned: 'Approximately 50-70 calories per 10 minutes',
        time: '3 sets of 10-12 reps, 30-45 seconds rest between sets',
        repetitions: '10-12 reps'
      },
      {
        name: 'Tricep Extensions',
        targetedMuscle: 'Triceps',
        caloriesBurned: 'Approximately 30-50 calories per 10 minutes',
        time: '3 sets of 12-15 reps, 30-45 seconds rest between sets',
        repetitions: '12-15 reps'
      },
      {
        name: 'Close-Grip Push-ups',
        targetedMuscle: 'Triceps and Chest',
        caloriesBurned: 'Approximately 50-70 calories per 10 minutes',
        time: '3 sets of 10-12 reps, 45-60 seconds rest between sets',
        repetitions: '10-12 reps'
      },
      {
        name: 'Skull Crushers',
        targetedMuscle: 'Triceps',
        caloriesBurned: 'Approximately 30-50 calories per 10 minutes',
        time: '3 sets of 10-12 reps, 30-45 seconds rest between sets',
        repetitions: '10-12 reps'
      }
    ],
    leg: [
      {
        name: 'Squats',
        targetedMuscle: 'Quadriceps, Hamstrings, and Glutes',
        caloriesBurned: 'Approximately 50-70 calories per 10 minutes',
        time: '3 sets of 12-15 reps, 30-45 seconds rest between sets',
        repetitions: '12-15 reps'
      },
      {
        name: 'Lunges',
        targetedMuscle: 'Quadriceps, Hamstrings, and Glutes',
        caloriesBurned: 'Approximately 50-70 calories per 10 minutes',
        time: '3 sets of 12-15 reps (per leg), 30-45 seconds rest between sets',
        repetitions: '12-15 reps (per leg)'
      },
      {
        name: 'Calf Raises',
        targetedMuscle: 'Calf Muscles',
        caloriesBurned: 'Approximately 20-30 calories per 10 minutes',
        time: '3 sets of 12-15 reps, 30-45 seconds rest between sets',
        repetitions: '12-15 reps'
      },
      {
        name: 'Glute Bridges',
        targetedMuscle: 'Glutes',
        caloriesBurned: 'Approximately 30-50 calories per 10 minutes',
        time: '3 sets of 12-15 reps, 30-45 seconds rest between sets',
        repetitions: '12-15 reps'
      }
    ],
    abs: [
        {
          name: 'Crunches',
          targetedMuscle: 'Abs (Rectus Abdominis)',
          caloriesBurned: 'Approximately 50-70 calories per 10 minutes',
          time: '3 sets of 15-20 reps, 30-45 seconds rest between sets',
          repetitions: '15-20 reps'
        },
        {
          name: 'Plank',
          targetedMuscle: 'Core (Abs, Obliques)',
          caloriesBurned: 'Approximately 30-50 calories per 10 minutes',
          time: '3 sets of 30-60 seconds, 30-45 seconds rest between sets',
          repetitions: 'Hold for 30-60 seconds'
        },
        {
          name: 'Bicycle Crunches',
          targetedMuscle: 'Abs (Obliques)',
          caloriesBurned: 'Approximately 60-90 calories per 10 minutes',
          time: '3 sets of 15-20 reps per side, 30-45 seconds rest between sets',
          repetitions: '15-20 reps per side'
        },
        {
          name: 'Leg Raises',
          targetedMuscle: 'Abs (Lower Abs)',
          caloriesBurned: 'Approximately 50-70 calories per 10 minutes',
          time: '3 sets of 12-15 reps, 30-45 seconds rest between sets',
          repetitions: '12-15 reps'
        }
      ]
  };
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleNavigateBack = () => {
    // You should replace this with your actual navigation logic
    // For example, if using React Router:
    // navigate('/');
    // Or for a simple back navigation:
    window.history.back();
  };
  
  return (
    <div className="bg-gradient-to-b from-white min-h-screen p-2 sm:p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header with back button and title */}
        <div className="p-4">
          <button
            onClick={handleNavigateBack}
            className="text-sm text-green-600 mb-4 md:mb-6 bg-green-200 hover:bg-green-300 hover:text-green-800 rounded-lg px-3 py-2 flex items-center border-2 border-transparent hover:border-green-500 transition-all duration-300 ease-in-out transform hover:scale-105 font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
        </div>
        
        {/* Hero banner with bodybuilder image */}
        <div className="relative h-60 sm:h-48 md:h-64 overflow-hidden bg-gray-900">
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-black/80 z-10 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">TRANSFORM YOUR BODY</h2>
              <p className="text-base sm:text-lg md:text-xl font-medium text-blue-200">Home workouts that deliver results</p>
            </div>
          </div>
          <img 
            src={Bodybuilder} 
            alt="Bodybuilder" 
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
        </div>
          
        <div className="p-3 sm:p-4 md:p-6">
          {/* Workout category tabs */}
          <div className="mb-4 md:mb-6 overflow-x-auto -mx-3 px-3">
            <div className="flex gap-1 sm:gap-2 md:justify-center min-w-max">
              {['fullBody', 'chest', 'bicep', 'tricep', 'leg', 'abs'].map((tab) => (
                <button 
                  key={tab}
                  className={`px-2 sm:px-3 md:px-4 py-2 md:py-3 font-medium text-xs sm:text-sm rounded-full transition-all whitespace-nowrap ${
                    activeTab === tab 
                      ? 'bg-green-600 text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab === 'fullBody' ? 'Full Body' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Workout content */}
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-3 sm:p-4 md:p-6 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-green-800 border-b-2 border-blue-200 pb-2 flex items-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              {activeTab === 'fullBody' ? 'Full Body' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Workout Routine
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              {workoutData[activeTab].map((exercise, index) => (
                <div key={index} className="bg-white rounded-xl p-3 sm:p-4 shadow-md hover:shadow-lg transition-all border border-blue-100">
                  <div className="flex flex-col sm:flex-row">
                    {/* Exercise Image Container - Added new section */}
                    <div className="mb-3 sm:mb-0 sm:mr-4 sm:w-1/3 md:w-1/4 flex-shrink-0">
                      <div className="bg-gray-100 rounded-lg border border-gray-200 aspect-square flex items-center justify-center overflow-hidden">
                        <div className="text-center p-2">
                          <svg className="w-10 h-10 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                          <p className="text-xs text-gray-500 mt-2">Add {exercise.name} Image/GIF</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Exercise Details */}
                    <div className="flex-1">
                      <div className="flex items-center mb-2 sm:mb-3">
                        <div className="bg-green-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center font-bold mr-2 sm:mr-3 flex-shrink-0">
                          {index + 1}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-green-800 break-words">{exercise.name}</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <div className="bg-blue-50 rounded-lg p-2 sm:p-3 flex items-start">
                          <div className="bg-blue-200 rounded-full p-1 sm:p-2 mr-2 sm:mr-3 flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76zM21 21H3v-2h18v2z"></path>
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium text-green-900 block text-xs sm:text-sm">Targeted Muscle</span>
                            <span className="text-gray-700 text-sm">{exercise.targetedMuscle}</span>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-2 sm:p-3 flex items-start">
                          <div className="bg-blue-200 rounded-full p-1 sm:p-2 mr-2 sm:mr-3 flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M12 1v2a9 9 0 1 1-9 9h-2c0 6.075 4.925 11 11 11s11-4.925 11-11-4.925-11-11-11zm0 4v7l4.2 2.4-1.4 1.4-5.8-3.3V5h3z"></path>
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium text-green-900 block text-xs sm:text-sm">Time/Sets</span>
                            <span className="text-gray-700 text-sm">{exercise.time}</span>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-2 sm:p-3 flex items-start">
                          <div className="bg-blue-200 rounded-full p-1 sm:p-2 mr-2 sm:mr-3 flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M19 6h-4V2h-6v4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 2v2H9v2h2v6H9v2h6v-2h-2v-6h2v-2h-2V8h2V6H9v2h2z"></path>
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium text-green-900 block text-xs sm:text-sm">Calories Burned</span>
                            <span className="text-gray-700 text-sm">{exercise.caloriesBurned}</span>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-2 sm:p-3 flex items-start">
                          <div className="bg-blue-200 rounded-full p-1 sm:p-2 mr-2 sm:mr-3 flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-700" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <path d="M18 7h-12v10h12v-10zm0 12h-12a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2z"></path>
                              <path d="M13 5h-2v4h2v-4zm0 12h-2v2h2v-2z"></path>
                            </svg>
                          </div>
                          <div>
                            <span className="font-medium text-green-900 block text-xs sm:text-sm">Repetitions</span>
                            <span className="text-gray-700 text-sm">{exercise.repetitions}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tips section */}
            <div className="mt-6 md:mt-8 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-3 sm:p-4 md:p-5 border border-blue-200">
              <h3 className="font-bold text-green-800 text-base sm:text-lg mb-2 sm:mb-3 flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v6h-2V7zm0 8h2v2h-2v-2z"></path>
                </svg>
                Pro Tips:
              </h3>
              <ul className="space-y-1 sm:space-y-2">
                <li className="flex items-start">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mt-1 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"></path>
                  </svg>
                  <span className="text-sm">Warm up with 5-10 minutes of light cardio (jogging in place, jumping jacks)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mt-1 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"></path>
                  </svg>
                  <span className="text-sm">Focus on proper form and technique throughout the exercises</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mt-1 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"></path>
                  </svg>
                  <span className="text-sm">Adjust the number of sets and reps according to your fitness level</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mt-1 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"></path>
                  </svg>
                  <span className="text-sm">Rest for 60-90 seconds between exercises</span>
                </li>
              </ul>
            </div>
            
            {/* Summary section */}
            <div className="mt-6 md:mt-8 bg-gradient-to-r from-green-800 to-green-600 rounded-xl p-4 md:p-6 text-white shadow-xl">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="mb-4 sm:mb-0">
                  <p className="text-blue-200 text-sm font-medium">Total Calories Burned</p>
                  <p className="text-xl sm:text-2xl font-bold flex items-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 22c5.523 0 10-4.477 10-10 0-4.4-2.845-8.136-6.799-9.473l-.201-.054-.2.001V2h-1.5v.521a3.004 3.004 0 0 0-1.6 5.433 3.003 3.003 0 0 0 2.7 3.822V17.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5v-6H10v6c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V2H6v10c0 .828-.672 1.5-1.5 1.5S3 12.828 3 12c0-4.4 2.845-8.136 6.799-9.473L10 2.473V2h-.5l-.299.054C5.327 3.59 2 7.479 2 12c0 5.523 4.477 10 10 10z"></path>
                    </svg>
                    {activeTab === 'fullBody' ? '250-400' : activeTab === 'chest' ? '200-350' : '150-250'} calories
                  </p>
                </div>
                <div>
                  <p className="text-blue-200 text-sm font-medium">Total Workout Time</p>
                  <p className="text-xl sm:text-2xl font-bold flex items-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7h4v2h-6V7h2v6z"></path>
                    </svg>
                    {activeTab === 'fullBody' ? '30-45' : activeTab === 'chest' ? '30-45' : '20-30'} minutes
                  </p>
                </div>
              </div>
              
              <button className="mt-4 w-full bg-white text-green-800 py-2 sm:py-3 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                </svg>
                Start Workout Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}