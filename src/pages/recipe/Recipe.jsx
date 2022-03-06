import React from "react";
import { useFetch } from "../../hooks/useFetch";
//
import {
  useParams
} from "react-router-dom";
//style
import "./Recipe.css";
//
export const Recipe = () => {
  const {id} = useParams()
  const url = `http://localhost:3000/recipes/${id}`
  const {data: recipe, isPending, error} = useFetch(url)
 
  return (
  <div className='recipe'>
    {error && <p className='error'>{error}</p>}
    {isPending && <p className='loading'>Loading...</p>}
    {
      recipe && <h1>{recipe.title}</h1>
    }
  </div>
  )
};
