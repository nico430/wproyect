import './css/main.css'
import Ciudad from './components/City';
import Temperatura from './components/CurrentTemp';

const App = () => {
    return ( 
    
    <div className="main">
        < Ciudad/>
        <div className='icon'>
            icono
        </div>
        < Temperatura />
        <div className='week'>
            semanal
        </div>
    </div> 
    )
}

export default App;