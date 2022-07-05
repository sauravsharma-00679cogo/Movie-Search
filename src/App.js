import './App.css';
import React , {useEffect, useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Movielist from './Movielist';
import MovieItem from './MovieItem';
import FavList from './FavList';
//import { movies } from './movies';
function App() {
  
  return (
    <BrowserRouter className="App">
      <Routes>
      <Route path="/:id" element={<MovieItem/>} exact/>
      <Route path= "/favlist" element={<FavList />}/>
        <Route path= "/" element={<Movielist />} exact/>
        
        </Routes>
    </BrowserRouter>
  );
}

export default App;
