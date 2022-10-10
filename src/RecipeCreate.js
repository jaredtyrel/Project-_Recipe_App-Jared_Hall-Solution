import React, { useState } from "react";


function RecipeCreate({addRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared. ~Done
  // TODO: Add the required input and textarea form elements. ~Done
  // TODO: Add the required submit and change handlers ~Done
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  
  const [formData, setFormData] = useState({ ...initialFormState });
  
  const handleChange = (e) => {
    const { target } = e;
    setFormData({
      ...formData,
      [target.name]: target.value,
      [target.cuisine]: target.value,
    });
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log("Photo:", formData.photo);
   addRecipe(formData) 
    
    setFormData({ ...initialFormState });
  };
  
  return (
    <form onSubmit={ handleSubmit } name="create">
      <table>
        <tbody>
          <tr>
            <td><input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                  ></input></td>
            <td><input 
                  type="text" 
                  id="cuisine" 
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  ></input></td>
            <td><input 
                  id="photo" 
                  name="photo"
                  placeholder="Photo"
                  onChange={handleChange}
                  value={formData.photo}
                  ></input></td>
            <td><textarea 
                  id="ingredients" 
                  name="ingredients"
                  placeholder="Ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  ></textarea></td>
            <td><textarea 
                  name="preparation"  
                  id="preperation" 
                  placeholder="Preperation"
                  onChange={handleChange}
                  value={formData.preperation}
                  ></textarea></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
