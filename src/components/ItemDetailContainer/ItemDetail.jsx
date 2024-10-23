import "./itemDetailContainer.css"

const ItemDetail = ({ product }) => {
    return (
      <div className="item-detail-container">
        <div className="item-detail">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          
          
          {product.price !== undefined ? (
            <p className="item-detail-price">
              Precio: {product.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
            </p>
          ) : (
            <p className="item-detail-price">Precio no disponible</p>
          )}
          <button className="add-to-cart">Agregar al carrito</button>
        </div>
      </div>
    )
}
export default ItemDetail