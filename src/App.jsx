import Nav from "./components/Nav"
import Ini from "./components/Ini"
import Back from './img/Fundo_topo.png'

function App() {

  return (
    <div className="Home" style={{ backgroundImage:`url(${Back})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <Nav/>
      <Ini/>
    </div>
  )
}

export default App
