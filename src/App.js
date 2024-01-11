import { useEffect, useState } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

import MovieCard from "./MovieCard";

// beb91b52

const API_URL = "http://www.omdbapi.com?apikey=beb91b52";

function App() {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  async function searchForMovie(title) {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  //   useEffect(() => {
  //     searchForMovie("Batman");
  //   }, []);

  return (
    <div className="app">
      <h1>MovieVerse</h1>

      <div className="search">
        <input
          placeholder="Search MovieVerse!"
          value={searchTerm}
          onChange={(userInput) => setSearchTerm(userInput.target.value)}
          onEnter
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchForMovie(searchTerm);
          }}
        />
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
