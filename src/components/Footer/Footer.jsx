import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>ElectroHogar</h4>
          <p>Encuentra lo último en tecnología y electrodomésticos a los mejores precios.</p>
        </div>

        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/login/" className="icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/?lang=es" className="icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/?hl=es" className="icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Correo: contacto@electrohogar.com</p>
          <p>Teléfono: +54 9 1234 5678</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 ElectroHogar. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer;
