import "./navbar.css"
import CartWidget from "./CartWidget"
import brandlogo from "../../assets/brandlogo.png"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">

      <Link to="/" className="brand" >        
          <p className="title-brand">ElectroHogar</p>
          <img className="icon-brand" src={brandlogo} alt="" />
      </Link>

      <ul className="listadocateg">

        <li>          
          <Link to= "/category/celulares" >Celulares</Link>
        </li>
        <li>          
          <Link to= "/category/televisores" >Televisores</Link>
        </li>
        <li>          
          <Link to= "/category/electrodomesticos" >Electrodomesticos</Link>
        </li>
        <li>          
          <Link to= "/category/computacion" >Computacion</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar