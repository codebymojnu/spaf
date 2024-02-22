import React from 'react';

export default function Stepper() {
    const steps = ["শিক্ষা", "বস্ত্র", "দরিদ্র বিমোচন", "মেডিকেল", "বৃক্ষ রোপন"];

    return (
        <ol className="max-w-xl mx-auto mt-8 px-4 relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
            {steps.map((step, index) => (
                <li key={index} className="mb-10 ms-6 lg:mb-0 lg:ms-0 lg:me-6 lg:inline-block lg:align-top">
                    <div className="mt-2 flex items-center">
                        <span className="flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 lg:static lg:mr-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                            <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                        </span>
                        <h3 className="font-medium leading-tight ml-2">{step}</h3>
                    </div>
                </li>
            ))}
        </ol>
    );
}
