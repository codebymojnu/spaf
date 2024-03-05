import { useState } from "react";

// Define the updated data structure for videos
const videos = [
  {
    title: "বস্ত্র বিতরণ",
    videos: [
      {
        videoTitle: "বেরুবাড়ী হাই স্কুলে বস্ত্র বিতরণ - ২০২৪",
        videoLink: "https://www.youtube.com/watch?v=VoWlOcOWf-8",
      },
      {
        videoTitle: "বস্ত্র বিতরণ - ২০২৩",
        videoLink: "https://www.youtube.com/watch?v=VoWlOcOWf-8",
      },
    ],
  },
  {
    title: "ইফতার",
    videos: [
      {
        videoTitle: "বেরুবাড়ী বাজার মসজিদে ইফতার বিতরণ",
        videoLink: "https://www.youtube.com/watch?v=VoWlOcOWf-8",
      },
      {
        videoTitle: "মুয়ামারী মসজিদে ইফতার বিতরণ",
        videoLink: "https://www.youtube.com/watch?v=VoWlOcOWf-8",
      },
    ],
  },
  // Add more videos as needed
];

function Videos() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (video) => {
    setActiveVideo(video);
  };

  const openModal = (videoLink) => {
    setSelectedVideo(videoLink);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 py-8 mb-10">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Videos</h1>
        </div>
        <div className="lg:flex">
          {/* Display video titles vertically on larger screens */}
          <div className="hidden lg:block lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-200 lg:flex lg:flex-col lg:overflow-y-auto">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`py-4 cursor-pointer ${
                  activeVideo === video
                    ? "text-green-500 font-bold"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => handleClick(video)}
              >
                {video.title}
              </div>
            ))}
          </div>
          {/* Display video titles horizontally on mobile */}
          <div className="lg:hidden overflow-x-auto mb-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`inline-block px-4 py-2 mr-2 ${
                  activeVideo === video
                    ? "text-green-500 font-bold"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => handleClick(video)}
              >
                {video.title}
              </div>
            ))}
          </div>
          <div className="w-full lg:w-2/3 p-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <div>
              <h2 className="text-2xl font-bold mb-4">{activeVideo.title}</h2>
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {activeVideo.videos.map((video, index) => (
                  <div key={index} className="relative border border-black">
                    <img
                      src={`https://img.youtube.com/vi/${
                        video.videoLink.split("v=")[1]
                      }/maxresdefault.jpg`}
                      alt={video.videoTitle}
                      className="w-full h-auto cursor-pointer"
                      onClick={() => openModal(video.videoLink)}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 text-white opacity-75 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={() => openModal(video.videoLink)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12l14-6v12l-14-6z"
                        />
                      </svg>
                    </div>
                    <p className="text-center mt-2">{video.videoTitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="relative w-full max-w-2xl bg-white rounded-lg overflow-hidden shadow-lg">
            <button
              className="absolute top-2 right-2 text-red-500 text-lg z-10"
              onClick={closeModal}
            >
              {/* Close Button SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-0 right-0 m-4 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={closeModal}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              className="w-full h-64 lg:h-96"
              src={`https://www.youtube.com/embed/${
                selectedVideo.split("v=")[1]
              }`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Videos;
