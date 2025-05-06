// src/components/ui/Checkbox.tsx
import React from "react";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <label className="flex items-center space-x-2">
      <input type="checkbox" className="accent-blue-600" {...props} />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
};
