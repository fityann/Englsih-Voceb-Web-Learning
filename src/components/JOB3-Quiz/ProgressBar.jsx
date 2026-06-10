import React from 'react';

export default function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full bg-[#1E1E1E] rounded h-2 border border-[#333333] overflow-hidden">
      <div 
        className="bg-[#3DDC84] h-full transition-all duration-500 ease-in-out relative"
        style={{ width: `${percentage}%` }}
      >
        <div className="absolute top-0 left-0 bottom-0 right-0 overflow-hidden">
          {/* Animated stripes effect like Gradle build */}
          <div className="w-full h-full bg-white opacity-20 transform -skew-x-12 translate-x-[-100%] animate-[slide_2s_linear_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
