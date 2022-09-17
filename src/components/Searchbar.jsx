import React, { useState } from "react";

function Searchbar({setSearchedSongs}) {
  let submitSearch = async (e) => {
    if (e.key !== "Enter") return;

    // api calls to fetch data from user input
    const songs = await fetch("http://localhost:8000/songs").then((response) => response.json())
    const userInput = e.target.value.toLowerCase()

    setSearchedSongs([])
    for(let song of songs){
        if(song.letternotes.includes(userInput) || song.numbernotes.includes(userInput) || song.name.toLowerCase().includes(userInput)){
            setSearchedSongs((songs) => {return [...songs, song]})
        }
    }
  };

  return (
    <>
      <div className="row m-auto justify-content-center">
        <div className="col-sm-9 col-lg-6">
          <input
            type="search"
            className="form-control search-bar"
            onKeyDown={submitSearch}
            placeholder="Type some notes, search for the music piece."
          />
          
          </div>
          

  
        
      </div>
     

      
    </>
  );
}

export default Searchbar; 
