import "./CustomerOrders.css";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
export default function CustomerOrders() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState("");
  const { authorization } = useAuthContext();


  useEffect(
    () => {
      async function fetchTodos() {
        const response = await fetch(
          `http://localhost:3000/user/albaranes/clientes/${authorization.id}`
        );
        const data = await response.json(); //comvierto la respuesta del fetch en un json
        setTodos(data); //y lo meto en mi estado
      }
      fetchTodos();
      console.log(todos);
    },

    [] //Array de dependencia para que no me salga todo lo que hay en las listas de la página
  );
  

  return (
    
    <>
    
      {todos && todos.map((todo) => (
        <Card todos={todo}
      
        
        />
      ))}
    </>
  );
}
