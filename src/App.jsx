import Nav from "./components/Nav"
import Ini from "./components/Ini"
import Sobre from "./components/Sobre"
import Back from './img/Fundo_topo.png'

function App() {

  return (
    <section>
    <div className="Home" style={{ backgroundImage:`url(${Back})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <Nav/>
      <Ini/>
    </div>

    <div>
    <Sobre/>
    </div>
    
    </section>
  )
}

export default App
