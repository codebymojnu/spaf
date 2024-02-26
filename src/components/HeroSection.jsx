import { useEffect, useState } from "react";
import Stepper from "./Stepper";

function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Safe and Poverty Alleviation Foundation";

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval duration for typing speed
  }, [fullText]);

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Company Information */}
        <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-800 leading-tight mb-4 mt-4 lg:mt-0">
            {text}
          </h2>
          <div className="h-1 w-60 bg-blue-500 mb-6"></div>
          {/* Hero Text start */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
            {" "}
            {/* Added div for box shadow and padding */}
            <p className="text-gray-700 text-lg leading-relaxed">
              Safe and Poverty Alleviation Foundation একটি অরাজনৈতিক, অলাভজনক
              সেবামূলক প্রতিষ্ঠান। এই প্রতিষ্ঠানটি সমাজের প্রান্তিক জনগোষ্ঠীর
              ক্ষেত্রে শিক্ষা, স্বাস্থ্য, আবাসন ও জীবনমান উন্নয়নে ব্যাপক
              কর্মসূচী পরিচালনা করে। আমরা শিক্ষার্থীদের বৃত্তি প্রদান, অসুস্থদের
              চিকিৎসা নিশ্চিতকরণ, গৃহহীনদের আশ্রয় প্রদান, গ্রামীণ এলাকার
              যোগাযোগ ব্যবস্থা উন্নয়ন, পরিবেশ সুরক্ষা, বাল্যবিবাহ প্রতিরোধ,
              দারিদ্র্য বিমোচন ও রক্তদানের মতো কার্যক্রমের মাধ্যমে একটি সুন্দর ও
              সুস্থ সমাজ গঠনে অবদান রাখতে প্রতিজ্ঞাবদ্ধ।
            </p>
          </div>
          {/* Hero Text end */}
          <Stepper />
        </div>
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src="./slideImages/2.jpg"
            alt="spaf hero image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
