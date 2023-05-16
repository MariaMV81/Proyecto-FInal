import "./BarIcons.css";
import imendelivery from "../../assets/img/imendelivery.png";
import ifurgodelivery from "../../assets/img/ifurgodelivery.png";
import icajav2 from "../../assets/img/icajav2.png";

export default function BarIcons() {
  return (
    <div className="bar-icons">
      <div className="container-icons">
        <img
          src={imendelivery}
          className="icono-hora"
          alt="iconohora"
          width={150}
        />
        <div className="text-icons">
          <h3>FLEXIBILIDAD HORARIA</h3>
          <p>
            <small>Horario de trabajo flexible.</small>
          </p>
        </div>
      </div>

      <div className="container-icons">
        <img
          src={ifurgodelivery}
          className="mano-caja"
          alt="manocaja"
          width={150}
        />
        <div className="text-icons">
          <h3>ENVIO SEGURO</h3>
          <p>
            <small>100% garantizado</small>
          </p>
        </div>
      </div>

      <div className="container-icons">
        <img src={icajav2} className="verify" alt="iverify" width={150} />
        <div className="text-icons">
          <h3>CERTIFICADO DE CALIDAD</h3>
          <p>
            <small>ISO 9001:2015</small>
          </p>
        </div>
      </div>
    </div>
  );
}
