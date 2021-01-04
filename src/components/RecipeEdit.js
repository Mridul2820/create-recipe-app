import React from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit({ recipe }) {
    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-button-container">
                <button className="btn recipe-edit__remove-button">&times;</button>
            </div>
            <div className="recipe-edit__details-grid">
                <label 
                    htmlFor="name" 
                    className="recipe-edit__label">
                    Name
                </label>
                <input 
                    type="text" 
                    name="name" 
                    value={recipe.name}
                    id="name"
                    className="recipe-edit__input"
                />

                <label 
                    htmlFor="cookTime" 
                    className="recipe-edit__label">
                    Cook Time
                </label>
                <input 
                    type="text" 
                    name="cookTime" 
                    value={recipe.cookTime}
                    id="cookTime"
                    className="recipe-edit__input"
                />

                <label 
                    htmlFor="servings"
                    className="recipe-edit__label">
                    Servings
                </label>
                <input 
                    type="number" 
                    min="1" 
                    name="servings"
                    value={recipe.servings} 
                    id="servings"
                    className="recipe-edit__input"
                />

                <label 
                    htmlFor="instructions" 
                    className="recipe-edit__label">
                    Instructions
                </label>
                <textarea 
                    name="instructions" 
                    id="instructions"
                    value={recipe.instructions}
                    className="recipe-edit__input" > 
                </textarea>
            </div>

            <br/>

            <label 
                className="recipe-edit__label">
                Ingredients
            </label>
            <div className="recipe-edit__ingredients-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipe.ingredients.map(ingredient => (
                    <RecipeIngredientEdit 
                        key={ingredient.id}
                        ingredient={ingredient}
                    />
                ))}
            </div>
            
            <div className="recipe-edit__ingredient-btn-container">
                <button className="btn btn--primary">Add Ingredient</button>
            </div>
        </div>
    )
}
