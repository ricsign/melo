import React from 'react'

import MusicCard from './MusicCard'

function MusicCards() {
  return (
    <div className="App">
        <div className="row row-cols-1 row-cols-md-3 g-5">
            <div className="col">
                <MusicCard />
            </div>
            <div className="col">
                <MusicCard />
            </div>
            <div className="col">
                <MusicCard />
            </div>
            <div className="col">
                <MusicCard />
            </div>
            <div className="col">
                <MusicCard />
            </div>
            <div className="col">
                <MusicCard />
            </div>
        </div>
    </div>
  )
}

export default MusicCards