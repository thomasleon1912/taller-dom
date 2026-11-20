const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const contador = document.getElementById("contador");

let pendientes = 0;
let completadas = 0;

function actualizarContador() {
    contador.textContent =
    `Tareas pendientes: ${pendientes} | Completadas: ${completadas}`;
}

addBtn.addEventListener("click", () => {

    const texto = taskInput.value.trim();

    if(texto === ""){
        alert("Ingrese una tarea");
        return;
    }

    const tarea = document.createElement("div");
    tarea.classList.add("task");

    const contenido = document.createElement("div");
    contenido.classList.add("task-content");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const textoTarea = document.createElement("span");
    textoTarea.textContent = texto;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "🗑";
    btnEliminar.classList.add("delete");

    contenido.appendChild(checkbox);
    contenido.appendChild(textoTarea);

    tarea.appendChild(contenido);
    tarea.appendChild(btnEliminar);

    taskList.appendChild(tarea);

    pendientes++;
    actualizarContador();

    taskInput.value = "";

    checkbox.addEventListener("change", () => {

        if(checkbox.checked){
            textoTarea.classList.add("completed");
            pendientes--;
            completadas++;
        }else{
            textoTarea.classList.remove("completed");
            pendientes++;
            completadas--;
        }

        actualizarContador();

    });

    btnEliminar.addEventListener("click", () => {

        if(checkbox.checked){
            completadas--;
        }else{
            pendientes--;
        }

        tarea.remove();
        actualizarContador();
    });

});