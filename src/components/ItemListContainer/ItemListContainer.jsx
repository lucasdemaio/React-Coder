import { useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import { getProducts } from "../../data/data.js"
import {useParams} from "react-router-dom"
import "./itemlistcontainer.css" 

const ItemListContainer = ({saludo}) => {
  const [products, setProducts] = useState([])
  const { idCategory } = useParams()
  
  useEffect(()=> {
    getProducts()
    .then((data) => {
      if(idCategory){
        const filterProducts = data.filter( (product)=> product.category === idCategory )
        setProducts(filterProducts)
      }else{
        setProducts(data)
      }
    })
    .catch((error)=>{
      console.log(error)
    })
    .finally(()=>{
      console.log("Promesa finalizada")
    })
  },[idCategory])


  return (
    <div className="itemlistcontainer">
        <h1>{saludo}</h1>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer