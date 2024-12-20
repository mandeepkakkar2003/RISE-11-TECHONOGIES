import React from "react";

export default function ProgressSteps() {
  const steps = [
    "Preliminary",
    "Details",
    "KYC",
    "Parties",
    "Claim",
    "Review",
    "Payment",
  ];

  const currentStep = 4;

  return (
    <div className="flex flex-wrap items-center justify-between w-full mx-auto max-w-5xl overflow-x-auto scrollbar-hide space-x-4 p-4">
  {steps.map((step, index) => {
    const stepNumber = index + 1;
    const completed = stepNumber < currentStep;
    const active = stepNumber === currentStep;
    const isYourDetails = step === "Your Details"; // Specific condition for "Your Details"

    const stepContent = completed ? (
      <span className="text-white text-xl font-bold">✓</span>
    ) : (
      stepNumber
    );

    return (
      <div
        key={step}
        className={`flex flex-col items-center w-20 mb-4 ${
          isYourDetails ? "text-blue-600" : "" // Add custom style for "Your Details"
        }`}
      >
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300 
          ${
            completed
              ? "bg-indigo-600 text-white"
              : active
              ? "border-4 border-indigo-600 text-indigo-600 bg-white"
              : "border-2 border-gray-300 text-gray-400 bg-gray-100"
          }`}
        >
          {stepContent}
        </div>
        <div
          className={`mt-2 text-xs md:text-sm font-medium ${
            completed || active
              ? "text-indigo-600"
              : "text-gray-500"
          }`}
        >
          {step}
        </div>
      </div>
    );
  })}
</div>

  );
}
