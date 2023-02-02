import Nav from "./components/Nav"
import Ini from "./components/Ini"
import Sobre from "./components/Sobre"
import Back from './img/Fundo_topo.png'
import SpotifyPlayer from 'react-spotify-player';

function App() {

  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list';
  const theme = 'black'; 
  

  return (

    <section>
    <div className="Home" style={{ backgroundImage:`url(${Back})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <Nav/>
      <Ini/>
    </div>
    <div>
      <Sobre/>
      <SpotifyPlayer
        uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
        size={size}
        view={view}
        theme={theme}
      />
    </div>

    </section>
  )
}

export default App
