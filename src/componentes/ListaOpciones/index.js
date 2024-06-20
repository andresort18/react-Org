import "./listaOpciones.css"
const listaOpciones = () => {

    // metodo map -> arreglo.map( (equipo, index) => {
    //  return <opcion> </option>
        //} )
    const equipos = [
        "Programacion",
        "Front end",
        "Data Science",
        "Devops",
        "Movil",
        "Innovacion y Gestion"
    ]
    
    return <div className = "lista-opciones">
                <label> Equipos </label>
                <select>
                    { equipos.map( (equipo , index) => {
                        return <option key={index}>{equipo}</option>
                    }) }
                </select>
         </div>
}

export default listaOpciones;