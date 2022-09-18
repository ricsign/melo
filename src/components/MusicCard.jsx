import React, { useState } from "react";

function MusicCard({ song }) {
  const [isNotesShowing, setIsNotesShowing] = useState(false);
  return (
    <div className="card h-100">
      <div className="ratio ratio-1x1">
        <img src={song.photo} className="card-img" alt={song.name} />
      </div>
      <div className="card-body">
        <h5 className="card-title"><b>{song.name}</b></h5>
        <p className="card-text"><b>{song.composer}</b></p>
        <p className="card-text">{song.description}</p>
        <p className="card-text">
          <i>Categorie(s): {song.category}</i>
        </p>

        {isNotesShowing && (
          <p className="notes card-text">{song.letternotes.toUpperCase()}</p>
        )}
        <button
          className="btn btn-primary mb-3 button"
          onClick={() => {
            setIsNotesShowing((val) => !val);
          }}
        >
          {isNotesShowing ? "Hide Notes" : "Show Notes"}
        </button>
        <br />
        <a href={song.link} className="btn btn-outline-primary button">
          Listen Now
        </a>
      </div>
    </div>
  );
}

export default MusicCard;
