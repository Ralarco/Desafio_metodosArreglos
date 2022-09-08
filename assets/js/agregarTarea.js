const nuevaTarea = document.querySelector("#nuevaTarea");
const agregarTarea = document.querySelector("#agregarTarea");
const listaTareas = document.querySelector("#listado");
const totalTareas = document.querySelector("#total");
const completadas = document.querySelector("#realizadas");
let idTareas = 4;
let totalTasks = 3;
let readyTask = 0;

const tareas = [
  { id: 1, nombre: "Hacer desafío", completado: false },
  { id: 2, nombre: "Estudiar JS", completado: false },
  { id: 3, nombre: "Cortar pasto", completado: false },
];

agregarTarea.addEventListener("click", addTask);

/* Se agrega la tarea */

function addTask() {
  if (nuevaTarea.value === "") {
    return;
  } else {
    tareas.unshift({
      id: idTareas++,
      nombre: nuevaTarea.value,
      completado: false,
    });
    totalTasks++;
    totalTareas.innerHTML = totalTasks;
    renderTask();
    nuevaTarea.value = "";
  }
}

/* Elimina la tarea */

function deleteTask(id) {
  let index = tareas.findIndex((elem) => elem.id == id);
  tareas.splice(index, 1);
  totalTasks--;
  totalTareas.innerHTML = totalTasks;
  renderTask();
}


/* Chequeo tarea realizada */
function checkTasks(id) {
  let index = tareas.findIndex((elem) => elem.id == id);
  tareas[index].completado = true;
  console.log(tareas);
  readyTask++
  completadas.innerHTML = readyTask
  renderTask();
}


/* Render */
function renderTask() {
  let html = "";
  for (const tarea of tareas) {
    if (tarea.completado == true) {
      html += `
            <tr>
                <td style="color:#CCC">${tarea.nombre}</td>
                <td style="text-align:center"></td>
                <td style="text-align:center"><button onclick="deleteTask(${tarea.id})">X</button></td>
            </tr>
            `;
    } else if (tarea.completado == false) {
      html += `
            <tr>
                <td>${tarea.nombre}</td>
                <td style="text-align:center"><input type="checkbox" id="cb${tarea.id}" onchange="checkTasks(${tarea.id})"></td>
                <td style="text-align:center"><button onclick="deleteTask(${tarea.id})">X</button></td>
             </tr>`;
    }
  }
  listaTareas.innerHTML = html;
}


/* Render inicial */
renderTask();
