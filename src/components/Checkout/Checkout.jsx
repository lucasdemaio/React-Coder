import { useState } from "react"
import FormCheckout from "./FormCheckout"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext.jsx"
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import validateForm from "../Utils/validateForm.js"
import { toast } from "react-toastify"
import "./checkout.css"

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    confirmaremail: ""
  })
  const [idOrder, setIdOrder] = useState(null)
  const { cart, totalPrice, deleteCart } = useContext(CartContext)

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = async(event) => {
    event.preventDefault()

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: totalPrice()
    }

    try {
      const response = await validateForm(dataForm)
      console.log(response)
      if(response.status === "error") throw new Error(response.message)
      toast.success("Finalizando orden...")
      uploadOrder(order)

    } catch (error) {
      toast.error(error.message)
    }
  }

  const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders")
    addDoc(ordersRef, newOrder)
      .then((response) => setIdOrder(response.id))
      .catch((error) => console.log(error))
      .finally(() => {
        updateStock()
      })
  }

  const updateStock = () => {
    cart.map(({ id, quantity, ...dataProduct }) => {
      const productRef = doc(db, "products", id)
      setDoc(productRef, { ...dataProduct, stock: dataProduct.stock - quantity })
    })
    deleteCart()
  }

  return (
    <div>
      {
        idOrder === null ? (
          <FormCheckout
            dataForm={dataForm}
            handleChangeInput={handleChangeInput}
            handleSubmitForm={handleSubmitForm} />
        ) : (
        <div className="order-confirmation">
            <h2>Su orden fue enviada correctamente.</h2>
            <p>Su número de seguimiento es: <span className="order-id">{idOrder}</span></p>
            <Link to="/" className="return-home">Volver al inicio</Link>
        </div>
        
        )
      }
    </div>
  )
}
export default Checkout