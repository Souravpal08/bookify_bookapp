import React from "react";
import banner from "../../assets/banner.png";

function Banner({ onExploreClick }) {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-start md:space-x-10 px-8 ">
      <div className="md:w-1/4 w-full flex justify-center md:justify-end mx-12 -my-12">
        <img src={banner} alt="" className="object-cover max-w-xs md:max-w-sm rounded-md shadow-lg h-96 " />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="text-6xl font-medium mb-7 ml-12 text-gray-900 leading-tight">
          Welcome to <span className="text-primary"> Bookify</span>{" "}
        </h1>
        <h2 className="text-2xl font-medium mb-7 ml-12">
          Unlock a World of Books at Your Fingertips!
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg ml-12">
          Discover a world of stories, insights, and adventures in your favorite
          books. Explore our vast collection across all genres, curated to bring
          you the best reading experience. Find your next favorite book at
          Bookify!
        </p>
        <button
          onClick={onExploreClick}
          className="btn-primary ml-16 transition transform active:scale-105"
        >
          Explore Books
        </button>
      </div>
    </div>
  );
}

export default Banner;
