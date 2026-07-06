function calcularOperacion(operacion) {
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);

    switch (operacion) {
        case "suma":
            const sumar = (numero1, numero2) => numero1 + numero2;
            document.getElementById("resultado").value = sumar(numero1, numero2);
            break;
        case "resta":
            const restar = (numero1, numero2) => numero1 - numero2;
            document.getElementById("resultado").value = restar(numero1, numero2);
            break;
        case "multiplicacion":
            const multiplicar = (numero1, numero2) => numero1 * numero2;
            document.getElementById("resultado").value = multiplicar(numero1, numero2);
            break;
        case "division":
            const dividir = (numero1, numero2) => numero2 !== 0 ? numero1 / numero2 : "Error: El divisor no puede ser cero";
            document.getElementById("resultado").value = dividir(numero1, numero2);
            break;
    }



}