import "./navbar.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"
import { LuShoppingCart } from "react-icons/lu";

const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext)

  const quantity = totalQuantity()

  return (
    <Link to="/cart" className="cartwidget">
      <LuShoppingCart className={ quantity > 0 ? "icon-cartwidget" : "empty-cartwidget" } />
      <p className="number-cartwidget">{ quantity >= 1 && quantity }</p>
    </Link>
    
  )
}

export default CartWidget