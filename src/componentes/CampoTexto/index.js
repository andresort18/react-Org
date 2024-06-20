import "./campoTexto.css"
const CampoTexto = (props) => {
    console.log(props);
    const placeholderModificador = `${props.placeholder}...`
    return <div className = "campo-texto">
            <label> {props.titulo} </label>
            <input placeholder={placeholderModificador}/>
    </div>
}

export default CampoTexto