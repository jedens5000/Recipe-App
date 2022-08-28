import React from "react";
import style from "./recipe.module.css";
import Rating from "@mui/material/Rating";

const Recipe = ({ title, calories, image, ingredients, content }) => {
  return (
    <div className={style.recipe}>
      <h2>{title}</h2>
      <Rating />
      <img className={style.image} src={image} alt="finished recipe" />
      {/* <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol> */}
      {/* <ol>
        {content.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ol> */}
      <p>Calories: {Math.round(calories)}</p>
      {/* <p>Content: </p> */}
      <div
        className="card-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default Recipe;
