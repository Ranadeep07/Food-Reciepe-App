import React from 'react'
import styles from '../Recipe.module.css'
export default function Recipe({title,imageURL,ingredients}) {
    
    return (
        <div className={styles.recipe}>
            <h2 className={styles.recipeTitle}>{title}</h2>
            <ol>
                <div className={styles.recipeIngredients}>

                <h1>Ingredients</h1>
                {
                    
                    ingredients.map((element)=>(
                       
                        <li className={styles.recipeIngredientFont}>{element.text}</li>
                    ))
                }
                </div>
            </ol>
            <img className={styles.recipeImages} src = {imageURL} alt = {title}></img>
        </div>
    )
}
