import AdminForm from "../../components/AdminForm/AdminForm";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const { id } = useParams();
  const fechaActual = new Date();
  const anio = fechaActual.getFullYear();
  const mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2);
  const dia = ("0" + fechaActual.getDate()).slice(-2);

  useEffect(
    () => {
      console.log(id);
      async function fetchTodos() {
        const response = await fetch(
          `http://localhost:3000/user/albaranes/${id}`
        );
        const data = await response.json(); //comvierto la respuesta del fetch en un json
        setTodos(data[0]); //y lo meto en mi estado
      }
      fetchTodos();
    },

    [] //Array de dependencia para que no me salga todo lo que hay en las listas de la página
  );
  console.log(id, "holaaa");

  const albaranEnviado = true; //poner aquí la lógica para determinar si el albarán se envió o no

  return <AdminForm todos={todos} id={id} />;
}
