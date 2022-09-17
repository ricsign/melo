import React from 'react'

import MusicCard from './MusicCard'

function MusicCards({ searchedSongs }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-5 cards">
        {
            searchedSongs.map((song, i) => (
                <div key={i} className="col">
                    <MusicCard song={song} />
                </div>
            ))
        }
    </div>
  )
}

export default MusicCards