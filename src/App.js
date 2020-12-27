import React from 'react';
import RecipeList from './RecipeList'

function App() {
    return (
        <RecipeList recipes={sampleRecipes}/>
    )
}

const sampleRecipes = [
    {
        id: 1,
        name: "Plain Chicken",
        servings: 3,
        cookTime: "1:45",
        instructions : "1. Put Salt on Chicken\n2. Put Chicken in Ovan\n3. Eat Chicken"
    },
    {
        id: 2,
        name: "Plain Rice",
        servings: 5,
        cookTime: "0:45",
        instructions : "1. Put Rice on Water\n2. Boil the rice with water in Ovan\n3. Eat Rice"
    }
]

export default App;
