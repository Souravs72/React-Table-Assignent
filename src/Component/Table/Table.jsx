import React, { useState } from 'react'

function Table() {

  const [tableTasks, setTableTasks] = useState([{ task: "Ecommerce Application",
        completed: false }, { task: "Blockchain Development", completed: false },
        { task: "Java Development", completed: false },
        { task: "Frappe Development", completed: false },
        { task: "Machine Learning", completed: false },
        { task: "Neural Networks", completed: false },
        { task: "REST APIs", completed: false }

  ])

  function addTask(event) {
    event.preventDefault();

    let task = event.target.task.value;
    if (!task) {
      alert("Please enter a valid task!");
      return;
    }
    setTableTasks([...tableTasks, { task: task, completed: false }]);
    event.target.reset();
  }

  function changeTaskStatus(index) {
    let newTableTasks = [...tableTasks];
    newTableTasks[index].completed = !newTableTasks[index].completed;
    setTableTasks(newTableTasks);

    //deletes the current selected task
    newTableTasks.splice(index, 1);
    setTableTasks(newTableTasks);
  }

  return (
    <div className='container my-3'>
      <h2 className="text-center border-bottom mb-5">Tasks</h2>
      <div className="mx-auto rounded border p-4" >

        <form className="d-flex mb-5" onSubmit={addTask}>
          <input className="form-control me-2" placeholder="Add New Task" name='task' />
          <button className="btn btn-outline-light" type="submit">Add</button>
        </form>

        {
          tableTasks.map((tableTask, index) => {
            return (
              <div key={index} className='rounded mt-4 p-2 d-flex' >
                <div className='me-auto'>
                  {tableTask.task}
                </div>
                <div>
                  <i className={"h5 me-2 " + (tableTask.completed ? "bi bi-check-square-fill text-primary" : "bi bi-square")}
                    style={{ cursor: "pointer" }} onClick={() => changeTaskStatus(index)} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Table
