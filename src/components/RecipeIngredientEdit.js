import React from 'react'

export default function RecipeIngredientEdit() {
    return (
        <div className="recipe-edit__ingredients-grid">
            <input 
                className="recipe-edit__input" 
                type="text"/>
            <input 
                className="recipe-edit__input" 
                type="text"/>
            <button className="btn btn--denger">&times;</button>
        </div>
    )
}
