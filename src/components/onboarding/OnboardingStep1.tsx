import React from "react";
import { Input } from "../ui/Input";
import { ProgressBar } from "../ui/ProgressBar";

interface Props {
  teamName: string;
  onChange: (val: string) => void;
  currentStep: number;
  onNext: () => void; // Function to go to the next step
}

export const OnboardingStep1: React.FC<Props> = ({ teamName, onChange, currentStep, onNext }) => {
  const steps = ["Team Name", "Primary Usage", "Team Members"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50">
      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} steps={steps} />

      {/* Heading */}
      <h1 className="text-3xl font-semibold mb-4 text-gray-900">Set Your Team Name</h1>
      <p className="text-sm text-gray-600 mb-6">Set A Team Name For Your Company</p>

      {/* Input */}
      <div className="w-full max-w-md">
        <Input
          id="teamName"
          label=""
          value={teamName}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Team Name"
        />
      </div>

      {/* Button */}
      <button
        className="mt-6 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md"
        onClick={() => {
          if (!teamName.trim()) {
            alert("Please enter a team name.");
            return;
          }
          onNext(); // Navigate to the next step
        }}
      >
        Set Primary Usage
      </button>
    </div>
  );
};