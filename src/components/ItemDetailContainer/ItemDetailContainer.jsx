import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"
import Loading from "../Loading/loading.jsx"



const ItemDetailContainer = () => {
  const { idProduct } = useParams();
  const [product, setProduct] = useState({ image: [] });
  const [loading, setLoading] = useState(true)

  const getProductById = () => {
    const docRef = doc( db, "products", idProduct )
    getDoc(docRef)
      .then((dataDb)=> {
        const productDb = { id: dataDb.id, ...dataDb.data() }
        setProduct(productDb)
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener el producto: ", error);
        setLoading(false);
      });
  }

  useEffect( ()=> {
    getProductById()
  }, [idProduct] )
  

  return (
        <div>
             {loading ? <Loading /> : <ItemDetail product={product} />}
        </div>    
  )
}


export default ItemDetailContainer