import React from "react";

export default function Stepper() {
  const steps = ["শিক্ষা", "বস্ত্র", "দরিদ্র বিমোচন", "মেডিকেল", "বৃক্ষ রোপন"];

  return (
    <div
      aria-label="Progress"
      className="overflow-hidden max-w-xl mx-auto mt-8 px-4"
    >
      <ol role="list">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`relative pb-10 mb-10 md:mb-0 md:inline-block ${
              index !== steps.length - 1 ? "md:mr-6" : ""
            }`}
          >
            <div
              className={`absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 ${
                index === 0 ? "bg-green-200" : "bg-gray-300"
              } dark:bg-green-900`}
              aria-hidden="true"
            ></div>
            <a href="#" className="group relative flex items-start">
              <span
                className={`flex h-9 items-center ${
                  index === 0 ? "text-indigo-600" : "text-gray-500"
                }`}
                aria-hidden="true"
              >
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white dark:border-gray-300 dark:bg-gray-800 group-hover:border-indigo-800">
                  {index === 0 && (
                    <svg
                      className="h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {index !== 0 && (
                    <span
                      className={`h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300 dark:group-hover:bg-gray-600`}
                    ></span>
                  )}
                </span>
              </span>
              <span className="ml-4 flex min-w-0 flex-col">
                <span
                  className={`text-sm font-medium ${
                    index === 0 ? "text-indigo-600" : "text-gray-500"
                  }`}
                >
                  {step}
                </span>
                <span className="text-sm text-gray-500">
                  Your description goes here.
                </span>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
