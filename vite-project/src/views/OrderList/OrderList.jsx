import "./OrderList.css";
import { useEffect, useState } from "react";
import List from "../../components/List/List";
import { v4 as uuid } from "uuid";
import Time from "../../components/Time/Time";

export default function OrderList() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState("");

  const fechaActual = new Date();
  const anio = fechaActual.getFullYear();
  const mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2);
  const dia = ("0" + fechaActual.getDate()).slice(-2);

  useEffect(
    () => {
      console.log(dia, mes, anio);
      async function fetchTodos() {
        const response = await fetch(
          `http://localhost:3000/user/albaranes/${dia}/${mes}/${anio}`
        );
        const data = await response.json(); //comvierto la respuesta del fetch en un json
        setTodos(data); //y lo meto en mi estado
      }
      fetchTodos();
      console.log(todos);
    },

    [] //Array de dependencia para que no me salga todo lo que hay en las listas de la página
  );

  function AddTaskToList(e, titleTodo) {
    //esta funcion recibe el evento y la nueva tarea
    e.preventDefault();
    const newTodo = {
      id: uuid(), //el id lo genera mi libreria uuid, que me da una funcion y esa funcion me da un id aleatorio
      title: titleTodo,
      completed: false,
      userId: 1,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]); //luego lo que hace es que deja los todos que tenemos y añade los que le vienen por argumento
    setNewTodo("");
  }

  return (
    <>
      <div className="container-orderList">
        <div className="tiempo">
          <Time />
        </div>

        <div className="container-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d798155.22585931!2d-6.216601510861039!3d38.60761483549214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0xd1374262289cd91%3A0x100f625102c8464f!2sAzuaga%2C%2006920%2C%20Badajoz!3m2!1d38.261261999999995!2d-5.6747209!4m5!1s0xd145b1df8e24da3%3A0x692f014a1c3334e1!2sDon%20Benito!3m2!1d38.954463!2d-5.8618982!5e0!3m2!1ses!2ses!4v1677165126285!5m2!1ses!2ses"
            width="500"
            height="350"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="container-list">
          <h1>PEDIDOS</h1>
          <div className="">
            <List items={todos} setState={setTodos} />
          </div>
        </div>
      </div>
    </>
  );
}
