// src/components/OnboardingStep1.tsx
import React from "react";
import { Input } from "../ui/Input";

interface Props {
  teamName: string;
  onChange: (val: string) => void;
}

export const OnboardingStep1: React.FC<Props> = ({ teamName, onChange }) => {
  return (
    <div className="flex flex-col items-center px-5 py-12 min-h-screen text-center font-inter bg-white">
      {/* Progress Steps */}
      <div className="flex gap-10 mb-10">
        <div className="flex flex-col items-center text-sm text-gray-900">
          <div className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold mb-2">1</div>
          <p>Team Name</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-900">
          <div className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center font-semibold mb-2">2</div>
          <p>Primary Usage</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-900">
          <div className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center font-semibold mb-2">3</div>
          <p>Team Members</p>
        </div>
      </div>

      <h1 className="text-2xl font-semibold mb-2 text-gray-900">
        Set <strong>Team Name</strong>
      </h1>
      <p className="text-sm text-gray-600">This name will be visible to your teammates</p>
      <p className="text-xs text-gray-400 mb-8">You can change this later in your team settings</p>

      <div className="w-full max-w-md text-left mb-8">
        <label htmlFor="teamName" className="block text-sm font-medium text-gray-700 mb-2">
          Team Name
        </label>
        <Input
          id="teamName"
          label=""
          value={teamName}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter your team name"
        />
      </div>

      <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 text-sm rounded">
        Continue
      </button>
    </div>
  );
};
