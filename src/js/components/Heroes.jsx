import React from "react";


const skateBoard = [{id:1,image:"https://blog.bextremeboards.com/wp-content/uploads/2017/05/tipos-skates-1.jpg",nombre:"Agus"}]



const Heroes = () => {
	return (
		<div className="p-5 mb-4 bg-light rounded-3 imgHome">
			<div className="container-fluid py-5">
				<h1 className="display-5 fw-bold">¡Bienvenido a mi Sitio de Venta de Skates!</h1>
				<p className="col-md-8 fs-4">Tenemos todo tipo de marcas</p>
				<button className="btn btn-primary btn-lg" type="button">Consigue aqui la tuya.</button>
			</div>
		</div>
	);
};

export default Heroes;