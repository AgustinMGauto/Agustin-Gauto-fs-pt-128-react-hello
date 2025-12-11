



const Carta = ({skate}) => {
    const { nombre, img_url, descripcion } = skate

    return (
        <div className="col-sm-6 col-md-4 col-lg-2 d-flex justify-content-center ">
        <div className="card me-4 mt-3 text-center " >
            <img src={img_url} className="card-img p-3" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title mb-5">{nombre}</h5>
                    <p className="card-text ">{descripcion}</p>
                    <a href="#" className="btn btn-dark position-absolute bottom-0 start-50 translate-middle-x mb-1">Comprar</a>
                </div>
        </div>
        </div>
    )
}

export default Carta