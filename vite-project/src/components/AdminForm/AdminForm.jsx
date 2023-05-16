import "./AdminForm.css";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { useFormik } from "formik";
import { AdminFormSchema } from "./AdminFormSchema";
import { initialValues } from "./utils/form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminForm({ todos }) {

  const { errorMessage, authorization } = useAuthContext();
  const params = useParams();

  const navigate = useNavigate();

  

  async function onSubmit(values, actions) {
    const newAlbaran = { ...values, id_clientes: authorization.id };

    fetch(`http://localhost:3000/user/albaranes/${params.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values, authorization),
    }).then((response) => {
      console.log(values);
      if (response.status === 400) {
        alert("Error al recibir el body");
      } else if (response.status === 200) {
        Swal.fire({
          position: "",
          icon: "success",
          title: "<p>Albarán enviado</p>",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/orderList")
      } else if (response.status === 409) {
        alert("Albaran  ya enviado");
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
    initialValues: todos, //los valores iniciales los recibo desde el archivo form de utils
    validationSchema: AdminFormSchema,
    enableReinitialize: true,
    onSubmit,
  });

  console.log(values, "hola");



  return (
    <>
      <div class="wrap admin">
        <div class="wrap texto-admin ">
          <h1><strong>ALBARAN</strong></h1>
        </div>
      </div>
      {todos ? (
        <div className="container-form">
          <div className="form">
            <h2><strong>Albarán</strong></h2>

            <form id="formulario" onSubmit={handleSubmit}>
              <div>
                <input
                  name="n_albaran"
                  type="text"
                  min="0"
                  placeholder="Nº Albaran"
                  value={values?.n_albaran || ""}
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
                  value={values?.remitente || ""}
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
                  value={values?.destino || ""}
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
                  value={values?.CP || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.CP && touched.CP ? "input-error" : ""}
                />
                {errors.CP && touched.CP && (
                  <p className="error">{errors.CP}</p>
                )}
                </div>

                <input
                  name="consignatario"
                  type="text"
                  placeholder="Consignatario"
                  value={values?.consignatario || ""}
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
                  value={values?.domicilio || ""}
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
                  min="0"
                  type="number"
                  placeholder="Nº de paquetes"
                  value={values?.n_bultos || ""}
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
                  value={values?.kilos || ""}
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
                    type="text"
                    placeholder="día"
                    min="1"
                    max="31"
                    value={values?.dia_entrega || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.dia_entrega && touched.dia_entrega
                        ? "input-error"
                        : ""
                    }
                  />
                  {errors.dia_entrega && touched.dia_entrega && (
                    <p className="error">{errors.dia_entrega}</p>
                  )}

                  <input
                    name="mes_entrega"
                    type="text"
                    min="1"
                    max="12"
                    placeholder="mes"
                    value={values?.mes_entrega || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.mes_entrega && touched.mes_entrega
                        ? "input-error"
                        : ""
                    }
                  />
                  {errors.mes_entrega && touched.mes_entrega && (
                    <p className="error">{errors.mes_entrega}</p>
                  )}

                  <input
                    name="anio_entrega"
                    type="text"
                    min="2023"
                    placeholder="Año"
                    value={values?.anio_entrega || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.anio_entrega && touched.anio_entrega
                        ? "input-error"
                        : ""
                    }
                  />
                  {errors.anio_entrega && touched.anio_entrega && (
                    <p className="error">{errors.anio_entrega}</p>
                  )}
                </div>
                <div className="portes">
                  <select
                    placeholder="Portes"
                    name="portes"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.portes}
                  >
                    <option>Portes</option>
                    <option value="D">Debido</option>
                    <option value="P">Pagado</option>
                  </select>
                </div>

                <input
                  name="precio"
                  type="text"
                  placeholder="€uros"
                  value={values?.precio || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.precio && touched.precio ? "input-error" : ""
                  }
                />
                {errors.precio && touched.precio && (
                  <p className="error">{errors.precio}</p>
                )}

                <div className="fecha-ejecucion">
                  <input
                    name="dia_ejecucion"
                    type="text"
                    min="1"
                    max="31"
                    placeholder="dia"
                    value={values?.dia_ejecucion || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.dia_ejecucion && touched.dia_ejecucion
                        ? "input-error"
                        : ""
                    }
                  />
                  {errors.dia_ejecucion && touched.dia_ejecucion && (
                    <p className="error">{errors.dia_ejecucion}</p>
                  )}

                  <input
                    name="mes_ejecucion"
                    type="text"
                    placeholder="mes"
                    min="1"
                    max="12"
                    value={values?.mes_ejecucion || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.mes_ejecucion && touched.mes_ejecucion
                        ? "input-error"
                        : ""
                    }
                  />
                  {errors.mes_ejecucion && touched.mes_ejecucion && (
                    <p className="error">{errors.mes_ejecucion}</p>
                  )}

                  <input
                    name="anio_ejecucion"
                    type="text"
                    placeholder="anio"
                    value={values?.anio_ejecucion || ""}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.anio_ejecucion && touched.anio_ejecucion
                        ? "input-error"
                        : ""
                    }
                  />
                  {errors.anio_ejecucion && touched.anio_ejecucion && (
                    <p className="error">{errors.anio_ejecucion}</p>
                  )}
                </div>
                <button
                  className="button"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Confirmar
                </button>
              </div>
            </form>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
        </div>
      ) : (
        <div class="loadingspinner">
          <div id="square1"></div>
          <div id="square2"></div>
          <div id="square3"></div>
          <div id="square4"></div>
          <div id="square5"></div>
        </div>
      )}
    </>
  );
}
