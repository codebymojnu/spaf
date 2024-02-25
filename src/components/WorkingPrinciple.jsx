import React, { useState } from "react";
// Step components
function Shikkha() {
  return (
    <div className="mb-8 lg:mb-0">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-4 mt-4 lg:mt-0">
        শিক্ষা
      </h2>
      <div className="h-1 w-60 bg-blue-500 mb-6"></div>
      <p className="text-gray-700 text-lg leading-relaxed">
        স্কুল, কলেজ, মাদ্রাসার শিক্ষার্থীদের জন্য সহযোগিতা অব্যাহত থাকবে। এবং
        সকল অসহায় শিক্ষার্থীদের জন্য মাসিক বৃত্তি প্রদান করা। এবং প্রতিষ্ঠিত না
        হওয়া পর্যন্ত তাদের বিষয়ে তদারকি করা।
      </p>
    </div>
  );
}

function Medical() {
  return (
    <div className="mb-8 lg:mb-0">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-4 mt-4 lg:mt-0">
        মেডিকেল
      </h2>
      <div className="h-1 w-60 bg-blue-500 mb-6"></div>
      <p className="text-gray-700 text-lg leading-relaxed">
        অসহায় মানুষদের জন্য স্বাস্থ্য সেবা নিশ্চিত করা সেই সাথে তাদের বিষয়ে
        সহযোগিতার হাত অব্যাহত রাখা।
      </p>
    </div>
  );
}

function Bostro() {
  return (
    <div className="mb-8 lg:mb-0">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-4 mt-4 lg:mt-0">
        বস্ত্র
      </h2>
      <div className="h-1 w-60 bg-blue-500 mb-6"></div>
      <p className="text-gray-700 text-lg leading-relaxed">
        সমাজের অবহেলিত জনগোষ্ঠীর জন্য বস্ত্রের ব্যবস্থা করা সেই সাথে তাদের বিষয়ে
        অবগত হওয়া।
      </p>
    </div>
  );
}

function Rasta() {
  return (
    <div className="mb-8 lg:mb-0">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-4 mt-4 lg:mt-0">
        রাস্তা সংস্করণ
      </h2>
      <div className="h-1 w-60 bg-blue-500 mb-6"></div>
      <p className="text-gray-700 text-lg leading-relaxed">
        গ্রাম গঞ্জে রাস্তা সংস্করনের মাধ্যমে সমাজিক অবদান সম্পূর্ণ রুপে নিশ্চিত
        করা।
      </p>
    </div>
  );
}

function BasStan() {
  return (
    <div className="mb-8 lg:mb-0">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-4 mt-4 lg:mt-0">
        বাসস্থান
      </h2>
      <div className="h-1 w-60 bg-blue-500 mb-6"></div>
      <p className="text-gray-700 text-lg leading-relaxed">
        অসহায় মানুষের বাসস্থান প্রতিস্থাপনের মাধ্যমে সেই সকল অসহায় মানুষের
        বাসস্থান নিশিত করা।
      </p>
    </div>
  );
}

function Environment() {
  return (
    <div className="mb-8 lg:mb-0">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-4 mt-4 lg:mt-0">
        পরিবেশ
      </h2>
      <div className="h-1 w-60 bg-blue-500 mb-6"></div>
      <p className="text-gray-700 text-lg leading-relaxed">
        যেখানে ময়লা আবর্জনায় পরিবেশের ভারসাম্য নষ্ট হয়ে থাকে সেই স্থান গুলো
        পরিষ্কারের মাধ্যমে ভারসাম্য ফিরিয়ে আনতে হবে।
      </p>
    </div>
  );
}

function Ballobibaho() {
  return (
    <div className="mb-8 lg:mb-0">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-4 mt-4 lg:mt-0">
        বাল্যবিবাহ
      </h2>
      <div className="h-1 w-60 bg-blue-500 mb-6"></div>
      <p className="text-gray-700 text-lg leading-relaxed">
        বাল্যবিবাহ প্রতিরোধে সর্বাত্মক প্রচেষ্টা অব্যহতি রাখা।
      </p>
    </div>
  );
}

function PoorEradication() {
  return (
    <div className="mb-8 lg:mb-0">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-4 mt-4 lg:mt-0">
        দারিদ্র বিমোচন
      </h2>
      <div className="h-1 w-60 bg-blue-500 mb-6"></div>
      <p className="text-gray-700 text-lg leading-relaxed">
        দরিদ্র অসহায় মানুষের জন্য মাসিক বা সপ্তাহিক খাদ্য সরবরাহ করা।
      </p>
    </div>
  );
}

function TreePlantation() {
  return (
    <div className="mb-8 lg:mb-0">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-4 mt-4 lg:mt-0">
        বৃক্ষরোপণ
      </h2>
      <div className="h-1 w-60 bg-blue-500 mb-6"></div>
      <p className="text-gray-700 text-lg leading-relaxed">
        বিভিন্ন স্থানে ফল ও ঔষধি বৃক্ষ রোপনের মাধ্যমে পরিবেশ সতেজ রাখা।
      </p>
    </div>
  );
}

function BloodDonation() {
  return (
    <div className="mb-10 lg:mb-0">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-4 mt-4 lg:mt-0">
        রক্তদান কর্মসূচি
      </h2>
      <div className="h-1 w-60 bg-blue-500 mb-6"></div>
      <p className="text-gray-700 text-lg leading-relaxed">
        ব্লাড ডোনেশনের মাধ্যমে সব সময় প্রস্তুত থাকা।
      </p>
    </div>
  );
}

// Define steps
const steps = [
  { title: "শিক্ষা", component: Shikkha },
  { title: "মেডিকেল", component: Medical },
  { title: "বস্ত্র", component: Bostro },
  { title: "রাস্তা সংস্করণ", component: Rasta },
  { title: "বাসস্থান", component: BasStan },
  { title: "পরিবেশ", component: Environment },
  { title: "বাল্যবিবাহ", component: Ballobibaho },
  { title: "দারিদ্র বিমোচন", component: PoorEradication },
  { title: "বৃক্ষরোপণ", component: TreePlantation },
  { title: "রক্তদান কর্মসূচি", component: BloodDonation },

  // Add more steps as needed
];

function WorkingPrinciple() {
  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="bg-gray-100 py-8 mb-10">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">আমাদের কার্যক্রম</h1>
        </div>
        <div className="lg:flex">

           {/* Display steps vertically on larger screens */}
           <div className="hidden lg:block lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-200 lg:flex lg:flex-col lg:overflow-y-auto">
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
          {/* Display steps horizontally on mobile */}
          <div className="lg:hidden overflow-x-auto mb-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`inline-block px-4 py-2 mr-2 ${
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


export default WorkingPrinciple;
