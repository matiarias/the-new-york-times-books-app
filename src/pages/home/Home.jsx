import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import FormSelects from "../../components/formulario/FormSelects";
import NavBar from "../../components/navbar/NavBar";
import Overlay from "../../components/overlay/Overlay";

const Home = () => {
  const [books, setBooks] = useState([]);

  const [categorias, setCategorias] = useState("hardcover-fiction");

  const booksApi = async (category) => {
    try {
      const resp = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/current/${category}.json?api-key=${process.env.REACT_APP_THE_NYT_BOOKS_API_KEY}`
      );
      const { results } = await resp.json();
      console.log(results);
      setBooks(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    booksApi(categorias);
  }, [categorias]);

  return (
    <div className="h-screen w-full">
      <NavBar />
      <Overlay />
      <FormSelects categorias={categorias} setCategorias={setCategorias} />
    </div>
  );
};

export default Home;
