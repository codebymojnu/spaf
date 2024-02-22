import React, { useState } from "react";

// Step components
function Introduction() {
  return <p>Introduction Content</p>;
}

function PolicyAndIdeals() {
  return <p>Policy and Ideals Content</p>;
}

function GoalsAndObjectives() {
  return <p>Goals and Objectives Content</p>;
}

// Define steps
const steps = [
  { title: "পরিচিতি", component: Introduction },
  { title: "নীতি ও আদর্শ", component: PolicyAndIdeals },
  { title: "লক্ষ্য ও উদ্দেশ্য", component: GoalsAndObjectives },
  // Add more steps as needed
];

function AboutPage() {
  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">About Us</h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-200">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`py-4 cursor-pointer ${
                  activeStep === step
                    ? "text-green-500 font-bold"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => handleClick(step)}
              >
                {step.title}
              </div>
            ))}
          </div>
          <div className="w-full lg:w-2/3 p-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <div>
              <activeStep.component />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
