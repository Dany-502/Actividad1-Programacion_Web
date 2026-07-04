function convertir() {
    var mxn = document.getElementById("pesos").value;
    if (mxn == "" || mxn <= 0) {
        alert("Ingrese un valor valido porfavor (Campos vacios o numeros negativos)");
        return;
    }

    var resultado = (parseFloat(mxn) * 0.055);
    document.getElementById("resultado").value = resultado + " USD";

}