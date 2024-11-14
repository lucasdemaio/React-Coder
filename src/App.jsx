import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/cart'
import Checkout from './components/Checkout/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  
  return (      
    <div>

      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme="dark" />
            <Routes>
              <Route path="/" element={ <ItemListContainer saludo={"Encuentra lo último en tecnología y electrodomésticos a los mejores precios"}/>} />
              <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Encuentra lo último en tecnología y electrodomésticos a los mejores precios"} />} />
              <Route path="/detail/:idProduct" element={ <ItemDetailContainer /> } />
              <Route path="/cart" element={ <Cart /> } />
              <Route path="/checkout" element={ <Checkout /> } />
            </Routes>
            <Footer /> 
        </CartProvider>
      </BrowserRouter>
          
    </div>
  )
}

export default App
