import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Recipe from 'components/Recipe';

const RecipesShow = (props) => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    axios
      .get(`api/recipes/${props.match.params.id}`)
      .then(response => setRecipe(response.data))
  }, [props.match.params.id])

  return (
    <div>
      <Recipe recipe={recipe} />
    </div>
  )
};

export default RecipesShow;