import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  }

  const navigateToAbout = () => {
    navigate("/about");
  }

  return (
    <nav className="bg-yellow-700 p-4">
      <div className="container flex justify-between items-center">
        <a onClick={navigateToHome} className="text-white font-semibold">
          <img src={logo} alt="Logo" className="inline w-10" />
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#" onClick={navigateToHome} className="text-white">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" onClick={navigateToAbout} className="text-white">
              Acerca de
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
