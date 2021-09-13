import './css/main.css'
import Ciudad from './components/City.jsx';
import Temperatura from './components/CurrentTemp.jsx';
import Fecha from './components/Fecha';

const App = () => {
    return (

        <div className = "main" >

                <Ciudad / >
                <Fecha / >

            <div className = 'icon' >
                icono 
            </div>
                <Temperatura / >
            <div className = 'week' >
                semanal 
            </div> 

        </div> 
    )
}

export default App;