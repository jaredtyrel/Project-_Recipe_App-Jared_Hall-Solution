import React from "react";

function Recipe({ recipeRow, index, deleteRecipe}) {
  
  
  
  return (
     
    <tr key={index}>
              <td>{recipeRow.name}</td>
              <td>{recipeRow.cuisine}</td>
      <td><img src={recipeRow.photo} /></td>
              <td>{recipeRow.ingredients}</td>
              <td>{recipeRow.preparation}</td>
      <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
            </tr>
  )
            
  
}

export default Recipe;