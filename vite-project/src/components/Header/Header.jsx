import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import React, { useState } from "react";
import LOGOMARVIr from "../../assets/img/LOGOMARVIr.png";
import { ROLES } from "../../const/roles";
import "./Header.css";

export default function Header() {
  const { authorization, logout } = useAuthContext();

  const [menu, setmenu] = useState(false);

  const toggleMenu = () => {
    setmenu(!menu);
  };

  return (
    <header className="header">
      <div className="logoMarvi">
        <Link to="/" className="hover-logo" style={{ textDecoration: "none" }}>
          <img
            src={LOGOMARVIr}
            className="LOGOMARVI"
            alt="logoMavi"
            width={300}
          />
        </Link>
      </div>
      <div className="menu-bar">
        <nav className={`nav-menu ${menu ? "isActive" : ""}`}>
          <ul>
            <div className="li-header">
              <li>
                <Link to="/about"> Conócenos</Link>
              </li>
              {authorization.rol === ROLES.User && ( //si hay autorizacion entonces..
                <>
                  <li>
                    <Link to="/customerOrders">Mis Pedidos</Link>
                  </li>
                  <li>
                    <Link to="/cliente">Formulario de Pedido</Link>
                  </li>
                </>
              )}

              {authorization.rol === ROLES.Admin && (
                <>
                  <li>
                    <Link to={`Admin/${authorization.id}`}>Administrador</Link>
                  </li>
                  <li>
                    <Link to="/orderList"> PEDIDOS</Link>
                  </li>
                </>
              )}
            </div>
            {authorization.rol ? (
              <span
                className="logout"
                style={{ cursor: "pointer" }}
                onClick={logout}
              >
                Logout
              </span>
            ) : (
              <Link to="/login">Login </Link>
            )}
          </ul>
        </nav>
        <label for="burger" className="burger">
          <input id="burger" type="checkbox" onClick={toggleMenu} />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </header>
  );
}
