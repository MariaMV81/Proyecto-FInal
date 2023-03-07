import * as yup from "yup"; 

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const LoginFormSchema = yup.object().shape({ 
  email: yup
  .string()
  .email("Por favor escriba un email válido")
  .required("Campo requerido"),
  password: yup
  .string()
  .min(5) 
  .matches(passwordRules, { message: "La contraseña debe contener 5 caracteres:  al menos una letra mayúscula, otra minúscula y un número" })
  .required("Campo requerido"),
});