// src/pages/Onboarding.tsx
import React, { useState } from "react";
import { OnboardingStep1 } from "../components/onboarding/OnboardingStep1";
import { OnboardingStep2 } from "../components/onboarding/OnboardingStep2";
import { OnboardingStep3 } from "../components/onboarding/OnboardingStep3";
import { Button } from "../components/ui/Button";

interface TeamMember {
  email: string;
  role: string;
}

export const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const [teamName, setTeamName] = useState("");
  const [usage, setUsage] = useState<string[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { email: "", role: "Sales" },
  ]);

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const toggleUsage = (val: string) => {
    setUsage((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  const handleSubmit = () => {
    console.log({
      teamName,
      usage,
      teamMembers,
    });
    // Add actual submission logic here
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded shadow-sm space-y-6 bg-white">
      {step === 1 && (
        <OnboardingStep1 teamName={teamName} onChange={setTeamName} />
      )}
      {step === 2 && <OnboardingStep2 usage={usage} onToggle={toggleUsage} />}
      {step === 3 && (
        <OnboardingStep3
          teamMembers={teamMembers}
          onChange={setTeamMembers}
        />
      )}

      <div className="flex justify-between pt-4">
        {step > 1 && <Button onClick={prevStep}>Back</Button>}
        {step < 3 ? (
          <Button onClick={nextStep}>Next</Button>
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
      </div>
    </div>
  );
};
