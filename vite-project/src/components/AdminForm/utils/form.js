export const initialValues = (userAdmin)=>({
    n_albaran: userAdmin.nº_albaran,
    remitente: userAdmin.remitente,
    destino: userAdmin.destino,
    CP: userAdmin.CP,
    consignatario: userAdmin.consignatario,
    domicilio: userAdmin.domicilio,
    n_bultos: userAdmin.nº_bultos,
    kilos: userAdmin.kilos,
    dia_entrega: userAdmin.dia_entrega,
    mes_entrega: userAdmin.mes_entrega,
    anio_entrega: userAdmin.anio_entrega,
    portes:userAdmin.portes,
    precio:"",
    dia_ejecucion:"",
    mes_ejecucion:"",
    anio_ejecucion:""
});
   
