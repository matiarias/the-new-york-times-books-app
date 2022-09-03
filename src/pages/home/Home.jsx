import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import FormSelects from "../../components/formulario/FormSelects";
import Loading from "../../components/lottie loading/Loading";
import NavBar from "../../components/navbar/NavBar";
import Overlay from "../../components/overlay/Overlay";

const Home = () => {
  const [bestSellers, setBestSellers] = useState([]);

  const [booksCategories, setBooksCategories] = useState("hardcover-fiction");

  const [loading, setLoading] = useState(true);

  const booksApi = async (categorias) => {
    try {
      const resp = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/current/${categorias}.json?api-key=${process.env.REACT_APP_THE_NYT_BOOKS_API_KEY}`
      );
      const { results } = await resp.json();
      console.log(results);
      setBestSellers(results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    booksApi(booksCategories);
  }, [booksCategories]);

  return (
    <div className="relative h-screen w-full">
      <NavBar />
      <Overlay />
      <FormSelects
        booksCategories={booksCategories}
        setBooksCategories={setBooksCategories}
      />

      <div className="py-4 px-12 md:px-16">
        <h3 className="text-2xl lg:text-3xl text-stone-700 font-bold text-center sm:text-start">
          {bestSellers.display_name}
        </h3>
      </div>

      {loading ? (
        <div className="w-[200px] h-[200px] mx-auto">
          <Loading />
        </div>
      ) : (
        <div className="w-full px-12 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 py-8">
          {bestSellers.books.map((book) => {
            const {
              rank,
              title,
              description,
              author,
              book_image,
              amazon_product_url,
            } = book;

            return (
              <div
                key={rank}
                className="relative py-8 bg-stone-300 shadow-md shadow-black rounded-md"
              >
                <span className="absolute top-[-5px] left-0 text-4xl md:text-4xl font-bold text-stone-500">
                  {rank}
                </span>

                <div className="py-10 px-4 sm:py-8 sm:px-6 md:py-10 md:px-6">
                  <img
                    className="object-cover block mx-auto h-[400px] w-auto"
                    src={book_image}
                    alt={title}
                  />
                </div>

                <div className="px-6 pb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-start">
                    {title}
                  </h3>
                  <p className="font-medium text-sm sm:text-base my-4 md:my-2">
                    {description}
                  </p>
                  <h4 className="font-bold my-4">
                    Author: <span className="font-medium">{author}</span>
                  </h4>
                </div>

                <div className="absolute bottom-3 px-4 sm:px-6">
                  <a
                    className="px-12 py-2 sm:px-8 bg-gradient-to-r from-indigo-800 to bg-black text-white font-medium rounded-md shadow-md shadow-gray-700"
                    href={amazon_product_url}
                    target="_blank"
                  >
                    Buy
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
