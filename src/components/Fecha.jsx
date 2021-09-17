
const Fecha = (d)=>{

    let days= ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

    let fecha = new Date();
    
    let dia = days[fecha.getDay()];
    
    return <div className='date'>
            <span className="center_content">{dia}</span>    
        </div>

}

export default Fecha