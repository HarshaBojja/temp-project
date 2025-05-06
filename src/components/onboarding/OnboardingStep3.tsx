import React from "react";
import { ProgressBar } from "../ui/ProgressBar";

interface Member {
  email: string;
  role: string;
}

interface Props {
  teamMembers: Member[];
  onChange: (val: Member[]) => void;
  currentStep: number;
  onSubmit: () => void;
}

const roles = ["Sales", "Marketing", "Developer"];

export const OnboardingStep3: React.FC<Props> = ({ teamMembers, onChange, currentStep, onSubmit }) => {
  const steps = ["Team Name", "Primary Usage", "Team Members"];

  const handleAddMember = () => {
    onChange([...teamMembers, { email: "", role: "Sales" }]);
  };

  const handleChange = (index: number, field: keyof Member, value: string) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    onChange(updated);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50">
      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} steps={steps} />

      {/* Heading */}
      <h1 className="text-3xl font-semibold mb-4 text-gray-900">Add Team Members</h1>
      <p className="text-sm text-gray-600 mb-8">
        Add Your Team Members And Set Their Roles.
      </p>

      {/* Member Inputs */}
      <div className="w-full max-w-md flex flex-col gap-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex gap-4">
            <input
              type="email"
              placeholder="Email"
              value={member.email}
              onChange={(e) => handleChange(index, "email", e.target.value)}
              className="flex-1 px-4 py-2 border rounded-md"
            />
            <select
              value={member.role}
              onChange={(e) => handleChange(index, "role", e.target.value)}
              className="w-40 px-3 py-2 border rounded-md"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Add Another Member - Aligned to Right */}
      <div className="w-full max-w-md flex justify-end">
        <button
          onClick={handleAddMember}
          className="mt-4 text-black border border-black rounded-md px-4 py-2 hover:bg-gray-100"
        >
          Add Another Member
        </button>
      </div>

      {/* Info Text */}
      <p className="text-sm text-gray-600 mb-2 mt-8">
        You can edit members and their roles later in your settings.
      </p>

      {/* Action Buttons (Stacked) */}
      <div className="mt-8 flex flex-col gap-4 items-center">
        <button className="px-6 py-3 border border-gray-400 rounded-md text-gray-700 w-full max-w-sm">
          Skip For Now
        </button>
        <button
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 w-full max-w-sm"
          onClick={onSubmit}
        >
          Add Your Team
        </button>
      </div>
    </div>
  );
};