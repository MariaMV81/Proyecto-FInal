import "./ClientForm.css";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { useFormik } from "formik";
import { CLientFormSchema } from "./ClientFormSchema";
import { initialValues } from "./utils/form";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ClientForm({ setState, state, onSubmit }) {
  const { errorMessage, authorization } = useAuthContext();
  const params = useParams();

  async function onSubmit(values, actions) {
    const newAlbaran = { ...values, id_clientes: authorization.id };

    fetch(`http://localhost:3000/user/albaranes`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newAlbaran),
    }).then((response) => {
      console.log(values);
      if (response.status === 400) {
        alert("Error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: "",
          icon: "success",
          title: "Formulario Enviado",
          showConfirmButton: false,
          footer: "<span>GRACIAS POR SU PEDIDO</span>",
          width: "90%",
          padding: "2rem",
          //grow: 'fullscreen' o 'row' o 'colum'
          timer: 3000,
        });
      } else if (response.status === 409) {
        alert("ya enviado");
      }
    });
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
    validationSchema: CLientFormSchema,
    onSubmit,
  });

  return (
    <>
      <div class="wrap client">
        <div class="wrap-texto">
          <h1>PEDIDOS</h1>
        </div>
      </div>

      <div className="container-form">
        <div className="form">
          <h2>
            Formulario de <strong>pedido</strong>{" "}
          </h2>

          <form id="formulario" onSubmit={handleSubmit}>
            <input
              name="n_albaran"
              type="text"
              placeholder="Nº Albaran "
              value={values.n_albaran}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.n_albaran && touched.n_albaran ? "input-error" : ""
              }
            />
            {errors.n_albaran && touched.n_albaran && (
              <p className="error">{errors.n_albaran}</p>
            )}

            <input
              name="remitente"
              type="text"
              placeholder="Remitente"
              value={values.remitente}
              onChange={handleChange}
              className={
                errors.remitente && touched.remitente ? "input-error" : ""
              } //señala el borde del input
            />
            {errors.remitente &&
              touched.remitente && ( // aquí sale el mensaje de error debajo
                <p className="error">{errors.remitente}</p>
              )}
            <div className="destino-cp">
              <input
                name="destino"
                type="text"
                placeholder="Destino"
                value={values.destino}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.destino && touched.destino ? "input-error" : ""
                }
              />
              {errors.destino && touched.destino && (
                <p className="error">{errors.destino}</p>
              )}

              <input
                name="CP"
                type="text"
                placeholder="C.P."
                value={values.CP}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.CP && touched.CP ? "input-error" : ""}
              />
              {errors.CP && touched.CP && <p className="error">{errors.CP}</p>}
            </div>
            <input
              name="consignatario"
              type="text"
              placeholder="Consignatario"
              value={values.consignatario}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.consignatario && touched.consignatario
                  ? "input-error"
                  : ""
              }
            />
            {errors.consignatario && touched.consignatario && (
              <p className="error">{errors.consignatario}</p>
            )}

            <input
              name="domicilio"
              type="text"
              placeholder="Domicilio"
              value={values.domicilio}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.domicilio && touched.domicilio ? "input-error" : ""
              }
            />
            {errors.domicilio && touched.domicilio && (
              <p className="error">{errors.domicilio}</p>
            )}
            <div className="bultos-k">
              <input
                name="n_bultos"
                type="number"
                min="0"
                placeholder="Nº de bultos"
                value={values.n_bultos}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.n_bultos && touched.n_bultos ? "input-error" : ""
                }
              />
              {errors.n_bultos && touched.n_bultos && (
                <p className="error">{errors.n_bultos}</p>
              )}

              <input
                name="kilos"
                type="text"
                placeholder="Kilos"
                value={values.kilos}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.kilos && touched.kilos ? "input-error" : ""}
              />
              {errors.kilos && touched.kilos && (
                <p className="error">{errors.kilos}</p>
              )}
            </div>

            <div className="fecha-entrega">
              <input
                name="dia_entrega"
                type="number"
                min="1"
                max="31"
                placeholder="día"
                value={values.dia_entrega}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.dia_entrega && touched.dia_entrega ? "input-error" : ""
                }
              />
              {errors.dia_entrega && touched.dia_entrega && (
                <p className="error">{errors.dia_entrega}</p>
              )}

              <input
                name="mes_entrega"
                type="number"
                min="1"
                max="12"
                placeholder="mes"
                value={values.mes_entrega}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.mes_entrega && touched.mes_entrega ? "input-error" : ""
                }
              />
              {errors.mes_entrega && touched.mes_entrega && (
                <p className="error">{errors.mes_entrega}</p>
              )}

              <input
                name="anio_entrega"
                type="number"
                min="2023"
                placeholder="Año"
                value={values.anio_entrega}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.anio_entrega && touched.anio_entrega
                    ? "input-error"
                    : ""
                }
              />
            </div>
            <div className="portes">
              <select
                placeholder="Portes"
                name="portes"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.portes}
              >
                <option>Portes</option>
                <option value="D">Debido</option>
                <option value="P">Pagado</option>
              </select>
            </div>

            <button className="button" type="submit" disabled={isSubmitting}>
              Enviar
            </button>

            
          </form>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      </div>
    </>
  );
}
