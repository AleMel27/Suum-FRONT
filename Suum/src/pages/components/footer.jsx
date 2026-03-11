import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#24262B] px-20 pt-20 pb-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap">

          {/* Compañia */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h4 className="text-white text-xl mb-6 font-medium border-b-2 border-[#00c3FF] pb-2 inline-block">
              Compañia
            </h4>

            <ul className="list-none p-0">
              <li>
                <NavLink
                  to="/nosotros"
                  className="text-[#BBBBBB] text-lg block mb-3 no-underline transition-all duration-300 ease-in-out hover:text-white hover:translate-x-1"
                >
                  Nosotros
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/servicios"
                  className="text-[#BBBBBB] text-lg block mb-3 no-underline transition-all duration-300 ease-in-out hover:text-white hover:translate-x-1"
                >
                  Nuestros servicios
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/privacidad"
                  className="text-[#BBBBBB] text-lg block mb-3 no-underline transition-all duration-300 ease-in-out hover:text-white hover:translate-x-1"
                >
                  Política de privacidad
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/afiliate"
                  className="text-[#BBBBBB] text-lg block mb-3 no-underline transition-all duration-300 ease-in-out hover:text-white hover:translate-x-1"
                >
                  Afíliate
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contactanos */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h4 className="text-white text-xl mb-6 font-medium border-b-2 border-[#00c3FF] pb-2 inline-block">
              Contáctanos
            </h4>

            <ul className="list-none p-0">
              <li>
                <NavLink
                  to="/consultas"
                  className="text-[#BBBBBB] text-lg block mb-3 no-underline transition-all duration-300 ease-in-out hover:text-white hover:translate-x-1"
                >
                  Consultas
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/compras"
                  className="text-[#BBBBBB] text-lg block mb-3 no-underline transition-all duration-300 ease-in-out hover:text-white hover:translate-x-1"
                >
                  Compras
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/envios"
                  className="text-[#BBBBBB] text-lg block mb-3 no-underline transition-all duration-300 ease-in-out hover:text-white hover:translate-x-1"
                >
                  Envíos
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/pagos"
                  className="text-[#BBBBBB] text-lg block mb-3 no-underline transition-all duration-300 ease-in-out hover:text-white hover:translate-x-1"
                >
                  Pagos
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div className="w-full md:w-1/4 px-4 mb-8">
            <h4 className="text-white text-xl mb-6 font-medium border-b-2 border-[#00c3FF] pb-2 inline-block">
              Síguenos
            </h4>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/arbuus.moda"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white transition-all duration-500 ease-in-out hover:bg-[#bfe5df] hover:text-[#353535] no-underline"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white transition-all duration-500 ease-in-out hover:bg-[#bfe5df] hover:text-[#353535] no-underline"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white transition-all duration-500 ease-in-out hover:bg-[#bfe5df] hover:text-[#353535] no-underline"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;