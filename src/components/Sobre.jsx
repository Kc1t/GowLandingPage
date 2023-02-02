import React from 'react'
import Song from '../img/SongCover.svg'

const Sobre = () => {
  
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
        let element = document.getElementById('embed-iframe');
        let options = {
            uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
          };
        let callback = (EmbedController) => {};
        IFrameAPI.createController(element, options, callback);
      };
      
  return (
    <div className='Sobre' id='nav'>
      <div className="Music">
        <img src={Song} alt="" />
      </div>
      <div className="Text">
        <h2>Sobre a Trilha</h2>
        <h4>
        "    Quando o Santa Monica Studio me pediu para compor a trilha do novo God of War, fiquei emocionado, já que sou um grande fã dos jogos originais da franquia.<br></br>
        <br></br> Conforme colaborava com o diretor do jogo Cory Barlog, ficou claro que o jogo novo precisaria de música nova, sem revisitar a trilha memorável dos games originais, em vez disso, teríamos que trilhar um novo terreno. <br></br>
        <br></br>
         Usei as memórias que tinha da trilha clássica do antigo God of War – o coro profundo, percussão forte, e o metal gritante – e os reinventei para uma era Nórdica. Escrevi novos temas, e introduzi instrumentação exótica e línguas de várias tradições do norte da Europa à música. "<br></br>
        <br></br>
        -Bear McCreary
        </h4>

      </div> 
    </div>
  )
}

export default Sobre
