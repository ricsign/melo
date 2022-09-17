import React from 'react'
import Searchbar from './Searchbar'
import MusicCards from './MusicCards'

function Home() {
  return (
    <div className="App">
      {1 ? 
        (<div>
          <h1 className="mt-title">Melo</h1>
          <Searchbar />
        </div>) : 
        (<div>
          <h1 className="title">Melo</h1>
          <MusicCards />
        </div>)}
    </div>
  )
}

export default Home