const nuevaTarea = document.querySelector('#nuevaTarea')
const agregarTarea = document.querySelector('#agregarTarea')
const listaTareas = document.querySelector('#listado')
const totalTareas = document.querySelector('#total')
const completadas = document.querySelector('#realizadas')
let totalTasks = 3
let readyTask = 0

const tareas = [
    {id: 1, nombre: "Hacer desafío", completado: false},
    {id: 2, nombre: "Estudiar JS", completado: false},
    {id: 3, nombre: "Cortar pasto", completado: false}
];

agregarTarea.addEventListener('click', addTask)

function addTask(){
    if(nuevaTarea.value === ''){
        return
    }else{
        tareas.unshift({id: Date.now(), nombre: nuevaTarea.value, completado: false})
        totalTasks++
        totalTareas.innerHTML = totalTasks
        renderTask()
        nuevaTarea.value = ''
    }
    
}

function deleteTask(id){
    let index = tareas.findIndex((elem) => elem.id == id)
    tareas.splice(index, 1)
    totalTasks--
    totalTareas.innerHTML = totalTasks

    renderTask()
}

function checkTasks(id){
    let index = tareas.findIndex((elem) => elem.id == id)
    console.log(tareas)
    if(tareas[index].completado !== true){
        tareas[index].completado = true
        readyTask++
        completadas.innerHTML = readyTask
    }else{
        tareas[index].completado = false
        readyTask--
        completadas.innerHTML = readyTask
    }
}

function renderTask(){
    let html = ''
    for (const tarea of tareas) {
        html += `<li class="itemTarea">${tarea.nombre} <input type="checkbox" onclick="checkTasks(${tarea.id})"><button onclick="deleteTask(${tarea.id})">X</button></li>`
    }
    listaTareas.innerHTML = html
}

renderTask()