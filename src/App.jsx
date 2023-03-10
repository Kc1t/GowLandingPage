import Nav from "./components/Nav"
import Ini from "./components/Ini"
import Sobre from "./components/Sobre"
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import Form from "./components/Form";
import SpotifyPlayer from 'react-spotify-player';
import Back from './img/Cover/Fundo_topo.png';
import Topic from "./components/Topic";

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

      <Sobre/>

      <div className="spo" id="Trilha" style={{display:''}}>
        {/* Transformar isso em Componente */}
        
      <SpotifyPlayer
        uri="https://open.spotify.com/album/3AieuV7WztobSMYG86Hdez?si=1_Zg6QOsT5CLaKP1hDkyXw"
        size={size}
        view={view}
        theme={theme}
        />

        </div>

    {/* <div
    style={{height: "100vh", backgroundColor: "white", border:"none"}}
    >
    </div> */}
    <Topic/>
    <Form/>
    <Quote/>
    <Footer/>
    </section>
  )
}

export default App
