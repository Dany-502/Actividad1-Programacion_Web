function calcular() {
    var numeros = document.getElementById("numeros").value;
    if (numeros == "" || typeof (numeros) != "number") {
        /*Agregue una condicion adicional que permita evaluar que los numeros ingresados sean solo numeros*/
        alert("Ingrese numeros");
        return;
    } else {
        let cadena = numeros.split(",").map(Number);
        let maximo = Math.max(...cadena);
        let minimo = Math.min(...cadena);
        let suma = cadena.reduce((acc, valor) => acc + valor);
        let promedio = suma / cadena.length;
    }

    document.getElementById("numero_mayor").value = maximo;
    document.getElementById("numero_menor").value = minimo;
    document.getElementById("promedio").value = promedio;
}
