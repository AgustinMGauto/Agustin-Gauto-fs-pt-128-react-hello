const Footer = () => {
	return (
		<>
			<footer className="bg-light text-center p-3 border-top mt-3">
            <div className="container-fluid d-flex justify-content-between">
                <p className="text-muted">
                    {new Date().getFullYear()} Skates Gauto | Todos los derechos reservados. 
                </p>
                <p className="small mt-1">
                    <a href="/politica-privacidad" className="text-decoration-none text-muted mx-2"><i class="fa-brands fa-instagram"></i>SkatesGauto</a>
                    |
                    <a href="/terminos-uso" className="text-decoration-none text-muted mx-2"><i class="fa-brands fa-facebook"></i>SkatesGauto</a>
                </p>
            </div>
        </footer>

		</>
	);
};

export default Footer;