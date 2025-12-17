import { useState } from 'react'
import NewIngredientForm from './components/NewIngredientForm'
import './App.css'

function App() {

  const [ingredientsList, setIngredientsList] = useState([
      {ingredient: "test1", time:"test2"}
  ]);

    function handleAddIngredient(newIngredient) {
        setIngredientsList(prev=>[...prev, newIngredient]);
    }

  function removeIngredient(e) {
      const rowIndex = e.target.parentNode.parentNode.rowIndex
      document.getElementById('ingredients_table').deleteRow(rowIndex);

  }
  return (
    <>
            <h1>Kitchen Timer App</h1>
        <NewIngredientForm onAddIngredient={handleAddIngredient} />
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
