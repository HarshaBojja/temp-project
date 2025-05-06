interface ProgressBarProps {
    currentStep: number;
    steps: string[];
  }
  
  export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, steps }) => {
    return (
      <div className="flex justify-center gap-12 mb-12">
        {steps.map((step, index) => {
          const isActive = currentStep === index + 1;
          const isCompleted = currentStep > index + 1;
  
          return (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2
                  ${isCompleted ? "bg-black text-white" : isActive ? "border-2 border-black" : "border border-gray-300"}
                `}
              >
                {isCompleted ? "✓" : index + 1}
              </div>
              <p className={`text-sm ${isCompleted ? "text-black" : "text-gray-500"}`}>
                {step}
              </p>
            </div>
          );
        })}
      </div>
    );
  };