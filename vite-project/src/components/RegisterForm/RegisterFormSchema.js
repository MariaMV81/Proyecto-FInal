import * as yup from "yup";

export const RegisterFormSchema = yup.object().shape({
  nombre_empresa: yup.string("Please enter your Name").required("Required"),
  CIF: yup.string("Please enter your C.I.F").required("Required"),
  direccion: yup.string().required("Required"),
  CP: yup.string().required("Required"),
  localidad: yup.string().required("Required"),
  nombreContacto: yup.string().required("Required"),
  apellidosContacto: yup.string().required("Required"),
  telefono: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup.string().min(5).required("Required"),
});
