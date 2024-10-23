import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

//import Contador from './components/Ejemplos/contador'


function App() {
  
  return (      
    <div>

      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer saludo={"Encuentra lo último en tecnología y electrodomésticos a los mejores precios"}/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Encuentra lo último en tecnología y electrodomésticos a los mejores precios"} />} />
          <Route path="/detail/:idProduct" element={ <ItemDetailContainer /> } />
        </Routes>
        <Footer /> 
      </BrowserRouter>

      
      {/* <Contador /> */}      
    </div>
  )
}

export default App
