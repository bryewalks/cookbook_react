import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipesIndex = (props) => {
  const [recipes, setRecipes] = useState([])
  
  useEffect(() => {
    axios
      .get('api/recipes')
      .then(response => {setRecipes(response.data); console.log(response.data)});
  }, []);

  return (
    <div>
      { recipes.map((recipe, index) => {
        return  <ol key={index}>
                  <li>{recipe.title}</li>
                  <Link to={`/recipes/${recipe.id}`}>Show Recipe</Link>
                </ol>
      })}
    </div>
  )
}

export default RecipesIndex