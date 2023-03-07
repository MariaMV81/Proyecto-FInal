import "./Footer.css";
import MarviBlancor from "../../assets/img/MarviBlancor.png";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="footer1">
            <img src={MarviBlancor} alt="logo Marvi" width={250} />
        
          <div className="box1">
            <Link to="#">Escríbenos</Link>
            <Link to="#">Servicio telefónico</Link>
            <Link to="#">Política de privacidad</Link>
            <Link to="#">Opiniones de clientes</Link>
            <Link to="#">Aviso de privacidad y cookies</Link>
          </div>
          <div className="box2">
            <h3>Suscribete a nuestra new letter</h3>
            <form className="footer-formulario">
              <input type="email" placeholder="introduce tu email" />
              <button type="submit">Suscribirme</button>
              <div>
                <input
                  type="checkbox"
                  id="politica de privacidad"
                  value="politica de privacidad"
                  name="politicadeprivacidad"
                />
                <label for="privacity">
                  <small>Acepto la política de privacidad de esta web.</small>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="footer2"> Copyright © 2023 MMV-Todos los derechos reservados. </div>
      </div>
    </footer>
  );
}
