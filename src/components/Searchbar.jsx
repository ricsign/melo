import React, { useState } from "react";

function Searchbar() {
  let submitSearch = (e) => {
    if (e.key !== "Enter") return;

    console.log(e);

    // api calls to fetch data from user input
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
