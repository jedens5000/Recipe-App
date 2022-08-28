import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
// import PropTypes from 'prop-types'
import "./App.css";

const App = () => {
  // const APP_ID = "c47ed24d";
  // const APP_KEY = "33938f91dcf9533e554a4e7e1a107347";
  const SPOON_KEY = "35e995f44c4145188a3b2482b4785a96";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  // const [query, setQuery] = useState("guatemalan"); //default search
  const [query, setQuery] = useState("tortilla"); //default search

  // useEffect(() => {
  //   const getRecipes = async () => {
  //     const response = await fetch(
  //       `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  //     );
  //     const data = await response.json();
  //     setRecipes(data.hits);
  //     console.log(data.hits);
  //   };
  //   getRecipes();
  // }, [query]);

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        // `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${SPOON_KEY}`
        // `https://api.spoonacular.com/food/products/search?query=${query}&apiKey=${SPOON_KEY}`
        `https://api.spoonacular.com/food/search?query=${query}&number=18&apiKey=${SPOON_KEY}`
      );
      const data = await response.json();
      // setRecipes(data.searchResults);
      setRecipes(data.searchResults[0].results);
      console.log(data.searchResults);
      console.log(data.searchResults[0].results);
      console.log(data.searchResults[0].results[0].content);
    };
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    // This function is triggered by the form onSubmit below.
    e.preventDefault(); // prevents page auto-refresh
    setQuery(search);
    setSearch(""); // This clears the search input field to be empty
  };

  return (
    <div className="App">
      <h1 className="App-title">
        Search for your favorite recipes, ingredients, or food type!
      </h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            title={recipe.name}
            calories={recipe.calories}
            image={recipe.image}
            ingredients={recipe.ingredients}
            content={recipe.content}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
