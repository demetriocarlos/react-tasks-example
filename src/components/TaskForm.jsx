
import { useState, useContext } from "react"
//mport { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

 function TaskForm () {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const {createTask}= useContext(TaskContext)


    
    const handleSubmit = (e) => {
      e.preventDefault()
        console.log(title, description)
        createTask({
          title, 
          description
          
        })
      setTitle('')
      setDescription('')
    }
    return(
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slice-800 p-10  mb-4">  
        <h1 className="text-2x1 fonbo-bold text-white mb-4">Crea Tu Tarea</h1>
        <input placeholder="escribe tu tarea"  
          onChange={ (e) => {setTitle(e.target.value)}} 
          value={title}
          //autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
          />
        
        <textarea placeholder="escribe la descripcion de esta tarea" 
           onChange={ (e) => {setDescription(e.target.value)}}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
          ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">
          Guardar
        </button>
      </form>
  </div>
    
    )
  }
  
  export default  TaskForm