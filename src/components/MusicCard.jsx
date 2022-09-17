import React from "react";

function MusicCard() {
  return (
    <div className="card h-100">
      <img
        src="https://media.istockphoto.com/photos/teito-in-veigas-village-somiedo-natural-park-and-biosphere-reserve-picture-id1354066936?k=20&m=1354066936&s=612x612&w=0&h=Kx8CLcKWETEKMu_nSYrZ5s_05fUsvvu0w4bDYUjH-mA="
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">River flows in river</h5>
        <p className="card-text">
          This is a song by someone. This is a song by someone. This is a song by someone. This is a song by someone. 
        </p>
        <small className="card-text text-secondary">
          CBDEG BADCE ABCDE CBDEG BADCE ABCDE CBDEG BADCE ABCDE
        </small>
      </div>
    </div>
  );
}

export default MusicCard;
