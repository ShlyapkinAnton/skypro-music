import './App.css'
import Player from './components/AudioPlayers'
import Bar from './components/NavBar'
import SBar from './components/SideBar'
import Lists from './components/TrackList'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Bar />
          <Lists />
          <SBar />
        </main>
        <Player />
        <footer className="footer" />
      </div>
    </div>
  )
}
export default App;
