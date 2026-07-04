function conversion() {
    var km = document.getElementById("kilometros").value;
    if (km === "" || km <= 0) {
        alert("Ingrese un valor valido porfavor (Campos vacios o numeros negativos)");
        return;
    }

    var millas = parseFloat(km);
    var resultado = (millas * 0.621371);

    document.getElementById("resultado").value = resultado + " Millas";


}