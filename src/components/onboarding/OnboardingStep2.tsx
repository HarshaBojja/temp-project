import React from "react";
import { ProgressBar } from "../ui/ProgressBar";

interface Props {
  usage: string;
  onSelect: (val: string) => void;
  currentStep: number;
  onNext: () => void; // Function to go to the next step
}

const options = ["Buying and selling", "Buying", "Selling"];

export const OnboardingStep2: React.FC<Props> = ({ usage, onSelect, currentStep, onNext }) => {
  const steps = ["Team Name", "Primary Usage", "Team Members"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50">
      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} steps={steps} />

      {/* Heading */}
      <h1 className="text-3xl font-semibold mb-4 text-gray-900">Set Primary Usage</h1>
      <p className="text-sm text-gray-600 mb-6">
        Choose What You'll Use The Platform For Primarily
      </p>
      <p className="text-sm text-gray-400 mb-8">You Can Change This Anytime In Your Settings</p>

      {/* Radio Options */}
      <div className="w-full max-w-md mx-auto flex flex-col gap-4 items-center">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              value={opt}
              checked={usage === opt}
              onChange={() => onSelect(opt)}
              className="form-radio text-black border-gray-300 focus:ring-black"
            />
            <span className="text-lg text-gray-700">{opt}</span>
          </label>
        ))}
      </div>

      {/* Button */}
      <button
        className="mt-6 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md"
        onClick={() => {
          if (!usage) {
            alert("Please select a primary usage.");
            return;
          }
          onNext(); // Navigate to the next step
        }}
      >
        Add Your Team
      </button>
    </div>
  );
};