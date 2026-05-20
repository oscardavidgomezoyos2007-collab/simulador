// JAVASCRIPT DEL SIMULADOR

function calcular() {

    // DATOS FINANCIEROS

    let ingresos =
        parseFloat(document.getElementById("txtIngresos").value);

    let egresos =
        parseFloat(document.getElementById("txtEgresos").value);

    let disponible =
        calcularDisponible(ingresos, egresos);

    document.getElementById("spnDisponible").innerHTML =
        disponible.toFixed(2);

    // CAPACIDAD DE PAGO

    let capacidadPago =
        calcularCapacidadPago(disponible);

    document.getElementById("spnCapacidadPago").innerHTML =
        capacidadPago.toFixed(2);

    // DATOS DEL CRÉDITO

    let monto =
        parseFloat(document.getElementById("txtMonto").value);

    let plazo =
        parseInt(document.getElementById("txtPlazo").value);

    let tasa =
        parseFloat(document.getElementById("txtTasaInteres").value);

    // INTERÉS

    let interes =
        calcularInteresSimple(monto, tasa, plazo);

    document.getElementById("spnInteresPagar").innerHTML =
        interes.toFixed(2);

    // TOTAL A PAGAR

    let total =
        calcularTotalPagar(monto, interes);

    document.getElementById("spnTotalPrestamo").innerHTML =
        total.toFixed(2);

    // CUOTA MENSUAL

    let cuotaMensual =
        calcularCuotaMensual(total, plazo);

    document.getElementById("spnCuotaMensual").innerHTML =
        cuotaMensual.toFixed(2);

    // APROBACIÓN DEL CRÉDITO

    let aprobado =
        aprobarCredito(capacidadPago, cuotaMensual);

    if (aprobado == true) {

        document.getElementById("spnEstadoCredito").innerHTML =
            "✅ CREDITO APROBADO";

    } else {

        document.getElementById("spnEstadoCredito").innerHTML =
            "❌ CREDITO RECHAZADO";
    }
}


// BOTON CALCULAR

document
    .getElementById("btnCalcularCredito")
    .addEventListener("click", calcular);


// BOTON REINICIAR

document
    .getElementById("btnReiniciar")
    .addEventListener("click", reiniciar);


// FUNCION REINICIAR

function reiniciar() {

    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";

    document.getElementById("spnDisponible").innerHTML = "0";
    document.getElementById("spnCapacidadPago").innerHTML = "0";
    document.getElementById("spnInteresPagar").innerHTML = "0";
    document.getElementById("spnTotalPrestamo").innerHTML = "0";
    document.getElementById("spnCuotaMensual").innerHTML = "0";

    document.getElementById("spnEstadoCredito").innerHTML =
        "ANALIZANDO...";
}