import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
// import PropTypes from 'prop-types'
import "./App.css";

const App = () => {
  const APP_ID = "c47ed24d";
  const APP_KEY = "33938f91dcf9533e554a4e7e1a107347";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("guatemalan"); //default search

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
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
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
