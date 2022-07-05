import React, {useEffect, useState}  from "react";
import { Link } from "react-router-dom";

function Movielist () {
    let [movies, setMovies] = useState();
    const [search,setSearch] = useState("")
    const [favourites,setFavourites] = useState([])

    
   useEffect(function(){
    fetch("http://www.omdbapi.com/?s=avengers&apikey=3cf38abf")
     .then((response) => {
      return response.json()
     })
     .then(movies => {
     setMovies(movies);
    });
},[])

useEffect(()=>{
    localStorage.setItem("favourites", JSON.stringify(favourites));
},[favourites]);

const handleClick = () => {
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=3cf38abf`)
     .then((response) => {
      return response.json()
     })
     .then(movies => {
     setMovies(movies);
    });
}

const addToFav = (movie) => {
    const local_tasks=localStorage.getItem("favourites");
    if(local_tasks){
        setFavourites(JSON.parse(local_tasks));
    }
    else{
        localStorage.setItem("favourites",JSON.stringify(favourites));
    }

    let ele = favourites.find((fav) => fav.imdbID === movie.imdbID)
    if(ele === undefined){
        let arr = [...favourites,movie];
    setFavourites(arr);
    }
    else{
        alert("Already added as favourite")
    }
  
}
    return (
        <div><h1>Movie Search</h1>
            <div class="top"><input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/><button onClick={handleClick} >Search</button></div>
            <div className="gotoFav">
                <Link to={`/favlist`}>Go to Favourites ({favourites.length})</Link>
            </div>
            <div className="grid">
            {movies && <div className="row">{movies.Search.map(movie => 
            <div className="icon col-lg-3">
            <Link to={`/${movie.imdbID}`}><img src={movie.Poster} ></img></Link>
            
            <div class="btn">
            <Link to={`/${movie.imdbID}`}><button >Explore</button></Link>
           <button onClick={()=> addToFav(movie)}>Favourite</button>
            </div>
            </div>
        )}
        </div>}
            </div>
            
        </div>
        );
    
}

export default Movielist;