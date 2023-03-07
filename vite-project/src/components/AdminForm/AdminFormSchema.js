import * as yup from "yup";

export const AdminFormSchema = yup.object().shape({
  n_albaran: yup.string().required("Campo requerido"),
  remitente: yup.string().required("Campo requerido"),
  destino: yup.string().required("Campo requerido"),
  CP: yup.string().required("Campo requerido"),
  consignatario: yup.string().required("Campo requerido"),
  domicilio: yup.string().required("Campo requerido"),
  n_bultos: yup.number().required("Campo requerido"),
  kilos: yup.string().required("Campo requerido"),
  dia_entrega: yup.number(),
  mes_entrega: yup.number(),
  anio_entrega: yup.number(),
  portes: yup.string(),
  precio: yup.number().required("Campo requerido"),
  dia_ejecucion: yup.number(),
  mes_ejecucion: yup.number(),
  anio_ejecucion: yup.number(),
});
