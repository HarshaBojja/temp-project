import React, { useState } from "react";
import { OnboardingStep1 } from "../components/onboarding/OnboardingStep1";
import { OnboardingStep2 } from "../components/onboarding/OnboardingStep2";
import { OnboardingStep3 } from "../components/onboarding/OnboardingStep3";
import { ProgressBar } from "../components/ui/ProgressBar";

interface TeamMember {
  email: string;
  role: string;
}

export const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1); // Track the current step
  const [teamName, setTeamName] = useState(""); // Team name for step 1
  const [usage, setUsage] = useState<string>(""); // Primary usage for step 2
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { email: "", role: "Sales" },
  ]); // Team members for step 3

  // Submit the onboarding data
  const handleSubmit = () => {
    console.log({
      teamName,
      usage,
      teamMembers,
    });
    alert("Onboarding Complete!"); // Replace with actual submission logic
  };

  // Handle navigation logic
  const goToNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Render the onboarding steps conditionally */}
      {step === 1 && (
        <OnboardingStep1
          teamName={teamName}
          onChange={setTeamName}
          currentStep={step}
          onNext={goToNextStep} // Pass function to navigate to the next step
        />
      )}
      {step === 2 && (
        <OnboardingStep2
          usage={usage}
          onSelect={setUsage}
          currentStep={step}
          onNext={goToNextStep} // Pass function to navigate to the next step
        />
      )}
      {step === 3 && (
        <OnboardingStep3
          teamMembers={teamMembers}
          onChange={setTeamMembers}
          currentStep={step}
          onSubmit={handleSubmit} // Pass function to submit the data
        />
      )}
    </div>
  );
};