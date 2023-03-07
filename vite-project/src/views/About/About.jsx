import "./About.css";
import aboutme from "../../assets/img/aboutme.png";
import BarIcons from "../../components/BarIcons/BarIcons";

export default function About() {
  return (
    <>
      <div className="image-text">
        <div className="img-javier">
          <img src={aboutme} alt="javier" width={550} />
        </div>

        <div className="container-description">
          <h2>
            <strong>MARVI</strong>
          </h2>
          <p>
            Es una pequeña red logística que ofrece envíos de calidad en la
            parte sur de Extremadura. Más de 150 clientes en 25 municipios
            confían en nuestro servicio de paquetería y mensajería.
            <br />
            Con personal dedicado y años de experiencia, estamos comprometidos
            con los remitentes y los destinatarios satisfechos. Garantizamos
            entregas rápidas y seguras.
            <br />
            También ofrecemos numerosos servicios adicionales para dotar de una
            gran adaptabilidad a tus envíos nacionales. Nuestro objetivo es
            desarrollar servicios que cumplan con las expectativas de nuestros
            clientes. Para ello, damos respuesta a sus necesidades logísticasy
            de distribución mediante el desarrollo constante de recursos humanos
            y técnicos para garantizar la mejora continua de nuestros servicios.
          </p>
        </div>
      </div>
      <div className="iconos">
      <BarIcons />
</div>
      
    </>
  );
}
