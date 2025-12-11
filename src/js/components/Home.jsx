import Navbar from '../components/Navbar';
import Heroes from '../components/Heroes';
import Carta from './Carta';
import Footer from './Footer';


const Home = () => {

	const skates = [
  {
    id: 1,
    nombre: "Pre-assembled Skateboards",
    img_url: "https://image.made-in-china.com/365f3j00dWQiywBtnUpq/Venta-Caliente-Patineta-Cruiser-con-Ruedas-de-PU-Altas-Patinetas-de-Madera-de-Arce.webp",
    description: "Patineta de arce canadiense con diseño ligero y resistente para trucos técnicos."
  },
  {
    id: 2,
    nombre: "Custom skateboards",
    img_url: "https://cdn.webshopapp.com/shops/44056/files/337476152/image.jpg",
    description: "Tablas duraderas con excelente control en rampas y bowls."
  },
  {
    id: 3,
    nombre: "Decks",
    img_url: "https://www.xtreme-skate.com/7513-large_default/santa-cruz-tabla-skateboard-classic-dot-8-white.jpg",
    description: "Modelo clásico con gráficos icónicos y una gran estabilidad para principiantes y expertos."
  },
  {
    id: 4,
    nombre: "Trucks",
    img_url: "https://coresurfingshop.com/cdn/shop/files/carhartt-wip-pack-ejes-skate-ace-af1-carhartt-wip-trucks.jpg?v=1731516488&width=1946",
    description: "Ideal para street skating, con pop fuerte y shape cómodo para flips."
  },
  {
    id: 5,
    nombre: "Wheels",
    img_url: "https://www.xtreme-skate.com/10966-home_default/spitfire-ruedas-skate-formula-four-radial-full-54mm-99a-4-piezas.jpg",
    description: "Perfecta para trucos agresivos; una tabla muy popular entre los skaters de nivel alto."
  },
   {
    id: 6,
    nombre: "Griptape",
    img_url: "https://monarksupply.com/wp-content/uploads/2023/05/18989-thickbox_default-Lija-skate-Mob-Griptape-X-Independent-9-Bar-Grip.jpg",
    description: "Perfecta para trucos agresivos; una tabla muy popular entre los skaters de nivel alto."
  },
  {
    id: 7,
    nombre: "helmets",
    img_url: "https://m.media-amazon.com/images/I/61pUVtu73nL._AC_UF894,1000_QL80_.jpg",
    description: "Perfecta para trucos agresivos; una tabla muy popular entre los skaters de nivel alto."
  },
  {
    id: 8,
    nombre: "Tools",
    img_url: "https://m.media-amazon.com/images/I/81-b-wKu9bL._AC_UF1000,1000_QL80_.jpg",
    description: "Perfecta para trucos agresivos; una tabla muy popular entre los skaters de nivel alto."
  },
  {
    id: 9,
    nombre: "fingers skate",
    img_url: "https://img.lazcdn.com/g/p/e038abbbbe4feb1460985c82036b690b.jpg_960x960q80.jpg_.webp",
    description: "Perfecta para trucos agresivos; una tabla muy popular entre los skaters de nivel alto."
  },
  {
    id: 10,
    nombre: "Bearings",
    img_url: "https://skatespain.shop/cdn/shop/files/roml001-rodamientos-skate-mini-logo.jpg?v=1738607415&width=1920",
    description: "Perfecta para trucos agresivos; una tabla muy popular entre los skaters de nivel alto."
  },
  {
    id: 11,
    nombre: "screws",
    img_url: "https://m.media-amazon.com/images/I/51x8F4a4SnL.jpg",
    description: "Perfecta para trucos agresivos; una tabla muy popular entre los skaters de nivel alto."
  },
  {
    id: 12,
    nombre: "wax",
    img_url: "https://www.slideinline.com/23324-thickbox_default/cera-sushi-wax-onoff-wax-red.jpg",
    description: "Perfecta para trucos agresivos; una tabla muy popular entre los skaters de nivel alto."
  },
];


	return (
		<>
			<Navbar />
				<div className= "Container">
					<Heroes/>
					<div className='row'>
						{skates.map((skate)=> (
							<Carta key={skate.id} skate={skate}/>
						))}
					</div>
          <Footer/>
				</div>

		</>
		
	);
};

export default Home;