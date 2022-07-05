import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { Link } from "react-router-dom";
import Movielist from './Movielist';
function MovieItem(){
    const params = useParams();
    let [details, setDetails] = useState();
 
   useEffect(function(){
    fetch(`//www.omdbapi.com/?i=${params.id}&apikey=3cf38abf`)
     .then((response) => {
      return response.json()
     })
     .then(details => {
   // console.log(movies)
     return setDetails(details);
    });
},[])
    
  return (<div >
      <h1>Details</h1>
      {details && <div className="ListItem"><img src={details.Poster} />
      <div className="Items"><p>Title: {details.Title}</p>
      <p>Release Date: {details.Released}</p>
      <p>Plot: {details.Plot}</p>
      
      </div>
      </div>}
        </div>
  );
}

export default MovieItem;