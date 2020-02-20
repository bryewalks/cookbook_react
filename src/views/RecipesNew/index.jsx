import React, { useState } from 'react';
import axios from 'axios';

const RecipesNew = (props) => {
  const [title, setTitle] = useState('')
  const [chef, setChef] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [directions, setDirections] = useState('')
  const [prepTime, setPrepTime] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault();

    let params = {
      title: title,
      chef: chef,
      image_url: imageUrl,
      ingredients: ingredients,
      directions: directions,
      prep_time: prepTime
    }

    axios
      .post('api/recipes', params)
      .then(response => { console.log("Success!", response.data)
                          props.history.push(`/recipes/${response.data.id}`)})
      .catch(error => {console.log(error)})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="Chef" onChange={e => setChef(e.target.value)} />
        <input type="text" placeholder="Image Url" onChange={e => setImageUrl(e.target.value)} />
        <input type="text" placeholder="Ingredients" onChange={e => setIngredients(e.target.value)} />
        <input type="text" placeholder="Directions" onChange={e => setDirections(e.target.value)} />
        <input type="text" placeholder="Prep Time" onChange={e => setPrepTime(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  )
};

export default RecipesNew;