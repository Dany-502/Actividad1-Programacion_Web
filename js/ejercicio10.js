function conversion() {
    var celsiusInput = document.getElementById("celsius").value;

    if (celsiusInput === "") {
        alert("Por favor, ingresa un valor en grados Celsius.");
        return;
    }

    var celsius = parseFloat(celsiusInput);
    var resultado = (celsius * 9 / 5) + 32;

    document.getElementById("resultado").value = resultado + " F";
}
