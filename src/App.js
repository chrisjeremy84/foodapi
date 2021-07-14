import './App.css'
import Axios from 'axios'
import { useState } from 'react'

function App() {
  const [query, setquery] = useState("")
  const [recipes, setRecipes] = useState([])

  const APP_ID = 'e987e8e0'
  const APP_KEY = '35a9e696b72c09519d52837697974efc'
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  

  const getData = async() => {
      const result = await Axios.get(url);
      setRecipes(result.data.hits)
      console.log(result)
      setquery("")
  }

  const submitHandler = (e) => {
    e.preventDefault()
    getData()
  }

  const onChange = (e) => {
    setquery(e.target.value)
  }
  return (
    <div className="App">
   <h1 onClick={getData}>Food Searching App</h1>
   <form className="search-form" onSubmit={submitHandler}>
    <input type="text" 
    placeholder="search food" 
    autoComplete="off" 
    onChange={onChange}
    value={query}
    />
    <button type="submit">Search</button>
   </form>

   <div className="recipes">
     {recipes !== [] && recipes.map(recipe =><h2>{recipe.recipe.label}</h2>)}
     </div>
    </div>
  );
}

export default App;
