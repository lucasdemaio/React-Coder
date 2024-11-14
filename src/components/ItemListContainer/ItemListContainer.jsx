import { useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db.js"
import {useParams} from "react-router-dom"
import "./itemlistcontainer.css"
import Loading from "../Loading/loading.jsx"


const ItemListContainer = ({saludo}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { idCategory } = useParams()

  const getProducts = () => {
    const productsRef = collection( db, "products" )
    setLoading(true);
    getDocs(productsRef)
      .then((dataDb)=> {
        const productsDb = dataDb.docs.map((productDb)=> {
          return { id: productDb.id , ...productDb.data() }
        })

        setProducts(productsDb)
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const getProductsByCategory = () => {
    const productsRef = collection(db, "products")
    const queryCategories = query( productsRef, where("category", "==", idCategory) )
    setLoading(true);
    getDocs(queryCategories)
      .then((dataDb)=> {
        const productsDb = dataDb.docs.map((productDb)=>{
          return { id: productDb.id, ...productDb.data() }
        })

        setProducts(productsDb)
      })
      .finally(() => {
        setLoading(false);
      });

  }
  
  useEffect(()=> {
    if(idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
  }, [idCategory])


  return (
    

    <div className="itemlistcontainer">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>{saludo}</h1>
          <ItemList products={products} />
        </>
      )}
    </div>
  )
} 

export default ItemListContainer