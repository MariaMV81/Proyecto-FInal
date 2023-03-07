import { useFormik } from "formik";
import { RegisterFormSchema } from "./RegisterFormSchema";
import { initialValues } from "./utils/form";
import Swal from "sweetalert2";

export default function RegisterForm({toggleLogin}) {
  async function onSubmit(values, actions) {
    const response = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (response.status == 401) {
      alert("Error al recibir el body");
    } else if (response.status == 200) {
      Swal.fire({
        position: "",
        icon: "success",
        title: "Cliente registrado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (response.status == 409) {
      alert("Usuario ya registrado");
    }
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
    toggleLogin()
  }

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: RegisterFormSchema,
    onSubmit,
  });

  return (
    <div className="container-form">
       <div className="toggle" >
        
        <span onClick={toggleLogin}>Inicia sesión </span> 
    
      </div>
      <div className="form">
        <h2>Regístrate</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            placeholder="Nombre de la empresa"
            name="nombre_empresa"
            value={values.nombre_empresa}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.nombre_empresa && touched.nombre_empresa
                ? "input-error"
                : ""
            }
          />
          <input
            type="text"
            required
            placeholder="C.I.F"
            name="CIF"
            value={values.CIF}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.CIF && touched.CIF ? "input-error" : ""}
          />
          <input
            type="text"
            required
            placeholder="Direción"
            name="direccion"
            value={values.direccion}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.direccion && touched.direccion ? "input-error" : ""
            }
          />
          <input
            type="text"
            required
            placeholder="C.P"
            name="CP"
            value={values.CP}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.CP && touched.CP ? "input-error" : ""}
          />
          <input
            type="text"
            required
            placeholder="Localidad"
            name="localidad"
            value={values.localidad}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.localidad && touched.localidad ? "input-error" : ""
            }
          />
          <input
            type="text"
            required
            placeholder="Nombre de contacto"
            name="nombreContacto"
            value={values.nombreContacto}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.nombreContacto && touched.nombreContacto
                ? "input-error"
                : ""
            }
          />
          <input
            type="text"
            required
            placeholder="Apellidos de contacto"
            name="apellidosContacto"
            value={values.apellidosContacto}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.apellidosContacto && touched.apellidosContacto
                ? "input-error"
                : ""
            }
          />
          <input
            type="text"
            required
            placeholder="Télefono"
            name="telefono"
            value={values.telefono}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.telefono && touched.telefono ? "input-error" : ""}
          />
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? "input-error" : ""}
          />
          <input
            type="password"
            required
            placeholder="Contraseña"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}
          />

          <button className="button" type="submit" disabled={isSubmitting}>
            Crear cuenta ahora
          </button>
        </form>
      </div>
    </div>
  );
}
