import "./MiOrg.css"
import {useState} from "react"
const MiOrg = () =>{
    // Estado - hooks
    // useState
    // para ocultar el formulario y mostrarlo
    // const [nombreVariable,funcionActualizadora] = useState(valorInicial)

    const [mostrar,actualizarMostrar] = useState(true) 

    const manejarClick = () => {
        console.log("Mostrar/Ocultar elemento",!mostrar)
        actualizarMostrar(!mostrar)
    }

    return <section className="orgSection">
                <h3 className="title" > Mi Organizacion </h3>
                <img src="/img/add.png" alt="add" onClick={manejarClick}/>
     </section>
}

export default MiOrg;