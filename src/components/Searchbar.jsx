import React, { useState } from "react";

function Searchbar({ setSearchedSongs }) {
  let submitSearch = async (e) => {
    if (e.key !== "Enter") return;
    
    // api calls to fetch data from user input
    let songs = await fetch("https://api.jsonbin.io/v3/b/"+process.env.REACT_APP_JSON_BIN_ID,{
      method: "GET",
      headers: {
        'X-Master-Key': process.env.REACT_APP_JSON_X_MASTER_KEY,
        'X-Access-Key': process.env.REACT_APP_JSON_X_ACCESS_KEY,
      }
    }).then((response) => response.json())
    .then((data) => data.record.songs);
    
    const userInput = e.target.value.toLowerCase();

    setSearchedSongs([]);
    for (let song of songs) {
      if (
        userInput &&
        (song.letternotes.includes(userInput) ||
        song.numbernotes.includes(userInput) ||
        song.name.toLowerCase().includes(userInput) ||
        song.category.toLowerCase().includes(userInput) ||
        song.composer.toLowerCase().includes(userInput))
      ) {
        setSearchedSongs((songs) => {
          return [...songs, song];
        });
        
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
