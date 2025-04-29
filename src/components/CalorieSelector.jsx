import React, { useState } from "react";

const CalorieSelector = () => {
  const caloriePoints = [0, 500, 1000, 1500, 2000];
  const [selectedCalories, setSelectedCalories] = useState(1000);

  const radius = 100;
  const centerX = 120;
  const centerY = 120;

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const dx = clickX - centerX;
    const dy = clickY - centerY;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);

    if (angle > 0) angle = 180; // restrict clicking outside semi-circle
    if (angle < -180) angle = -180;

    const percent = (angle + 180) / 180;
    const closestIdx = Math.round(percent * (caloriePoints.length - 1));

    setSelectedCalories(caloriePoints[closestIdx]);
  };

  const getCoordinates = (angleDeg, r = radius) => {
    const angleRad = (angleDeg - 180) * (Math.PI / 180);
    return {
      x: centerX + r * Math.cos(angleRad),
      y: centerY + r * Math.sin(angleRad),
    };
  };

  const selectedIdx = caloriePoints.indexOf(selectedCalories);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[400px] h-[300px] ">
        <svg viewBox="-20 0 280 180" className="w-full h-full" onClick={handleClick}>
          {/* Full Green Semi Circle */}
          <path
            d="M 20 120 A 100 100 0 0 1 220 120"
            stroke="#4ade80"
            strokeWidth="8"
            fill="none"
          />

          {/* Selected Red Semi Circle */}
          <path
            d={`M 20 120 A 100 100 0 0 1 ${getCoordinates(180 * (selectedIdx / (caloriePoints.length - 1))).x} ${getCoordinates(180 * (selectedIdx / (caloriePoints.length - 1))).y}`}
            stroke="#f87171"
            strokeWidth="8"
            fill="none"
          />

          {/* Calorie Labels */}
          {caloriePoints.map((cal, idx) => {
            const pos = getCoordinates(180 * (idx / (caloriePoints.length - 1)), radius + 20); // outside

            return (
              <text
                key={cal}
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-xs fill-green-700 font-semibold"
              >
                {cal}
              </text>
            );
          })}

          {/* Yellow Selected Dot */}
          {caloriePoints.map((cal, idx) => {
            if (cal === selectedCalories) {
              const pos = getCoordinates(180 * (idx / (caloriePoints.length - 1)));

              return (
                <circle
                  key={`dot-${cal}`}
                  cx={pos.x}
                  cy={pos.y}
                  r="6"
                  fill="yellow"
                  stroke="red"
                  strokeWidth="2"
                />
              );
            }
            return null;
          })}

          {/* Arrow inside pointing up */}
          {(() => {
            const pos = getCoordinates(180 * (selectedIdx / (caloriePoints.length - 1)), radius - 20);

            return (
              <text
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="20"
                className="fill-green-700"
              >
                ▲
              </text>
            );
          })()}
        </svg>

        {/* Selected Calories Display */}
        <div className="mt-[-30px] text-green-700 font-bold text-lg text-center">
          Selected: {selectedCalories} Calories
        </div>
      </div>
    </div>
  );
};

export default CalorieSelector;
