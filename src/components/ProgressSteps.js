// src/components/ProgressSteps.js
import React from "react";

export default function ProgressSteps() {
  const steps = [
    "Preliminary",
    "Your Details",
    "KYC",
    "Parties",
    "Claim",
    "Review",
    "Payment",
  ];

  const currentStep = 4;

  return (
    <div className="flex items-center justify-between w-full mx-auto max-w-5xl">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const completed = stepNumber < currentStep;
        const active = stepNumber === currentStep;
        const incomplete = stepNumber > currentStep;

        // For completed steps, show tick
        const stepContent = completed ? (
          <span className="text-white text-xl font-bold">✓</span>
        ) : (
          stepNumber
        );

        return (
          <div
            key={step}
            className="flex flex-col items-center w-full relative"
          >
            {/* Step Circle */}
            
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 
                ${
                  completed
                    ? "bg-indigo-600 text-white"
                    : active
                    ? "border-4 border-indigo-600 text-indigo-600 bg-white"
                    : "border-2 border-gray-300 text-gray-400 bg-gray-100 opacity-50"
                }`}
              >
                {stepContent}
              </div>

              {/* Step Label */}
              <div
                className={`mt-2 text-sm font-medium ${
                  completed
                    ? "text-indigo-600"
                    : active
                    ? "text-indigo-600"
                    : "text-gray-500 opacity-50"
                }`}
              >
                {step}
              </div>
            

            {/* Connector Line */}
            {/* {index < steps.length - 1 && (
              <div
              className={`absolute top-1/2 transform -translate-y-1/2 left-full ml-2
                ${completed
                  ? "border-b-2 border-solid border-indigo-600 w-20"
                  : "border-b-2 border-dotted border-gray-300 opacity-50 w-20"
                }`}
                
            />
            
            )} */}
          </div>
        );
      })}
    </div>
  );
}
