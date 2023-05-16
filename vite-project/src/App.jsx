import "./App.css";
import About from "./views/About/About";
import Home from "./views/Home/Home";
import LoginRegister from "./views/Login/Login-Register";
import Layout from "./components/Layout/Layout.jsx";
import PublicRoute from "./routes/PublicRoute/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext/AuthContext";
import Cliente from "./views/Cliente/Cliente";
import Admin from "./views/Admin/Admin";
import { ROLES } from "./const/roles";
import { LOGIN, ABOUT, UNAUTHORIZED } from "./const/routes/";
import Unauthorized from "./views/Unauthorized/Unauthorized";
import OrderList from "./views/OrderList/OrderList";
import CustomerOrders from "./views/CustomerOrders/CustomerOrders";

export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path={ABOUT} element={<About />} />

            <Route path={UNAUTHORIZED} element={<Unauthorized />} />

            {/* Rutas Públicas */}
            <Route element={<PublicRoute />}>
              <Route path={LOGIN} element={<LoginRegister />} />
            </Route>

            {/* Rutas Privadas */}
            <Route element={<PrivateRoute allowedRoles={[ROLES.User]} />}>
              <Route path="cliente" element={<Cliente />} />
              <Route path="customerOrders" element={<CustomerOrders />} />

              
            </Route>
              <Route element={<PrivateRoute allowedRoles={[ROLES.Admin]} />}>
                <Route path="Admin/:id" element={<Admin />} />
                <Route path="orderList" element={<OrderList />} />
              </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
