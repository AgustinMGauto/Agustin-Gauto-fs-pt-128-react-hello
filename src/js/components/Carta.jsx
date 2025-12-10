

const skateBoard = [{id:1,image:"https://blog.bextremeboards.com/wp-content/uploads/2017/05/tipos-skates-1.jpg",nombre:"Agus"}]

const Carta = () => {
    return (
        <div className="card" >
            <img src={skateBoard.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default Carta