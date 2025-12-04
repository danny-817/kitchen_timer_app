import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [newIngredient, setNewIngredient] = useState("");
  const [newTime, setNewTime] = useState(0);
  const [ingredientsList, setIngredientsList] = useState([
      {ingredient: "test1"},{ ingredient: "test2"}
  ]);

  function handleIngredientChange(e) {
      e.preventDefault();
      alert(`${newIngredient} — ${newTime} mins`);
      console.log(e);
  }
  return (
    <>
            <h1>Kitchen Timer App</h1>
        <div className="input_field">
            <form onSubmit={handleIngredientChange}>
                <label htmlFor={'ingredient_input'}>Ingredient Name: </label>
                <input value={newIngredient} name={'ingredient_input'} id={'ingredient_input'} placeholder={'ingredient'} type={'text'} onChange={(e) => setNewIngredient(e.target.value)} />
                <br/>
                <label htmlFor={'total_cooking_time'}>Cooking Time (in minutes
                </label>
                <input value={newTime} name={'total_cooking_time'} id={'total_cooking_time'} placeholder={'total cooking time'} type={'number'} onChange={(e) => setNewTime(e.target.value)} />
                <br/>
                <button type='submit' className='button' >Submit</button>
            </form>
        </div>
        <div className="ingredients_list">
            <ul>
                {ingredientsList.map(ingredient => (
                    <li key={ingredient.ingredient}>{ingredient.ingredient}</li>
                ))}
            </ul>

        </div>


    </>
  )
}

export default App
