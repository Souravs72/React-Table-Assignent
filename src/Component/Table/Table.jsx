import React, { useState } from 'react'

function Table() {

  const [tableTasks, setTableTasks] = useState([{ task: "Ecommerce Application",
        completed: false }, { task: "Blockchain Development", completed: true },
        { task: "Java Development", completed: true },
        { task: "Frappe Development", completed: false },
        { task: "Machine Learning", completed: false },
        { task: "Neural Networks", completed: false },
        { task: "REST APIs", completed: false }

  ])

  function changeTaskStatus(index) {
    let newTableTasks = [...tableTasks]
    newTableTasks[index].completed = !newTableTasks[index].completed
    setTableTasks(newTableTasks)
  }

  return (
    <div className='container my-3'>
      <h2 className="text-center border-bottom mb-5">Tasks</h2>
      <div className="mx-auto rounded border p-4" >

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
