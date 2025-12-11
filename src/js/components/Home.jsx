import Navbar from '../components/Navbar';
import Heroes from '../components/Heroes';
import Carta from './Carta';


const Home = () => {

	const skates = [
  {
    id: 1,
    nombre: "Element Maple Pro",
    img_url: "https://image.made-in-china.com/365f3j00dWQiywBtnUpq/Venta-Caliente-Patineta-Cruiser-con-Ruedas-de-PU-Altas-Patinetas-de-Madera-de-Arce.webp",
    description: "Patineta de arce canadiense con diseño ligero y resistente para trucos técnicos."
  },
  {
    id: 2,
    nombre: "Santa Cruz Classic",
    img_url: "https://i.ebayimg.com/00/s/NzgzWDk1Mw==/z/KycAAOSwgXhhklkK/$_57.PNG?set_id=8800005007",
    description: "Modelo clásico con gráficos icónicos y una gran estabilidad para principiantes y expertos."
  },
  {
    id: 3,
    nombre: "Plan B Street Edition",
    img_url: "https://s.alicdn.com/@sc04/kf/H0695ccea0222412aa58bb6db10705279I.jpg",
    description: "Ideal para street skating, con pop fuerte y shape cómodo para flips."
  },
  {
    id: 4,
    nombre: "Girl Skateboards OG",
    img_url: "https://cdn.webshopapp.com/shops/44056/files/334136991/image.jpg",
    description: "Tablas duraderas con excelente control en rampas y bowls."
  },
  {
    id: 5,
    nombre: "Baker Pro Series",
    img_url: "https://doblevdoble.com/4754348-large_default/enuff-pow-azul-775-skateboard-completo.jpg",
    description: "Perfecta para trucos agresivos; una tabla muy popular entre los skaters de nivel alto."
  }
];


	return (
		<>
			<Navbar />
				<div className= "Container">
					<Heroes/>
					<div className='row'>
						{skates.map((skate)=> (
							<Carta skate={skate}/>
						))}
					</div>
				</div>

		</>
		
	);
};

export default Home;