import React from 'react'
import RecipeDetails from './recipeDetails'

function RecipeViewer({recipe}) {
    const {label, image, url, ingredients} = recipe.recipe
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label}/>
            <a href={url} target="_blank" rel="noopner noreferrer">LINK</a>
            <button>ingredients</button>
            <RecipeDetails ingredients={ingredients}/>
        </div>
    )
}

export default RecipeViewer
