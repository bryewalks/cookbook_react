import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RecipesNew = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    let params = {
      title: data.title,
      chef: data.chef,
      image_url: data.imageUrl,
      ingredients: data.ingredients,
      directions: data.directions,
      prep_time: data.prepTime
    };

    axios
      .post('api/recipes', params)
      .then(response => { console.log("Success!", response.data)
                          props.history.push(`/recipes/${response.data.id}`)})
      .catch(error => {console.log(error)})
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name='title' placeholder="Title" ref={register} />
        <input type="text" name='chef' placeholder="Chef" ref={register} />
        <input type="text" name='imageUrl' placeholder="Image Url" ref={register} />
        <input type="text" name='ingredients' placeholder="Ingredients" ref={register} />
        <input type="text" name='directions' placeholder="Directions" ref={register} />
        <input type="text" name='prepTime' placeholder="Prep Time" ref={register} />
        <button>Submit</button>
      </form>
    </div>
  )
};

export default RecipesNew;