



const Carta = ({skate}) => {
    const { nombre, img_url, descripcion } = skate

    return (
        <div className="card" >
            <img src={img_url} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{descripcion}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
        </div>
    )
}

export default Carta