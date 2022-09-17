import React, { useState } from "react";

function MusicCard({ song }) {
  const [ isNotesShowing, setIsNotesShowing ] = useState(false);
  return (
    <div className="card h-100">
      <div className="ratio ratio-1x1">
      <img
        src={song.photo}
        className="card-img"
        alt={song.name}
      />
      </div>
      <div className="card-body">
        <h5 className="card-title">{song.name}</h5>
        <h6> {song.composer} </h6>
        <p className="card-text">{song.description}</p>

        {isNotesShowing && <p className="notes">{song.letternotes.toUpperCase()}</p>}
        <a href={song.link} className="btn btn-primary">Learn More</a><br />
        <button className="btn btn-outline-primary mt-3" onClick={() => {setIsNotesShowing(val => !val)}}>
          {isNotesShowing ? "Hide Notes" : "Show Notes"}
        </button>
      </div>
    </div>
  );
}

export default MusicCard;
