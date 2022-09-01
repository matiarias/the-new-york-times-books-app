import React from "react";

const Overlay = () => {
  return (
    <div className="w-full h-[300px] md:h-[200px] py-8 px-12 md:py-12 md:px-16 border-b-2 border-gray-300 flex flex-col justify-center gap-1 sm:gap-2 md:gap-4">
      <span className="text-lg md:text-xl xl:text-2xl text-black font-medium">
        Books
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-medium">
        The New York Times Best Sellers
      </h1>
      <h2 className="text-base md:text-lg lg:text-xl font-medium text-gray-600">
        Authoritatively ranked lists of books sold in the United States, sorted
        by format and genre.
      </h2>
    </div>
  );
};

export default Overlay;
