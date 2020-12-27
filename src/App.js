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
