import { useState } from "react";
import Todo from "./Todo";

const TaskInput = ()=>{
    const [todos,setTodos] = useState([]);
    const [taskInput,setTaskInput] = useState("");
    
    const addTask = ()=>{
        if(taskInput!==""){
        setTodos([...todos,taskInput]);
        setTaskInput("");
        }
    }
    const changeHandler = (e)=>{
        setTaskInput(e.target.value);   
    }
    return (
    <div>
        <div className="task-input-container">
            <input type="text" id="taskInput" className="task-input"
            onChange = {changeHandler} placeholder="Enter a task..." value = {taskInput} />
            <button className="add-task-btn" onClick={addTask}>Add task</button>
            <hr className='line'/>
        </div>
        <div className="task-container">
            {todos.map(todo=> <Todo todo = {todo} key= {todo}/>)}
        </div>
      
    </div> 
    );

}
export default TaskInput;