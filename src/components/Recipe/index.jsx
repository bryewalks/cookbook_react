import React from 'react';

const Recipe = (props) => {
  return (
    <div className='Recipe'>
      <h1>{props.recipe.title}</h1>
      <h2>Chef: {props.recipe.chef}</h2>
      <h2>Prep Time: {props.recipe.prep_time}</h2>
      <h2>Ingredients</h2>
      <ul>
        {props.recipe.formatted && props.recipe.formatted.ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>
        })}
      </ul>
      <h2>Directions</h2>
      <ol>
        {props.recipe.formatted && props.recipe.formatted.directions.map((direction, index) => {
          return <li key={index}>{direction}</li>
        })}
      </ol>
    </div>
  );
};

export default Recipe