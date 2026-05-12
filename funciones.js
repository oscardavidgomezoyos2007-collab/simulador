function calcularDisponible(ingresos,egresos) {
    let disponible = ingresos-egresos;
    if (disponible < 0) {
        disponible = 0;
    }
     return disponible;
    
}

function calcularCapacidadDePago(montoDisponible) {
    let calcularCapacidadDePago=montoDisponible/2;

    return calcularCapacidadDePago;
}



function mostrarEnSpain(idSpain,valor) {
    let componente = document.getElementById(idSpain);
    componente.textContent = valor;
}

function text (id,vari) {
    let text1 = document.getElementById(id);
    texto1.innerText=vari;
    ("spnDisponible",disponible.toFixed(2))
}
