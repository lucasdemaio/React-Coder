import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./itemDetailContainer.css";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.image[0]);
  const [showItemCount, setShowItemCount] = useState(true);
  const { addProductInCart } = useContext(CartContext);

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count };
    addProductInCart(productCart);
    setShowItemCount(false);
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <div className="main-image">
          <img src={currentImage} alt={product.name} />
        </div>

        <div className="secondary-images">
          {product.image.map((image) => (
            <img
              src={image}
              key={image}
              onClick={() => setCurrentImage(image)}
              className="secondary-image"
              alt={`Producto secundario ${product.name}`}
            />
          ))}
        </div>

        <h2>{product.name}</h2>
        <p>{product.description}</p>

        {product.price !== undefined ? (
          <p className="item-detail-price">
            Precio: {product.price.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </p>
        ) : (
          <p className="item-detail-price">Precio no disponible</p>
        )}

        {showItemCount === true ? (
          <ItemCount stock={product.stock} addProduct={addProduct} />
        ) : (
          <div className="purchase-options">
            <Link to="/cart" className="finish-purchase">
              Finalizar mi Compra
            </Link>
            <Link to="/" className="continue-shopping">
              Continuar Comprando
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
