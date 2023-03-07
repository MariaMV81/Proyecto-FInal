import "./LoginForm.css";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { useFormik } from "formik";
import { LoginFormSchema } from "./LoginFormSchema";
import { initialValues } from "./utils/form";

export default function LoginForm({toggleLogin}) {
  const { errorMessage, login } = useAuthContext();
  
  

  

  async function onSubmit(values, actions) {
    login(values);
    actions.resetForm(); //al hacer click en submit resetea el formulario
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
    validationSchema: LoginFormSchema,
    onSubmit,
  });

  /* $('.toggle').click(function(){
    $('.form').animate({
      height: "toggle",
      'padding-top': 'toggle',
      'padding-bottom': 'toggle',
      apacity: 'toggle'
    }, "slow");
  });*/

  return (
    <>
      <div className="container-form">
        
        <div className="toggle" >
        
          <span onClick={toggleLogin}>Crea tu cuenta </span> 
      
        </div>

        <div className="form">
          <h2>Bienvenido de nuevo</h2>
          <h6>Inicia sesión con tu cuenta</h6>

          <form id="formulario" onSubmit={handleSubmit} autoComplete="off">
            <input
              name="email"
              type="email"
              placeholder="email@email.com"
              value={values.email}
              onChange={handleChange}
              className={errors.email && touched.email ? "input-error" : ""} //señala el borde del input
            />
            {errors.email &&
              touched.email && ( // aquí sale el mensaje de error debajo
                <p className="error">{errors.email}</p>
              )}

            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.password && touched.password ? "input-error" : ""
              }
            />
            {errors.password && touched.password && (
              <p className="error">{errors.password}</p>
            )}

            <button className="button" type="submit" disabled={isSubmitting}>
              Iniciar sesión
            </button>
          </form>
          <div className="reset-password">
            <a href="#">¿Olvidé mi contraseña?</a>
          </div>
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
    </>
  );
}
