import { useState } from "react";

const Todo = (props)=>{
       const [isTaskDone,setTaskDone] = useState(false);
       const hideTheTask = ()=>{
              setTaskDone(true);
       }

 return(
       <>
              {!isTaskDone && ( // Use logical && operator for conditional rendering
              <div className="todo-task">
                     <span className="task-text">{props.todo}</span>
                     <button className="done-button" onClick={hideTheTask}>Done</button>
              </div>
              )}
       </>
   

 );


}
export default Todo;