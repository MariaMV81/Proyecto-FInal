import * as yup from "yup";

export const CLientFormSchema = yup.object().shape({
  n_albaran: yup.string().required("Campo requerido"),
  remitente: yup.string().required("Campo requerido"),
  destino: yup.string().required("Campo requerido"),
  CP: yup.string().required("Campo requerido"),
  consignatario: yup.string().required("Campo requerido"),
  domicilio: yup.string().required("Campo requerido"),
  n_bultos: yup.number().required("Campo requerido"),
  kilos: yup.string().required("Campo requerido"),
  dia_entrega: yup.number().required("Campo requerido"),
  mes_entrega: yup.number().required("Campo requerido"),
  anio_entrega: yup.number().required("Campo requerido"),
  portes:yup.string().required("Campo requerido"),
});
