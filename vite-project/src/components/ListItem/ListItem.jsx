import "./ListItem.css";
import { Link } from "react-router-dom";

export default function ListItem({ item, setState, toogleState, index, id }) {
  return (
    <>
      <div className="list-item " >
        <div
          //onClick={() => toogleState(index)}
          className={` ${item.completed && "dark "} `}
        >
          <Link to={`/Admin/${id} `} >
            <span className={`${item.completed}`}>
              <b>Nº Albara: </b>
              {item.n_albaran}
            </span>{" "}
            |

            <span className={`${item.completed}`}>
              <b>Remitente: </b>
              {item.remitente}
            </span>{" "}
            |

            <span className={`${item.completed}`}>
              <b>Destino: </b>
              {item.destino}
            </span>{" "}
            |

            <span className={`${item.completed}`}>
              <b>Consignatario: </b>
              {item.consignatario}
            </span>{" "}
            |

            <span className={`${item.completed}`}>
              <b>Direccion: </b>
              {item.domicilio}
            </span>{" "}
            |

            <span className={`${item.completed}`}>
              <b>Nº Bultos: </b>
              {item.n_bultos}
            </span>{" "}
            |
            
            <span className={`${item.completed}`}>
              <b>Kilos: </b>
              {item.kilos}
            </span>{" "}
            |
          </Link>
        </div>
        <div>
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
      </div>
    </>
  );
}
