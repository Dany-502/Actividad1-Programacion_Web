function conversion() {
    var Celsius = document.getElementById("celsius").value;

    if (Celsius === "" || Celsius != 0) {
        alert("Por favor, ingresa un valor en grados Celsius.");
        return;
    }

    var celsius = parseFloat(celsiusInput);
    var resultado = (celsius * 9 / 5) + 32;

    document.getElementById("resultado").value = resultado + " F";
}
