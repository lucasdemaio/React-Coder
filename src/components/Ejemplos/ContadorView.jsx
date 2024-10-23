import "./Contador.css"

const ContadorView = ({contador, aumentarContador}) => {
  return (

    <div className="contador-container">
        <div> Contador: {contador}</div>
        <button className="contador-button" onClick={aumentarContador}> + </button>
    </div>  
    )
}

export default ContadorView