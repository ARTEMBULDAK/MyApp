import React, { useState } from "react"

function ToDoList(){


    const [tasks, setTasks] = useState(['ПЕРВАЯ ЗАДАЧА', "ВТОРАЯ ЗАДАЧА"]);
    const [newTask, setNewTask] = useState('');


    function handInput(event){
        setNewTask(event.target.value)

    }

    function addTask(){
        setTasks([...tasks,newTask]);
        setNewTask('');
    }

    function deleteTask(index){
        const updateTasks = tasks.filter((_,i)=> i !==index);
        setTasks(updateTasks);
    }

    return(

        <div className="to_do_list_container">
            <h1>To Do List</h1>
        
                <div className="AddTask_container">
                    <input className="input" type="text"
                    placeholder="Введите название задачи" 
                    value ={newTask}
                    onChange={handInput}/>

                    <button className="add_task_button" onClick={addTask}>
                        Создать задачу
                    </button>
                </div>

            <ol className="list">
                {tasks.map((task,index)=>
                <li className="item_task" key={index}>
                    {index+1}-{task}
                    <button className="delete-button" onClick={()=>deleteTask(index)}>Удалить</button>
                </li>
                
                )}
            </ol>







        </div>

        );

}
export default ToDoList