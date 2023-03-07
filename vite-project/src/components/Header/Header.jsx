import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import React, { useState } from "react";
import LOGOMARVIr from "../../assets/img/LOGOMARVIr.png";
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
        <Link to="/">
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
            {authorization.rol == 0 && ( //si hay autorizacion entonces..
              <div className="li-header">
                <li>
                  <Link to="/about"> Sobre nosotros</Link>
                </li>
                <li>
                  <Link to="/cliente"> Clientes</Link>
                </li>
                <li>
                  <Link to="/customerOrders">Mis Pedidos</Link>
                </li>
              </div>
            )}

            {authorization.rol == 1 && (
              <li>
                <Link to={`Admin/${authorization.id}`}>Administrador</Link>

                <Link to="/orderList"> PEDIDOS</Link>
              </li>
            )}
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
