import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <h1>Kitchen Timer App</h1>
            <label htmlFor={'ingredient_input'}>Ingredient Name: </label>
            <input name={'ingredient_input'} id={'ingredient_input'} placeholder={'ingredient'} type={'text'}/>
            <br/>
            <label htmlFor={'cooking_time'}>Cooking Time: </label>
            <input name={'cooking_time'} id={'cooking_time'} placeholder={'cooking time'} type={'time'}/>

        </div>


    </>
  )
}

export default App
