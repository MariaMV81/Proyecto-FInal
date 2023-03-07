import "./Card.css";
import {monthNames} from '../../const/monthNames'
export default function Card({ todos }) {
  return (
    <>
      <article className="article_card">
        <div className="fecha">
          <span className="dia"> {todos.dia_entrega}</span>
          <span className="mes">{monthNames[todos.mes_entrega]}</span>
        </div>
        <br/>
        <div className="container-albaran">
          <div>
            <p><strong>Remitente:</strong>{todos.remitente}</p>
          </div>
          <div className="destino-cp">
            <p><strong>Destino:</strong>{todos.destino}</p>
            <p><strong>C.P.:</strong>{todos.CP}</p>
          </div>
          <div>
            <p><strong>Consignatario:</strong>{todos.consignatario}</p>
          </div>
          <div>
            <p><strong>Domicilio:</strong>{todos.domicilio}</p>
          </div>
          <div className="bultos-k">
            <p><strong>Nº Bultos:</strong>{todos.n_bultos}</p>
            <p><strong>Kilos:</strong>{todos.kilos}</p>
          </div>
        </div>

        <div className="button-card">
          <button class="btn" onClick={(e) => setState(e, item.id)}>
            <svg
              viewBox="0 0 15 17.5"
              height="17.5"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
            >
              <path
                transform="translate(-2.5 -1.25)"
                d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                id="Fill"
              ></path>
            </svg>
          </button>
        </div>
      </article>
    </>
  );
}
