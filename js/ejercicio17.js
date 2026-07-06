/*

agregarTarea(): Esta función agregará una nueva tarea al almacenamiento local.
obtenerTareas(): Recuperará las tareas almacenadas en el Local Storage.
eliminarTarea(): Permitirá eliminar tareas específicas del almacenamiento local.
renderizarTareas(): Mostrará las tareas en la página web.
funciones closures: Para agregar y eliminar tareas manteniendo un "estado" encapsulado.
*/

/*Se creo una funcion para crear el closure */
function crearAdministradorDeTareas() {
    let lista_tareas = [];

    function obtenerTareas() {
        let tareasGuardadas = localStorage.getItem("tarea");
        if (tareasGuardadas !== null) {
            lista_tareas = JSON.parse(tareasGuardadas);
        } else {
            lista_tareas = [];
        }
        return lista_tareas;
    }

    function agregarTarea() {
        let inputTarea = document.getElementById("tarea");
        if (!inputTarea) return;

        let tareaTexto = inputTarea.value;

        if (tareaTexto.trim() === "") {
            alert("Por favor, ingrese una tarea válida.");
            return;
        }

        let datos_tareas = {
            tarea: tareaTexto,
            estado: "pendiente",
        };

        lista_tareas.push(datos_tareas);
        localStorage.setItem("tarea", JSON.stringify(lista_tareas));
        alert(`Tarea "${datos_tareas.tarea}" agregada con éxito.`);
        inputTarea.value = "";
        renderizarTareas();
    }

    function eliminarTarea(indice) {
        if (indice >= 0 && indice < lista_tareas.length) {
            lista_tareas.splice(indice, 1);

            localStorage.setItem("tarea", JSON.stringify(lista_tareas));
            alert("Tarea eliminada con éxito.");

            renderizarTareas();
        }
    }

    function renderizarTareas() {
        let lista = document.getElementById("lista_tareas");
        if (!lista) return;

        lista.innerHTML = "";

        lista_tareas.forEach(function (tarea, indice) {
            let li = document.createElement("li");
            li.textContent = tarea.tarea + " ";

            let btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";

            btnEliminar.onclick = function () {
                eliminarTarea(indice);
            };

            li.appendChild(btnEliminar);
            lista.appendChild(li);
        });
    }

    obtenerTareas();

    return {
        agregar: agregarTarea,
        obtener: obtenerTareas,
        eliminar: eliminarTarea,
        renderizar: renderizarTareas
    };
}

const misTareas = crearAdministradorDeTareas();

function agregarTarea() {
    misTareas.agregar();
}

function obtenerTareas() {
    misTareas.obtener();
}

function eliminarTarea(indice) {
    misTareas.eliminar(indice);
}

function renderizarTareas() {
    misTareas.renderizar();
}

document.addEventListener("DOMContentLoaded", function () {
    renderizarTareas();
});
