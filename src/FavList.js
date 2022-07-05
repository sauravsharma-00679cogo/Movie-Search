import React,{useEffect,useState} from 'react'

const FavList = () => {
    const [fav,setFav] = useState([]);
    useEffect(()=>{
        let item = localStorage.getItem("favourites")
        setFav(JSON.parse(item));
    },[])
  console.log(fav);
  return (
    <div className="fFav"><h1>Favourite Movies</h1>
        {fav.length >0 ? <div class='row'>
            {fav.map(favs => {
               return <div className="FavItem col-lg-3">
               <img src={favs.Poster}></img></div>
            })}
        </div>  :<p>Your favourites are empty</p>}
    </div>
  )
}

export default FavList