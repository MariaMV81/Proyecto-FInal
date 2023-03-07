import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import iarrowleft from "../../assets/img/iarrowleft.png";
import iarrowright from "../../assets/img/iarrowright.png";

const Carousel = ({ children }) => {
  const carousel = useRef(null);
  const intervaloCarousel = useRef(null);

  //La intervaloCarouselvariable en el useEffectenlace debe borrarse clearIntervalcuando el componente se desmonta para evitar pérdidas de memoria.

  const siguiente = () => {
    //comprobamos que el carousel tenga elementos
    if (carousel.current.children.length > 0) {
      //Obtenemos el primer elemento del carousel
      const primerElemento = carousel.current.children[0];

      //Establecemos la transicion para el carousel
      carousel.current.style.transition = `300ms ease-out all`;

      const tamañoCarousel = carousel.current.children[0].offsetWidth;

      //Movemos el carousel
      carousel.current.style.transform = `translateX(-${tamañoCarousel}px)`;

      const transicion = () => {
        //reiniciamos la posicion del carousel
        carousel.current.style.transition = "none";
        carousel.current.style.transform = `translateX(0)`;

        //Tomamos el primer elemento y lo mandamos al final.
        carousel.current.appendChild(primerElemento);
        carousel.current.removeEventListener("transitionend", transicion);
      };

      //EventListener para cuando termina la animación.
      carousel.current.addEventListener("transitionend", transicion);
    }
  };

  const anterior = () => {
    if (carousel.current.children.length > 0) {
      //Obtener el ultimo elemento del carousel
      const index = carousel.current.children.length - 1;
      const ultimoElemento = carousel.current.children[index];
      carousel.current.insertBefore(
        ultimoElemento,
        carousel.current.firstChild
      );

      carousel.current.style.transition = "none";

      const tamañoCarousel = carousel.current.children[0].offsetWidth;
      carousel.current.style.transform = `translateX(-${tamañoCarousel}px)`;

      setTimeout(() => {
        carousel.current.style.transition = "300ms ease-out all";
        carousel.current.style.transform = `translateX(0)`;
      }, 300);
      //clearTimeout = La setTimeout función en la anteriorfunción debe borrarse con clearTimeoutpara evitar pérdidas de memoria.
    }
  };

  useEffect(() => {
    intervaloCarousel.current = setInterval(() => {
      siguiente();
    }, 5000);

    //Eliminar los intervalos cuando ponemos cursor encima
    carousel.current.addEventListener("mouseenter", () => {
      clearInterval(intervaloCarousel.current);
    });

    //volvemos a poner el intervalo cuando quitemos el cursor del carousel
    carousel.current.addEventListener("mouseleave", () => {
      intervaloCarousel.current = setInterval(() => {
        siguiente();
      }, 5000);
    });
  }, []);

  return (
    <ContenedorPrincipal>
      <ContenedorCarousel ref={carousel}>{children}</ContenedorCarousel>

      <Controles>
        <Boton onClick={anterior}>
          <img src={iarrowleft} alt="flechaIzquierda" />
        </Boton>
        <Boton derecho onClick={siguiente}>
          <img src={iarrowright} alt="flechaDerecha" />
        </Boton>
      </Controles>
    </ContenedorPrincipal>
  );
};

const ContenedorPrincipal = styled.div`
  position: relative;
`;
const ContenedorCarousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
  z-index: 10;
  max-height: 500px;
  position: relative;

  img {
    width: 100%;
    height: auto;
    vertical-align: top;
    object-fit: cover;
  }

  h1 {
    display: block;
    text-align: left;
    text-overflow: clip;
    font-weight: 600;
    font-size: 4rem;
    padding-top: 200px;
    width: 90%;
    padding-top: 150px;
    color: white;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  & h3 {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    color: #727272;
    font-size: 36px;
    text-align: center;
  }
  & h2 {
    position: absolute;
    top: 75%;
    left: 25%;
    transform: translate(-50%, -50%);
    color: #f87724;
    font-size: 96px;
    font-width: 600;
    text-align: center;
  }
  & h6 {
    position: absolute;
    top: 85%;
    left: 35%;
    transform: translate(-50%, -50%);
    color: #292929;
    font-size: 32px;
    text-align: rigth;
  }

  @media screen and (max-width: 1280px) {
    .title-home-strong {
      font-size: 9vw;
    }
  }
`;

const TextoSlide = styled.div`
  background: ${(props) =>
    props.colorFondo ? props.colorFondo : "rgba(0,0,0, .3) "};
  color: ${(props) => (props.colorTexto ? props.colortexto : "#fff")};
  width: 100%;
  padding: 10px 60px;
  text-align: center;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 700px) {
    position: relative;
  }
`;

const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  filter: ${(props) =>
    props.derecho
      ? "drop-shadow(-2px 0px 0px #c2c2)"
      : "drop-shadow(2px 0px 0px #c2c2)"};

  ${(props) => (props.derecho ? "right: 0" : "left: 0")}
`;

export { Carousel, Slide, TextoSlide };
