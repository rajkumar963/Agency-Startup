import React, { useEffect, useState } from "react";

interface Ad {
  imageUrl: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const ads: Ad[] = [
  {
    imageUrl: "https://i.ytimg.com/vi/pQJ6fH6UWgM/sddefault.jpg",
    title: "Spotify Premium Duo",
    description: "Two Premium accounts for couples under one roof.",
    ctaText: "Get Duo",
    ctaLink: "https://www.spotify.com/premium/duo/",
  },
  {
    imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/30adf5122495301.60db237c0e304.jpg",
    title: "Netflix Premium",
    description: "Unlimited movies, TV shows, and more.",
    ctaText: "Watch Now",
    ctaLink: "https://www.netflix.com/",
  },
  {
    imageUrl: "https://i.ytimg.com/vi/c0m57jAkF9U/maxresdefault.jpg",
    title: "Amazon Prime",
    description: "Fast delivery, exclusive deals & more.",
    ctaText: "Join Prime",
    ctaLink: "https://www.amazon.com/amazonprime",
  },
];

const AdSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % ads.length);
    }, 4000); // change ad every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentAd = ads[currentIndex];

  return (
    <div className="max-w-3xl mx-auto bg-gray-700 shadow-lg rounded overflow-hidden p-4 border border-gray-200 transition-all duration-700 m-10 h-[80%]">
      <img
        src={currentAd.imageUrl}
        alt={currentAd.title}
        className="w-full h-[250px] object-cover rounded"
      />
      <h2 className="text-xl font-bold text-gray-200 mt-3">{currentAd.title}</h2>
      <p className="text-gray-300 mt-1 ">{currentAd.description}</p>
      <a
        href={currentAd.ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {currentAd.ctaText}
      </a>
    </div>
  );
};

export default AdSection;
