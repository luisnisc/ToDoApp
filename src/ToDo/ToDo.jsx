import React, { useState } from "react";
import './ToDo.css';

export default function Component() {
  const [task, setTask] = useState(""); // Estado para el input del formulario
  const [tasks, setTasks] = useState([]); // Estado para la lista de tareas

  const handleSubmit = (e) => {
    e.preventDefault();
    if(task !== "") {
      setTasks([...tasks, task]); // Agrega la nueva tarea a la lista de tareas
      setTask(""); // Limpia el input del formulario
    }
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks); // Elimina la tarea de la lista de tareas
  };

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      <h1>ToDo</h1>
      <ul class="list-group" id="lista">
        {tasks.map((task, index) => (
          <li class="list-group-item" key={index}>
            {task}
            <button class="btn btn-danger" onClick={() => handleDelete(index)}>Borrar</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit" class="btn btn-outline-dark">Agregar</button>
      </form>
    </>
  );
}