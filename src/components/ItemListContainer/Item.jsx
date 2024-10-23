import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.image} className="img-item" alt="" width={100} />
      <p className="text-item">{product.name}</p>
      <p className="text-item-price">
        {product.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
      </p>

      <Link to={"/detail/" + product.id} >Ver detalles</Link>
    </div>
  )
}
export default Item