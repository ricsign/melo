import React from "react";

function MusicCard({ song }) {
  return (
    <div className="card h-100">
      <img
        src={song.photo}
        className="card-img-top"
        alt={song.name}
      />
      <div className="card-body">
        <h5 className="card-title">{song.name}</h5>
        <h6> {song.composer} </h6>
        <p className="card-text">{song.description}</p>
        <a href={song.link} className="btn btn-primary">Learn More</a>

      </div>
    </div>
  );
}

export default MusicCard;
