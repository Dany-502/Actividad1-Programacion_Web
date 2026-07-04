function verificar() {
    var edad = document.getElementById("edad").value;
    if (edad <= 0 || edad === "") {
        alert("Edad invalida");
        return;
    }
    if (edad < 18) {
        document.getElementById("resultado").value = "No puedes votar";
    }
    else {
        document.getElementById("resultado").value = "Puedes votar";
    }

}