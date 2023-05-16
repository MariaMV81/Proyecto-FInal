import "./Contact.css";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { useFormik } from "formik";
import { ContactFormSchema } from "./ContactFormSchema";
import { initialValues } from "./utils/form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import teleph from "../../assets/img/teleph.png";
import aqui from "../../assets/img/aqui.png";
import sobre from "../../assets/img/sobre.png";

export default function ContactForm() {
  const { errorMessage, authorization } = useAuthContext();
  const params = useParams();

  async function onSubmit(values, actions) {
    const newMessage = { ...values, id_clientes: authorization.id };

    fetch(`http://localhost:3000/user/contacto`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((response) => {
      console.log(values);
      if (response.status === 400) {
        alert("Error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: "",
          icon: "success",
          title: "Mensaje enviado",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (response.status === 409) {
        alert("Ya enviado");
      }
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  }

  const {
    values,
    errors,
    touched, //si he terminado de escribir, si estoy en el siguiente o pinchado fuera
    isSubmitting, //el boton va a estar desabilitado mientras esté haciendo submit
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues, //los valores iniciales los recibo desde el archivo form de utils
    validationSchema: ContactFormSchema,
    enableReinitialize: true,
    onSubmit,
  });

  console.log(values, "hola");
  return (
    <>
      <div className="container-contact">
        <div className="conctact-form">
          <h2>
            Formulario de <strong>contacto</strong>
          </h2>

          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              name="nya"
              type="text"
              placeholder="Nombre y Apellidos"
              value={values?.nya || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.nya && touched.nya ? "input-error" : ""}
            />
            {errors.nya && touched.nya && <p className="error">{errors.nya}</p>}
            
            <div className="mail-phone">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={values?.email || ""}
                onChange={handleChange}
                className={errors.email && touched.email ? "input-error" : ""} //señala el borde del input
              />
              {errors.email &&
                touched.email && ( // aquí sale el mensaje de error debajo
                  <p className="error">{errors.email}</p>
                )}

              <input
                name="telefono"
                type="number"
                pattern=""
                placeholder="Teléfono"
                value={values?.telefono || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.telefono && touched.telefono ? "input-error" : ""
                }
              />
              {errors.telefono && touched.telefono && (
                <p className="error">{errors.telefono}</p>
              )}
            </div>
            <textarea
              name="mensaje"
              cols="40"
              rows="10"
              aria-required="true"
              aria-invalid="false"
              type="textarea"
              placeholder="Escribe tu mensaje"
              value={values?.mensaje || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              textarea
              className={errors.mensaje && touched.mensaje ? "input-error" : ""}
            />
            {errors.mensaje && touched.mensaje && (
              <p className="error">{errors.mensaje}</p>
            )}
            <div className="privacity">
              <input
                name="politicadeprivacidad"
                type="checkbox"
                id="politica de privacidad"
                value={values?.privacity || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.privacity && touched.privacity ? "input-error" : ""
                }
              />
              <p>
                <label for="acepct" className="checkbox">
                  {" "}
                  <small>Acepta nuestra política de privacidad.</small>{" "}
                </label>
              </p>
            </div>
            <button className="button" type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </form>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>

        <section>
          <div className="container-logos-contact">
            <div className="grid-item1">
              <img src={aqui} alt="direccion" width={100} />
              <p>c/ Retamalejo, 69</p>
              <p>Azuaga (BA)</p>
            </div>

            <div className="grid-item2">
              <img src={teleph} alt="telephone" width={100} />
              <p>+34 658 547 124</p>
            </div>

            <div className="grid-item3">
              <img src={sobre} alt="email" width={100} />
              <p>retamartos@gmail.com</p>
            </div>
            </div>
            <div className="mapa-Azuaga">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12531.37785302639!2d-5.685609972126252!3d38.25991322363718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1374262289cd91%3A0x100f625102c8464f!2s06920%20Azuaga%2C%20Badajoz!5e0!3m2!1ses!2ses!4v1677949392773!5m2!1ses!2ses"
                width="450"
                height="337"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
         
        </section>
      </div>
    </>
  );
}
