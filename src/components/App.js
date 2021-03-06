import React, {useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import '../sass/app.scss';
import { v4 as uuidv4 } from "uuid";

export const RecipeContext = React.createContext();

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {
    const [selectedRecipeID, setSelectedRecipeID] = useState()
    const [recipes, setRecipes] = useState(sampleRecipes)

    const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeID)

    useEffect(() => {
        const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
        if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes))
    }, [recipes])

    const recipeContextValue = {
        handleRecipeAdd, 
        handleRecipeDelete,
        handleRecipeSelect,
        handleRecipeChange
    }

    function handleRecipeSelect(id) {
        setSelectedRecipeID(id);
    }

    function handleRecipeAdd() {
        const newRecipe = {
            id: uuidv4(),
            name: '',
            servings: 1,
            cookTime: '',
            instructions: '',
            ingredients: [
                {id: uuidv4(), name: '', amount:''}
            ]
        }

        setSelectedRecipeID(newRecipe.id)
    
        setRecipes([...recipes, newRecipe])
    }

    function handleRecipeChange(id, recipe) {
        const newRecipes = [...recipes]
        const index = newRecipes.findIndex(r => r.id === id)
        newRecipes[index] = recipe
        setRecipes(newRecipes)
    }

    function handleRecipeDelete(id) {
        if (selectedRecipeID != null && selectedRecipeID === id) {
            setSelectedRecipeID(undefined)
        }
        setRecipes(recipes.filter(recipes => recipes.id !== id))
    }

    return (
        <RecipeContext.Provider value={recipeContextValue}>
            <RecipeList recipes={recipes} />

            {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
        </RecipeContext.Provider>

    )
}


const sampleRecipes = [
    {
        id: 1,
        name: "Plain Chicken",
        servings: 3,
        cookTime: "1:45",
        instructions : "1. Put Salt on Chicken\n2. Put Chicken in Ovan\n3. Eat Chicken",
        ingredients: [
            {
                id: 1,
                name: 'Chicken',
                amount: '500 gm'
            },
            {
                id: 2,
                name: 'Salt',
                amount: '2 tbs'
            },
            {
                id: 3,
                name: 'Potato',
                amount: '200 gm'
            },
            {
                id: 4,
                name: 'Garam Mashala',
                amount: '1 Packet'
            }
        ]
    },
    {
        id: 2,
        name: "Plain Rice",
        servings: 5,
        cookTime: "0:45",
        instructions : "1. Put Rice on Water\n2. Boil the rice with water in Ovan\n3. Eat Rice",
        ingredients: [
            {
                id: 1,
                name: 'Rice',
                amount: '1 KG'
            },
            {
                id: 2,
                name: 'Water',
                amount: '1 Liter'
            }
        ]
    }
]

export default App;
