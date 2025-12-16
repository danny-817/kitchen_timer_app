
function handleIngredientChange(e) {
    //e.preventDefault();
    alert(`${newIngredient} — ${newTime} mins`);
    setNewIngredient();

}
export default function newIngredientForm () {
    return (<div className="input_field">
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
    </div>)
}