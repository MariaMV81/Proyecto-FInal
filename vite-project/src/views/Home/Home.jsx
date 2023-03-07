import "./Home.css";
import {
  Carousel,
  Slide,
  TextoSlide,
} from "../../components/Carousel/Carousel";
import javir from "../../assets/img/javir.png";
import mudanzar from "../../assets/img/mudanzar.png";
import contacto from "../../assets/img/contacto.png";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Home() {
  return (
    <>
      <main>
        <Carousel>
          <Slide>
            <img src={javir} alt="furgonetaback" />
          
            <TextoSlide colorFondo="orange" coloTexto="white">
              <p>MARVI</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <img src={mudanzar} alt="pedido" />
            <TextoSlide coloTexto="orange">
              <p>MUDANZAS</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <img src={contacto} alt="pedido2" />
            <TextoSlide>
              <p>CONTACTO</p>
            </TextoSlide>
          </Slide>
        </Carousel>
      </main>

      <ContactForm />
      
      
    </>
  );
}
