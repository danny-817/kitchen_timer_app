import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [newIngredient, setNewIngredient] = useState("");
  const [newTime, setNewTime] = useState(0);
  const [ingredientsList, setIngredientsList] = useState([
      {ingredient: "test1", time:"test2"}
  ]);

  function handleIngredientChange(e) {
      //e.preventDefault();
      alert(`${newIngredient} — ${newTime} mins`);
      setNewIngredient();

  }

  function removeIngredient(e) {
      const rowIndex = e.target.parentNode.parentNode.rowIndex
      document.getElementById('ingredients_table').deleteRow(rowIndex);

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
            <table id="ingredients_table">
                <thead>
                    <tr>
                        <th scope="col" >Ingredient</th>
                        <th scope="col" >Total Time</th>
                    </tr>
                </thead>
                <tbody>
                {ingredientsList.map(ingredient => (
                    <tr key={ingredient.ingredient}>
                        <td>{ingredient.ingredient}</td>
                        <td>{ingredient.time}</td>
                        <td><input type="button" value="Remove" onClick={removeIngredient}></input></td>
                    </tr>
                ))}

                </tbody>
            </table>

        </div>


    </>
  )
}

export default App
