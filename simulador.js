
//AQUI EL JAVARCRIPT PARA MANIPULAR EL HTML
    function calcular() {
    
    let ingresos = parseFloat (document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);

     let disponible=calcularDisponible(ingresos,egresos);

      Texto("spnDisponible,disponible.parseFloat")
      mostrarEnSpain("spnDisponible",disponible.toFixed(2))

     let calcularCapacidadDePago = calcularCapacidadDePago(disponible)
    
     text("spnCapacidadDePago", calcularCapacidadDePago)
}

