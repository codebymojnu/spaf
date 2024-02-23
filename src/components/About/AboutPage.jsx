import React, { useState } from "react";
import Step from "./Step";

// Step components
function Introduction() {
  return (
    <div className="mb-8 lg:mb-0">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-4 mt-4 lg:mt-0">
        Safe and Poverty Alleviation Foundation
      </h2>
      <div className="h-1 w-60 bg-blue-500 mb-6"></div>
      <p className="text-gray-700 text-lg leading-relaxed">
        Safe and Poverty Alleviation Foundation একটি অরাজনৈতিক, অলাভজনক সেবামূলক
        প্রতিষ্ঠান। এই প্রতিষ্ঠানটি সমাজের প্রান্তিক জনগোষ্ঠীর ক্ষেত্রে শিক্ষা,
        স্বাস্থ্য, আবাসন ও জীবনমান উন্নয়নে ব্যাপক কর্মসূচী পরিচালনা করে। আমরা
        শিক্ষার্থীদের বৃত্তি প্রদান, অসুস্থদের চিকিৎসা নিশ্চিতকরণ, গৃহহীনদের
        আশ্রয় প্রদান, গ্রামীণ এলাকার যোগাযোগ ব্যবস্থা উন্নয়ন, পরিবেশ সুরক্ষা,
        বাল্যবিবাহ প্রতিরোধ, দারিদ্র্য বিমোচন ও রক্তদানের মতো কার্যক্রমের
        মাধ্যমে একটি সুন্দর ও সুস্থ সমাজ গঠনে অবদান রাখতে প্রতিজ্ঞাবদ্ধ।
      </p>
    </div>
  );
}

function PolicyAndIdeals() {
  const steps = [
    "শিক্ষার্থীদের জন্য আর্থিক সহায়তা ও মাসিক বৃত্তি প্রদান, প্রতিষ্ঠিত না হওয়া পর্যন্ত তাদের তদারকি ও পরামর্শ প্রদান।",
    "অসহায়দের জন্য স্বাস্থ্যসেবা ও চিকিৎসায় সহায়তা প্রদান।",
    "সমাজের অবহেলিতদের জন্য পোশাকের ব্যবস্থা করা।",
    "গ্রামীণ যোগাযোগ ব্যবস্থা উন্নত করতে রাস্তা সংস্কার করা।",
    "অসহায়দের জন্য নিরাপদ ও স্বাস্থ্যকর বাসস্থান নিশ্চিত করা।",
    "পরিবেশ দূষণ রোধে ময়লা পরিষ্কার ও ভারসাম্য রক্ষা করা।",
    "বাল্যবিবাহ প্রতিরোধে সচেতনতা বৃদ্ধি ও আইনি পদক্ষেপ গ্রহণ করা।",
    "দরিদ্রদের খাদ্য সরবরাহ করে জীবনযাত্রার মান উন্নত করা।",
    "পরিবেশ সতেজ রাখতে ফল ও ঔষধি গাছ রোপণ করা।",
    "নিয়মিত রক্তদান করে মানুষের জীবন বাঁচাতে সহায়তা করা।",
  ];
  return (
    <div className="relative">
      
      <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-4 mt-4 lg:mt-0">নীতি ও আদর্শ</h2>
      <div className="h-1 w-60 bg-blue-500 mb-6"></div> 
      <div className="ml-10">
      
      <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 pl-6">
        {steps.map((step, index) => (
          <Step key={index} title={step} index={index} totalSteps={steps.length} />
        ))}
      </ol>
      </div>
    </div>
  );

}


function GoalsAndObjectives() {
  const steps = ["শিক্ষার্থীদের সহায়তা ও মাসিক বৃত্তি প্রদান, প্রতিষ্ঠিত না হওয়া পর্যন্ত তদারকি।",
  "অসহায়দের স্বাস্থ্যসেবা ও চিকিৎসায় সহায়তা।",
  "অবহেলিতদের পোশাকের ব্যবস্থা করা।",
  "গ্রামীণ যোগাযোগ ব্যবস্থা উন্নত করতে রাস্তা সংস্কার।",
  "অসহায়দের জন্য নিরাপদ বাসস্থান নিশ্চিত করা।",
  "পরিবেশ দূষণ রোধে ময়লা পরিষ্কার ও ভারসাম্য রক্ষা।",
  "বাল্যবিবাহ প্রতিরোধে সচেতনতা ও আইনি পদক্ষেপ।",
  "দরিদ্রদের খাদ্য সরবরাহ করে জীবনযাত্রার মান উন্নত করা।",
  "পরিবেশ সতেজ রাখতে ফল ও ঔষধি গাছ রোপণ।",
  "নিয়মিত রক্তদান করে মানুষের জীবন বাঁচাতে সহায়তা।"];
  return (
    <div className="relative">
      
      <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-4 mt-4 lg:mt-0">লক্ষ্য ও উদ্দেশ্য</h2>
      <div className="h-1 w-60 bg-blue-500 mb-6"></div> 
      <div className="ml-10">
      
      <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 pl-6">
        {steps.map((step, index) => (
          <Step key={index} title={step} index={index} totalSteps={steps.length} />
        ))}
      </ol>
      </div>
    </div>
  );

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
          <h1 className="text-3xl font-bold">আমাদের সম্পর্কে</h1>
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
