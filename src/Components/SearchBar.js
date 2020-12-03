import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import Recipe from './Recipe';
import styles from '../Recipe.module.css'

export default function SearchBar() {
    var keyID = 0
    const APP_ID = 'APP_ID';
    const API_KEY = 'YOUR_KEY';
    
    const [state, setReciepe] = useState([])
    const[search,setSearch] = useState('');
    const [query , setQuery] = useState('chicken');
    const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
    useEffect(() => {
        // console.log("USe Effect")
        axios.get(URL)
            .then(response =>{
                setReciepe(response.data.hits)
            })
            .catch((e)=>console.log(e))
    },[URL])
    // console.log(state)
    // console.log(state[0].recipe.image)
    const searchHandler = (event) =>{
        setSearch(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        setQuery(search)
    }
    return (
        <div>
            <h1 className={styles.textCenter}>FoodRecipes.in</h1>
            <form className={styles.searchForm} onSubmit = {submitHandler}>
                <input className={styles.searchBar} placeholder='Search Your Favourite item' type='text' onChange = {searchHandler}  value = {search}></input>
                <button className={styles.searchBtn} type='submit'>Search</button>
            </form>
            {state.map(element => (
                <Recipe key = {keyID++} title = {element.recipe.label} 
                imageURL = {element.recipe.image}
                ingredients = {element.recipe.ingredients}
                />
            ))}
        </div>
    )
}
