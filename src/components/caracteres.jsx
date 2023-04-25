function Caracteres({ caracter }){
    return(
        <div className="text.center p-5 text-white">
            <h3>{caracter.name}</h3>
            <img className="img-fluid rounded-pill" src={caracter.image} alt={caracter.name} />
            <p>Origen: {caracter.origin.name}</p>
        </div>
    )
}

export default Caracteres