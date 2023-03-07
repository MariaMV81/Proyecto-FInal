import * as yup from "yup";

export const ContactFormSchema = yup.object().shape({
  nya: yup.string().required("Campo requerido"),
  email: yup
    .string()
    .email("Por favor escriba un email válido")
    .required("Campo requerido"),
  telefono: yup.number().required("Campo requerido"),
  mensaje: yup.string().required("Campo requerido"),
});
