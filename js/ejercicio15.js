let listaEstudiantes = [];

function agregarAlumno() {
    var nombre = document.getElementById("nombre_estudiante");
    var calificacion = document.getElementById("calificacion");

    let estudiante = {
        nombre: nombre.value,
        calificacion: parseFloat(calificacion.value)
    };
    listaEstudiantes.push(estudiante);
}

function calcular() {
    listaEstudiantes.forEach(function (estudiante) {
        let promedio = listaEstudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0) / estudiante.length;
        let calificacionMaxima = Math.max(...listaEstudiantes.map(e => e.calificacion));
        let calificacionMinima = Math.min(...listaEstudiantes.map(e => e.calificacion));
    });

    document.getElementById("promedio").value = promedio;
    document.getElementById("calificacionAlta").value = calificacionMaxima;
    document.getElementById("calificacionBaja").value = calificacionMinima;
}

