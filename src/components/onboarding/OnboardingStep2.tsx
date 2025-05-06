// src/components/OnboardingStep2.tsx
import React from "react";
import { Checkbox } from "../ui/Checkbox";

interface Props {
  usage: string[];
  onToggle: (val: string) => void;
}

const options = ["Buying and selling", "Buying", "Selling"];

export const OnboardingStep2: React.FC<Props> = ({ usage, onToggle }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      {/* Progress Bar */}
      <div className="flex justify-between gap-4 mb-12">
        {["1", "2", "3"].map((step, i) => (
          <div key={step} className="flex flex-col items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full ${
                step === "2" ? "bg-blue-600 text-white" : "bg-white"
              } border-2 border-gray-300 flex items-center justify-center font-bold mb-2`}
            >
              {step}
            </div>
            <p className="text-gray-500 text-sm text-center">
              {["Team Name", "Primary Usage", "Team Members"][i]}
            </p>
          </div>
        ))}
      </div>

      {/* Heading */}
      <h1 className="text-center text-3xl font-bold mb-4">
        Set Your <strong>Primary Usage</strong>
      </h1>
      <p className="text-center text-gray-600 text-lg mb-8">
        Choose how you’ll primarily use the platform
      </p>

      {/* Checkboxes */}
      <div className="w-full max-w-md mx-auto mb-6 space-y-4">
        {options.map((opt) => (
          <div key={opt} className="flex items-center gap-3">
            <Checkbox
              label={opt}
              checked={usage.includes(opt)}
              onChange={() => onToggle(opt)}
            />
          </div>
        ))}
      </div>

      <button className="w-full max-w-md mx-auto block bg-blue-600 hover:bg-blue-700 text-white py-3 text-base rounded-md">
        Continue
      </button>
    </div>
  );
};
