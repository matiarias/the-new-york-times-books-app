import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";

const Home = () => {
  const [books, setBooks] = useState([]);

  const booksApi = async () => {
    try {
      const resp = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_THE_NYT_BOOKS_API_KEY}`
      );
      const { results } = await resp.json();
      console.log(results);
      setBooks(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    booksApi();
  }, []);

  return (
    <div className="h-screen w-full">
      <NavBar />
      <h1 className="text-black text-4xl">Home</h1>
    </div>
  );
};

export default Home;
