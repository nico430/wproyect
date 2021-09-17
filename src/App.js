import './css/main.css'
import Ciudad from './components/City.jsx';
import Temperatura from './components/CurrentTemp.jsx';
import Fecha from './components/Fecha';
import Weekly from './components/Weekly';
import Icon from './components/Icon';

const App = () => {
    return (

        <div className = "main" >

                <Ciudad / >
                <Fecha / >
                <Icon / >
                <Temperatura / >
                <Weekly / >
        </div> 
    )
}

export default App;