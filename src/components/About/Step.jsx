export default function Step({ title, index, totalSteps }) {
    return (
      <li className="mb-4 ms-6 md:mb-10 md:ms-0 md:ml-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 flex items-center justify-center bg-green-500 rounded-full">
              <span className="text-white">{index + 1}</span>
            </div>
          </div>
        </span>
        <h3 className="font-medium leading-tight">{title}</h3>
      </li>
    );
  }
  