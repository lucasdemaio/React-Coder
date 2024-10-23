import cartwidgeticon from "../../assets/cartwidget.png"
import "./navbar.css"

const CartWidget = () => {
  return (
    <div className="cartwidget-container">
        <img src={cartwidgeticon} alt="" width={90}/>
        <p>1</p>
    </div>
    
  )
}

export default CartWidget