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
    <div className='Sobre'>
      <div className="Music">
        <img src={Song} alt="" />
      </div>
      <div className="Text">
        <h2>Sobre a Trilha</h2>
        <h4>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione impedit aliquam tempore modi veniam! Harum, sequi dicta? Mollitia earum voluptatum, magni eum molestiae ex! Nobis, officia est ipsa molestiae expedita, harum voluptas optio alias corporis maxime voluptatibus obcaecati voluptate vero!
        </h4>
      </div>
    </div>
  )
}

export default Sobre
