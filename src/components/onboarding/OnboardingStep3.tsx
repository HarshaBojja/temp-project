// src/components/OnboardingStep3.tsx
import React from "react";

interface Member {
  email: string;
  role: string;
}

interface Props {
  teamMembers: Member[];
  onChange: (val: Member[]) => void;
}

const roles = ["Sales", "Marketing", "Developer"];

export const OnboardingStep3: React.FC<Props> = ({ teamMembers, onChange }) => {
  const handleAddMember = () => {
    onChange([...teamMembers, { email: "", role: "Sales" }]);
  };

  const handleChange = (index: number, field: keyof Member, value: string) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    onChange(updated);
  };

  return (
    <div className="flex flex-col items-center px-5 py-12 min-h-screen font-inter bg-white">
      {/* Progress */}
      <div className="flex gap-10 mb-10">
        {["✓", "✓", "3"].map((step, i) => (
          <div key={i} className="flex flex-col items-center text-sm text-gray-900">
            <div
              className={`w-9 h-9 rounded-full ${
                step === "✓" ? "bg-gray-900 text-white" : "border-2 border-black"
              } flex items-center justify-center font-semibold mb-2`}
            >
              {step}
            </div>
            <p>{["Team Name", "Primary Usage", "Team Members"][i]}</p>
          </div>
        ))}
      </div>

      {/* Heading */}
      <h1 className="text-2xl font-semibold mb-2 text-gray-900">
        Add <strong>Team Members</strong>
      </h1>
      <p className="text-sm text-gray-600 mb-8">
        Add Your Team Members And Set Their Roles.
      </p>

      {/* Inputs */}
      <div className="flex flex-col gap-4 w-full max-w-2xl mb-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex gap-4">
            <input
              type="email"
              placeholder="Email"
              value={member.email}
              onChange={(e) => handleChange(index, "email", e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
            />
            <select
              value={member.role}
              onChange={(e) => handleChange(index, "role", e.target.value)}
              className="w-40 px-3 py-2 border border-gray-300 rounded-md"
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

      <button
        onClick={handleAddMember}
        className="text-blue-600 hover:underline mb-6"
      >
        + Add Another Member
      </button>

      <p className="text-xs text-gray-400 mb-6">
        You can edit members and roles anytime in your settings
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-2 border border-gray-400 text-gray-700 rounded-md">
          Skip For Now
        </button>
        <button className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800">
          Add Your Team
        </button>
      </div>
    </div>
  );
};
