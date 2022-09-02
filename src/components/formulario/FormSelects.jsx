import React from "react";

const FormSelects = ({ categorias, setCategorias }) => {
  const handleChangeSelects = ({ target }) => {
    setCategorias(target.value);
  };
  return (
    <div className="w-full h-[300px] sm:h-[100px] flex items-center py-8 px-12 md:py-12 md:px-16">
      <form className="w-full flex flex-col justify-center sm:flex-row sm:justify-start sm:gap-4 md:gap-8">
        {/* ----------------------------------------------------------------------------- */}
        <div className="flex flex-col gap-y-2 mb-2">
          <label className="text-lg md:text-xl font-medium" htmlFor="fiction">
            Fiction
          </label>
          <select
            className="w-[150px] sm:w-[200px] md:w-[220px] lg:w-[250] border-2 border-gray-600 rounded-t-md shadow-sm shadow-stone-500"
            id="fiction"
            value={categorias}
            onChange={handleChangeSelects}
          >
            <option value="hardcover-fiction">Hardcover Fiction</option>
            <option value="combined-print-and-e-book-fiction">
              Combined Print and E-Book Fiction
            </option>
            <option value="e-book-fiction">E-book Fiction</option>
          </select>
        </div>

        {/* -------------------------------------------------------------------------------- */}

        <div className="flex flex-col gap-y-2 mb-2">
          <label
            className="text-lg md:text-xl font-medium"
            htmlFor="nonfiction"
          >
            Non Fiction
          </label>
          <select
            className="w-[150px] sm:w-[200px] md:w-[220px] lg:w-[250] border-2  border-gray-600 rounded-t-md shadow-sm shadow-stone-500"
            id="nonfiction"
            value={categorias}
            onChange={handleChangeSelects}
          >
            <option value="hardcover-nonfiction">Hardcover Nonfiction</option>
            <option value="paperback-nonfiction">Paperback Nonfiction</option>
            <option value="combined-print-and-e-book-nonfiction">
              Combined Print and E-book Nonfiction
            </option>
            <option value="advice-how-to-and-miscellaneous">
              Advice, How-To and Miscellaneous
            </option>
          </select>
        </div>

        {/* -------------------------------------------------------------------------------- */}

        <div className="flex flex-col gap-y-2">
          <label
            className="text-lg md:text-xl font-medium"
            htmlFor="monthly-list"
          >
            Monthly List
          </label>
          <select
            className="w-[150px] sm:w-[200px] md:w-[220px] lg:w-[250] border-2  border-gray-600 rounded-t-md shadow-sm shadow-stone-500"
            id="monthly-list"
            value={categorias}
            onChange={handleChangeSelects}
          >
            <option value="audio-fiction">Audio Fiction</option>
            <option value="audio-nonfiction">Audio Nonfiction</option>
            <option value="graphic-books-and-manga">
              Graphic Books and Manga
            </option>
            <option value="young-adult-paperback">Young Adult Paperback</option>
            <option value="young-adult-hardcover">Young Adult Hardcover</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default FormSelects;