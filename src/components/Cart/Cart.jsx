import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { BsFillTrash3Fill } from "react-icons/bs"
import { Link } from "react-router-dom"
import "./cart.css"



const Cart = () => {
    const {cart, totalPrice, deleteProductById, deleteCart} = useContext(CartContext)

    if( cart.length === 0 ){
        return(
          <div className="empty-cart">
            <h2 className="title-empty-cart">No hay productos en su carrito</h2>
            <Link to="/" className="button-home-empty-cart" >Volver al inicio</Link>
          </div>
        )
    }
    

    return (
        <div className="cart" >
            
            <h1 className="title-cart">Carrito</h1>

                <div className="cart-header">   
                <p className="header-item">Imagen</p>
                <p className="header-item">Descripción</p>
                <p className="header-item">Precio unidad</p>
                <p className="header-item">Cantidad</p>
                <p className="header-item">Precio parcial</p>
                <p className="header-item">Eliminar</p>
                </div>


            {   cart.map( (productCart) => (
                <div className="item-cart" key={productCart.id}>
                <img className="img-item-cart" src={productCart.image[0]} width={100} alt="" />
                <p className="text-item-cart">{productCart.name}</p>
                <p className="text-item-cart">${productCart.price}</p>
                <p className="text-item-cart"> {productCart.quantity}</p>
                <p className="text-item-cart"> ${ productCart.price * productCart.quantity } </p>
                <button className="delete-item-cart" onClick={ () => deleteProductById(productCart.id) } >
                    <BsFillTrash3Fill  />
                </button>
                </div>
            ))                
            }
            <div className="info-cart">
                <p className="text-info-cart">Precio total: ${totalPrice()}</p>
                <button className="button-delete-cart" onClick={deleteCart} >Vaciar carrito</button>
                <Link to="/checkout" className="button-finish-purchase">Terminar mi Compra</Link>
            </div>
            
            

        </div>
    )      
}


export default Cart