let lista_estudiantes = [];

function agregar_alumno() {
    var nombre = document.getElementById("nombre_estudiante");
    var calificacion = document.getElementById("calificacion");

    // Validación básica para evitar guardar campos vacíos
    if (nombre.value.trim() === "" || calificacion.value === "") {
        alert("Por favor, ingrese un nombre y una calificación válida.");
        return;
    }

    let datos_estudiantes = {
        nombre: nombre.value,
        calificacion: parseFloat(calificacion.value)
    };
    lista_estudiantes.push(datos_estudiantes);

    // 1. Damos un aviso para que se note que fue agregado
    alert(`Estudiante "${datos_estudiantes.nombre}" agregado con éxito.\nTotal en lista: ${lista_estudiantes.length}`);

    // 2. Limpiamos los inputs para indicar visualmente que el dato ya se procesó
    nombre.value = "";
    calificacion.value = "";
}

function calcular() {
    // Si la lista está vacía, no calculamos nada
    if (lista_estudiantes.length === 0) {
        alert("No hay estudiantes en la lista para calcular.");
        return;
    }

    let suma = 0;
    let calificacion_maxima = lista_estudiantes[0].calificacion;
    let calificacion_minima = lista_estudiantes[0].calificacion;

    // Recorremos la lista usando forEach para realizar los cálculos
    lista_estudiantes.forEach(function (estudiante) {
        suma += estudiante.calificacion;

        if (estudiante.calificacion > calificacion_maxima) {
            calificacion_maxima = estudiante.calificacion;
        }

        if (estudiante.calificacion < calificacion_minima) {
            calificacion_minima = estudiante.calificacion;
        }
    });

    let promedio = suma / lista_estudiantes.length;

    // Mostramos los resultados en la página
    document.getElementById("promedio").value = promedio.toFixed(2);
    document.getElementById("calificacionAlta").value = calificacion_maxima;
    document.getElementById("calificacionBaja").value = calificacion_minima;
}

