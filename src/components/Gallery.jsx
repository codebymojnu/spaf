import { useState } from "react";

// Define the data structure for gallery images
const galleryImages = [
  {
    id: 1,
    title: "বস্ত্র বিতরণ",
    images: [
      "/memberImages/masud.jpg",
      "/memberImages/masud.jpg",
      "/memberImages/masud.jpg",
      "/memberImages/masud.jpg",
    ],
  },
  { id: 2, title: "রক্তদান কর্মসূচি", images: ["image1.jpg", "image2.jpg"] },
  {
    id: 3,
    title: "শিক্ষা",
    images: [
      "image1.jpg",
      "image2.jpg",
      "image3.jpg",
      "image4.jpg",
      "image5.jpg",
      "image6.jpg",
    ],
  },
  // Add more images as needed
];

function Gallery() {
  const [activeGallery, setActiveGallery] = useState(galleryImages[0]);

  const handleClick = (gallery) => {
    setActiveGallery(gallery);
  };

  return (
    <div className="bg-gray-100 py-8 mb-10">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Gallery</h1>
        </div>
        <div className="lg:flex">
          {/* Display gallery titles vertically on larger screens */}
          <div className="hidden lg:block lg:w-1/3 border-b lg:border-b-0 lg:border-r border-gray-200 lg:flex lg:flex-col lg:overflow-y-auto">
            {galleryImages.map((gallery) => (
              <div
                key={gallery.id}
                className={`py-4 cursor-pointer ${
                  activeGallery === gallery
                    ? "text-green-500 font-bold"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => handleClick(gallery)}
              >
                {gallery.title}
              </div>
            ))}
          </div>
          {/* Display gallery titles horizontally on mobile */}
          <div className="lg:hidden overflow-x-auto mb-4">
            {galleryImages.map((gallery) => (
              <div
                key={gallery.id}
                className={`inline-block px-4 py-2 mr-2 ${
                  activeGallery === gallery
                    ? "text-green-500 font-bold"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => handleClick(gallery)}
              >
                {gallery.title}
              </div>
            ))}
          </div>
          <div className="w-full lg:w-2/3 p-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <div>
              {/* Display the images of the active gallery */}
              <h2 className="text-2xl font-bold mb-4">{activeGallery.title}</h2>
              <div className="grid grid-cols-2 gap-4">
                {activeGallery.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={activeGallery.title}
                    className="w-full h-auto"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
